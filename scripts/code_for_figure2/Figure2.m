% Code to generate Figure 2 for
% *Hall-McMaster & *Zika, 2025
% Computational Psychiatry

% This figure creates plots for core theoretical predictions
% based on Optimal Foraging Theory and generates corresponding empirical
% plots


% define general settings
col1=[164,79,132]/255;
col2=[103,162,215]/255;
col=[col1;col2];
linewidth=3;
axis_linewidth=3;
xslim=0.75;
x=[1,2];
fontsize=30;

% do you want to save the plots?
do_save=0;
save_res=300;

% close previous figures
close all

%% patch time
% predicted effect
fig=figure;
y=[100,50];
y=[13.5*2,13.5];

b=bar(x,y,'facecolor', 'flat','LineWidth',linewidth);
b.CData = col;
box('off');
yticks([]);
xticklabels({'sED','HC'});
ylabel('Patch time (s)')
xlabel('Group');
alpha(0.8);
set(gca,'fontsize',fontsize);
set(gca, 'LineWidth', axis_linewidth);
ylim([0,40]);
ax = gca;
originalPosition = ax.Position;
newPosition = [originalPosition(1), originalPosition(2), originalPosition(3) * xslim, originalPosition(4)];
ax.Position = newPosition;

if do_save
    filename='../Figures/patch_time_prediction.png';
    exportgraphics(fig, filename, 'Resolution', save_res);
end

%% patch time
% null effect
y=[13.5,13.5];
fig=figure;
b=bar(x,y,'facecolor', 'flat','LineWidth',linewidth);
b.CData = col;
box('off');
yticks([]);
xticklabels({'sED','HC'});
ylabel('Patch time (s)')
xlabel('Group');
alpha(0.8);
set(gca,'fontsize',fontsize);
set(gca, 'LineWidth', axis_linewidth);
ylim([0,100]);
ylim([0,40]);
ax = gca;
originalPosition = ax.Position;
newPosition = [originalPosition(1), originalPosition(2), originalPosition(3) * xslim, originalPosition(4)];
ax.Position = newPosition;

if do_save
    filename='../Figures/patch_time_null.png';
    exportgraphics(fig, filename, 'Resolution', save_res);
end

%% patch time
% actual data
patch_time=readtable('data_patch_time.csv');
patch_reward=readtable('data_reward.csv');

% 1. Extract values for each group
patch_time_ED = patch_time(strcmp(patch_time.group, 'group1'), :);
patch_time_HC = patch_time(strcmp(patch_time.group, 'group2'), :);

patch_reward_ED = patch_reward(strcmp(patch_reward.group, 'group1'), :);
patch_reward_HC = patch_reward(strcmp(patch_reward.group, 'group2'), :);

% 2. Generate figures
% patch time
x=[1,2];
y=[mean(patch_time_ED.patch_time),mean(patch_time_HC.patch_time)];
fig=figure;
b=bar(x,y,'facecolor', 'flat','LineWidth',linewidth);
b.CData = col;
box('off');
xticklabels({'sED','HC'});
ylabel('Patch time (s)')
xlabel('Group');
alpha(0.8);
set(gca,'fontsize',fontsize);
set(gca, 'LineWidth', axis_linewidth);
hold on

% overlay individual participants
nsubs_ED=height(patch_time_ED);
nsubs_HC=height(patch_time_HC);
for isub=1:nsubs_ED
    plot([1],patch_time_ED.patch_time(isub),'o', 'MarkerEdgeColor', 'k', 'MarkerFaceColor', 'none');
end
for isub=1:nsubs_HC
    plot([2],patch_time_HC.patch_time(isub),'o', 'MarkerEdgeColor', 'k', 'MarkerFaceColor', 'none');
end
ax = gca;
originalPosition = ax.Position;
newPosition = [originalPosition(1), originalPosition(2), originalPosition(3) * xslim, originalPosition(4)];
ax.Position = newPosition;

if do_save
    filename='../Figures/patch_time_data.png';
    exportgraphics(fig, filename, 'Resolution', save_res);
end

%% Leaving threshold
% predicted effect
fig=figure
y=[50,100];
y=[37.6,37.6*1.75];
b=bar(x,y,'facecolor', 'flat','LineWidth',linewidth);
b.CData = col;
box('off');
yticks([]);
xticklabels({'sED','HC'});
ylabel('Last Reward Before Leaving')
ylabel({'Reward prospect','at leaving time'});
xlabel('Group');
alpha(0.8);
set(gca,'fontsize',fontsize);
set(gca, 'LineWidth', axis_linewidth);
ylim([0,80]);
ax = gca;
originalPosition = ax.Position;
newPosition = [originalPosition(1), originalPosition(2), originalPosition(3) * xslim, originalPosition(4)];
ax.Position = newPosition;
if do_save
    filename='../Figures/patch_reward_prediction.png';
    exportgraphics(fig, filename, 'Resolution', save_res);
end

%% Leaving threshold
% null effect
fig=figure;
y=[50,50];
y=[37.6,37.6];
b=bar(x,y,'facecolor', 'flat','LineWidth',linewidth);
b.CData = col;
box('off');
yticks([]);
xticklabels({'sED','HC'});
ylabel('Last Reward Before Leaving')
ylabel({'Reward prospect','at leaving time'});
xlabel('Group');
alpha(0.8);
set(gca,'fontsize',fontsize);
set(gca, 'LineWidth', axis_linewidth);
ylim([0,80]);
ax = gca;
originalPosition = ax.Position;
newPosition = [originalPosition(1), originalPosition(2), originalPosition(3) * xslim, originalPosition(4)];
ax.Position = newPosition;

if do_save
    filename='../Figures/patch_reward_null.png';
    exportgraphics(fig, filename, 'Resolution', save_res);
end

%% Leaving threshold
% actual data
x=[1,2];
y=[mean(patch_reward_ED.reward_remaining),mean(patch_reward_HC.reward_remaining)];
fig=figure;
b=bar(x,y,'facecolor', 'flat','LineWidth',linewidth);
b.CData = col;
box('off');
xticklabels({'sED','HC'});
ylabel('Last Reward Before Leaving')
ylabel({'Reward prospect','at leaving time'});
xlabel('Group');
alpha(0.8);
set(gca,'fontsize',fontsize);
set(gca, 'LineWidth', axis_linewidth);
hold on

% overlay individual participants
nsubs_ED=height(patch_reward_ED);
nsubs_HC=height(patch_reward_HC);
for isub=1:nsubs_ED
    plot([1],patch_reward_ED.reward_remaining(isub),'o', 'MarkerEdgeColor', 'k', 'MarkerFaceColor', 'none');
end
for isub=1:nsubs_HC
    plot([2],patch_reward_HC.reward_remaining(isub),'o', 'MarkerEdgeColor', 'k', 'MarkerFaceColor', 'none');
end

ax = gca;
originalPosition = ax.Position;
newPosition = [originalPosition(1), originalPosition(2), originalPosition(3) * xslim, originalPosition(4)];
ax.Position = newPosition;
if do_save
    filename='../Figures/patch_reward_data.png';
    exportgraphics(fig, filename, 'Resolution', save_res);
end