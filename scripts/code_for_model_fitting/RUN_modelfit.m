% Code to run model fitting for
% *Hall-McMaster & *Zika, 2025
% Computational Psychiatry


% Notes
% To run this, ensure your current directory is the 'code_for_model_fitting' folder
% The following model fitting code comes from our earlier work on foraging
% (https://www.biorxiv.org/content/10.1101/2021.01.19.426950v1.full.pdf)
% It is based on a patch-leaving model proposed by Constantino & Daw (2015)
% (https://link.springer.com/article/10.3758/s13415-015-0350-y)

%% setup
clear all
close all

% settings
% 1. 'load_existing_outputs'
% if set to 1, the code will check for relevant existing outputs
% if found, statistical tests will be run on the existing outputs
% if set to 0, model fitting will be run from scratch,
load_existing_outputs=1;

% 2. 'save_stats_file'
% if set to 1, the code will save a statistical output file
% comparing latent variables between groups
% if set to 0, the code will print but not save the statistical outputs
save_stats_file=0;

% set paths
mydir    = pwd;
if ispc
    folders   = strfind(mydir,'\');
else
    folders   = strfind(mydir,'/');
end
path = mydir(1:folders(end-1));
fs = filesep;
datapath = [path 'anon-data']; % or [path 'foraging-ed-anon-data'];
modelpath = [pwd fs 'models'];
savepath = pwd;
addpath(datapath);
addpath(modelpath);

% define participant information
sublist=[1:123];
exclude=[];
sublist=setdiff(sublist,exclude);
nsubs=length(sublist);

% define block information
n_blks=4;

% define model fit settings
algopt = optimset('fmincon');
algopt = optimset(algopt,'Algorithm','interior-point','Display','off');

% initialise parameters
% global reward rate model (MVT)
startparam_global = [0 0.1 0.5 0.5];
minparam_global =   [-50 0 0 0];
maxparam_global =   [50 2 1 1];
trials_global=1;    %1 = all trials, 2 = first half of each block, 3 = second half of each block

% load full behav data
fname=[datapath fs 'task_data' fs 'full_beh_data.csv'];
T = readtable(fname); 

% get sub IDs
fname_qscores=[datapath fs 'questionnaires' fs 'anonymized_processed_questionnaire_data.csv'];
T_eat26=readtable(fname_qscores);
sub_ids=unique(T_eat26.PROLIFICID);
nsubs=length(sub_ids);
T_eat26 = T_eat26(strcmp(T_eat26.recruitment_group, 'group1'), :);
%T_eat26 = T_eat26(strcmp(T_eat26.recruitment_group, 'group2'), :);
%diagnosis=strcmp(T_eat26.diagnosis,'');

% add a new column for block type (i.e. decay travel time condition)
T.decay_lvl = string(T.decay_lvl);
T.travel_time_lvl = string(T.travel_time_lvl);
T.blk_type = zeros(height(T),1);
T.blk_type(T.decay_lvl == "high" & T.travel_time_lvl == "long")  = 1;
T.blk_type(T.decay_lvl == "high" & T.travel_time_lvl == "short") = 2;
T.blk_type(T.decay_lvl == "low"  & T.travel_time_lvl == "long")  = 3;
T.blk_type(T.decay_lvl == "low"  & T.travel_time_lvl == "short") = 4;

% create a table to store the results
sub_scores = table('Size', [nsubs, 8], ...
    'VariableTypes', {'string','string','double','double','double','double','double','double'}, ...
    'VariableNames', {'id','group','estimated_reward_rate','param_constant','param_beta','param_learning_rate','param_learning_rate_leave_decisions','fval'});

% check for existing output files if applicable
run_model_fitting=1;
if load_existing_outputs==1
    resultsfolder= ['results' fs 'parameter_fits'];
    model_output_fname=[resultsfolder fs 'global_model_fits.mat'];
    if isfile(model_output_fname)
       run_model_fitting=0;
       load(model_output_fname);
    end
end

%% loop over participants
if run_model_fitting==1
    for isub=1:nsubs
        sub=sublist(isub);

        % load subject data
        c_sub=sub_ids{isub};
        dat = T(strcmp(T.id, c_sub), :);
        group = dat.group{1};

        % testing global reward model
        fprintf(['Fitting model 1, sub' num2str(sublist(isub)) ' ... ']);
        cond_global=1;
        [pvec fval] = fmincon(@(P) Global_model(P,dat,trials_global,c_sub),startparam_global,[],[],[],[],minparam_global,maxparam_global,[],algopt);
        %sub_scores_forced(isub,:)=[pvec fval]; 
        [LL, trld, subjectiveRR] = Global_model(pvec,dat,trials_global,c_sub); 
        sub_scores(isub, :) = {c_sub, group, subjectiveRR, pvec(1),pvec(2),pvec(3),pvec(4), fval};
        cps = grpstats(trld.cchoice_prob, trld.cchoices);
        fprintf('LL %05.1f | mp(stay) %3.2f mp(leave) %3.2f | p(leave) %3.2f \n', LL, cps(1), cps(2), mean(trld.cchoices==2));
    end

    %% save model fits
    resultsfolder= ['results' fs 'parameter_fits' fs]; if ~exist(resultsfolder,'dir'); mkdir(resultsfolder); end
    save([resultsfolder 'global_model_fits.mat'],'sub_scores');
end

%% run statistical tests
T = sub_scores;
param_vars = {'estimated_reward_rate','param_learning_rate','param_learning_rate_leave_decisions','param_beta','param_constant'};
group_labels = string(T.group);  % ensure group labels are strings

group1_mask = group_labels == "group1"; % subclinical ED group
group2_mask = group_labels == "group2"; % healthy control group

% descriptive stats
% estimated reward rate
rr_M_group1=mean(T{group1_mask, param_vars{1}});
rr_SD_group1=std(T{group1_mask, param_vars{1}});
rr_M_group2=mean(T{group2_mask, param_vars{1}});
rr_SD_group2=std(T{group2_mask, param_vars{1}});

% constant
c_M_group1=mean(T{group1_mask, param_vars{2}});
c_SD_group1=std(T{group1_mask, param_vars{2}});
c_M_group2=mean(T{group2_mask, param_vars{2}});
c_SD_group2=std(T{group2_mask, param_vars{2}});

% beta
b_M_group1=mean(T{group1_mask, param_vars{3}});
b_SD_group1=std(T{group1_mask, param_vars{3}});
b_M_group2=mean(T{group2_mask, param_vars{3}});
b_SD_group2=std(T{group2_mask, param_vars{3}});

% learning rate/alpha
a_M_group1=mean(T{group1_mask, param_vars{4}});
a_SD_group1=std(T{group1_mask, param_vars{4}});
a_M_group2=mean(T{group2_mask, param_vars{4}});
a_SD_group2=std(T{group2_mask, param_vars{4}});

% learning rate/alpha (leave decision)
al_M_group1=mean(T{group1_mask, param_vars{5}});
al_SD_group1=std(T{group1_mask, param_vars{5}});
al_M_group2=mean(T{group2_mask, param_vars{5}});
al_SD_group2=std(T{group2_mask, param_vars{5}});

means_group1 = [rr_M_group1, c_M_group1, b_M_group1, a_M_group1, al_M_group1]';
sds_group1   = [rr_SD_group1, c_SD_group1, b_SD_group1, a_SD_group1, al_SD_group1]';
means_group2 = [rr_M_group2, c_M_group2, b_M_group2, a_M_group2, al_M_group2]';
sds_group2   = [rr_SD_group2, c_SD_group2, b_SD_group2, a_SD_group2, al_SD_group2]';

% store descriptives in a table
descriptive_statistics = table(...
    means_group1, sds_group1, ...
    means_group2, sds_group2, ...
    'RowNames', param_vars, ...
    'VariableNames', {'Mean_sED', 'SD_sED', 'Mean_HC', 'SD_HC'});

% compare variables across groups
pvals = zeros(1, numel(param_vars));
tstats = zeros(1, numel(param_vars));
dfs = zeros(1, numel(param_vars));
for i = 1:numel(param_vars)
    x1 = T{group1_mask, param_vars{i}};
    x2 = T{group2_mask, param_vars{i}};
    [~, p, ci, stats] = ttest2(x1, x2);
    pvals(i) = p;
    tstats(i)=stats.tstat;
    dfs(i)=stats.df;
end
statistical_test_results = table(param_vars',tstats', dfs', pvals', 'VariableNames', {'Parameter','t_stat', 'df', 'p_value'});

% display the descriptive table
disp(descriptive_statistics);

% display statistical results
disp(statistical_test_results);

% save stats file if applicable
if save_stats_file==1
    statfolder = [savepath '/results/stats']; if ~exist(statfolder,'dir'); mkdir(statfolder); end
    writetable(descriptive_statistics, [statfolder fs 'descriptive_statistics.csv'],'WriteRowNames', true);
    writetable(statistical_test_results, [statfolder fs 'statistical_test_results.csv']);
end
