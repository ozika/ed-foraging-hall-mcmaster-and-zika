% Code to run model fitting for
% *Hall-McMaster & *Zika, 2025
% Computational Psychiatry

% This function returns the negative log likelihood that participants make
% their patch leaving choices based on the average reward rate across patches

function [LL,trld,globalRR]=Global_model(x,dat,trials,sub)

% initialise model parameters
constant=x(1);
beta=x(2);
lr=x(3);
oc=x(4);

% define block information
n_blks=4;

% create empy vector to store probability data
globalRR=[];
store_choice_prob=[];
trct = 0;

cchoices = repmat(NaN, 1, 1000); 
cchoice_prob  = repmat(NaN, 1, 1000); 
cblock  = repmat(NaN, 1, 1000); 
crewards = repmat(NaN, 1, 1000); 
crewardrate  = repmat(NaN, 1, 1000);  
allprobs  = repmat(NaN, 2, 1000);


% loop over each block
for iblk=1:n_blks
    
    % initialise reward rate
    rr=50;
    rr_deci=50;
    
    % get data for current block type
    cdat = dat(find(dat.blk_type==iblk), :);  
    
    % skip the block if it is not the condition of interest
    %if cdat.blk_type(1)~=cond
    %    continue
    %end
   
    % get indices for actions in the block
    tidx = 1:size(cdat, 1);  
    
    %% Start modelling
    
    % if set as input, use a subset of trials
    %if trials==2     % first 1/2 of trials in block
    %    tidx=tidx(1:length(tidx)/2);    
    %elseif trials==3 % second 1/2 of trials in block
    %    tidx=tidx((length(tidx)/2)+1:end);
    %end
    
    % loop over actions
    num_exploit_actions=0;
    for iact=2:length(tidx)
        trct = trct + 1; % running trial count 
        probs = zeros(1, 2);
        %curr_replen=cdat.currentPatchReplenishRate(iact);
        %curr_pat = find(curr_replen ==  [0.05, 0.1, 0.15]);         
        prev_outcome = cdat.patch_reward_recieved(iact-1);
        if cdat.decision_type(iact-1)==2
            prev_outcome=0; % 0 points gained on a leave decision
        end
        
        % get stay probability 
        if cdat.decision_type(iact-1)==1
        prob_stay=mvt(beta,constant,prev_outcome,rr);
        probs(1) = max(prob_stay, 1e-5); 
        probs(1) = min(prob_stay, 1-1e-5);
        probs(2) = 1-probs(1);
        end
        
        if cdat.decision_type(iact-1)==2
            probs(1)=1-1e-5;
            probs(2)=1-probs(1);
        end
        
        % determine the action taken on current trial
        curr_act = cdat.decision_type(iact); 
        
        % store negative log probability of the choice made under the model
        store_choice_prob=vertcat(store_choice_prob,-log(probs(curr_act)));
        
        % update reward rate estimate after reward outcome
        if curr_act==1
            rew=cdat.patch_reward_recieved(iact);
            rr = estimate_rr(lr,rew,rr);
        else
            rew=0;
        end
        
        % down-weight reward rate estimate when leaving
        if curr_act==2
        rr = estimate_rr(oc, 0, rr); 
        end

        % save trialwise results 	
        trld.cchoices(trct) = curr_act; 
        trld.cchoice_prob(trct)  = probs(curr_act); 
        trld.crewards(trct)  = rew; 
        trld.crewardrate(trct)  = rr; 
        trld.cblock(trct)  = iblk; 
        trld.allprobs(:,trct)  = probs; 
        trld.LL(:,trct)=log(probs(curr_act));
        trld.x1(trct) = x(1);
        trld.x2(trct) = x(2);
        trld.x3(trct) = x(3);
        trld.x4(trct) = x(4);
        %trld.cpatch(trct) = curr_pat;
    end
    
end

% after all blocks, save trialwise modelling results
sfolder='results/trialwise_data/global/'; if ~exist(sfolder,'dir'); mkdir(sfolder); end
save([sfolder num2str(sub) '_tdat.mat'],'trld');

% sum the negative log probability to get model likelihood
LL=sum(store_choice_prob);
globalRR=mean(trld.crewardrate);
%grpstats(trld.cchoice_prob(1:trct), trld.cchoices(1:trct));


%% General functions
% logistic decision rule based on Constantino and Daw (2015)
    function prob_stay = mvt(beta,constant,prev_outcome,rr)
        prob_stay=1/(1 + exp((-constant - beta*(prev_outcome - rr))));
    end

% update reward rate estimate after each outcome
    function new_rr = estimate_rr(lr,rew,rr)
        delta = rew-rr;
        new_rr = rr+(lr*delta);
    end

end
