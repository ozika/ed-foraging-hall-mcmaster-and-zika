/********************** 
 * Foraging_Task Test *
 **********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'foraging_task';  // from the Builder filename that created this script
let expInfo = {'Prolific ID': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const trials_welcomeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_welcomeLoopBegin(trials_welcomeLoopScheduler));
flowScheduler.add(trials_welcomeLoopScheduler);
flowScheduler.add(trials_welcomeLoopEnd);
const trials_screeningLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_screeningLoopBegin(trials_screeningLoopScheduler));
flowScheduler.add(trials_screeningLoopScheduler);
flowScheduler.add(trials_screeningLoopEnd);
const trials_demographicsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_demographicsLoopBegin(trials_demographicsLoopScheduler));
flowScheduler.add(trials_demographicsLoopScheduler);
flowScheduler.add(trials_demographicsLoopEnd);
flowScheduler.add(screening_msgRoutineBegin());
flowScheduler.add(screening_msgRoutineEachFrame());
flowScheduler.add(screening_msgRoutineEnd());
const trials_instructionsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_instructionsLoopBegin(trials_instructionsLoopScheduler));
flowScheduler.add(trials_instructionsLoopScheduler);
flowScheduler.add(trials_instructionsLoopEnd);
const blk_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blk_loopLoopBegin(blk_loopLoopScheduler));
flowScheduler.add(blk_loopLoopScheduler);
flowScheduler.add(blk_loopLoopEnd);
flowScheduler.add(close_exptRoutineBegin());
flowScheduler.add(close_exptRoutineEachFrame());
flowScheduler.add(close_exptRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/instruc3.png', 'path': 'stimuli/instruc3.png'},
    {'name': 'stimuli/pirate_ship.png', 'path': 'stimuli/pirate_ship.png'},
    {'name': 'stimuli/instruc6.png', 'path': 'stimuli/instruc6.png'},
    {'name': 'stimuli/instruc5.png', 'path': 'stimuli/instruc5.png'},
    {'name': 'stimuli/coin.png', 'path': 'stimuli/coin.png'},
    {'name': 'stimuli/instruc4.png', 'path': 'stimuli/instruc4.png'},
    {'name': 'stimuli/instruc8.png', 'path': 'stimuli/instruc8.png'},
    {'name': 'stimuli/instruc1.png', 'path': 'stimuli/instruc1.png'},
    {'name': 'stimuli/instruc2.png', 'path': 'stimuli/instruc2.png'},
    {'name': 'stimuli/instruc7.png', 'path': 'stimuli/instruc7.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=C14MZR1X', '');

  return Scheduler.Event.NEXT;
}


var welcomeClock;
var intruc_msg_counter;
var demographic_msg_counter;
var screening_msg_counter;
var task_instruc_msg_counter;
var num_welcome;
var num_screening_questions;
var num_demographic_questions;
var num_instruction_trials;
var do_instruc;
var do_screening;
var do_demographics;
var do_task_instruc;
var screeningQ1;
var screeningQ2;
var label_txt;
var age;
var gender;
var educationYears;
var instruc_imgs;
var task_instruc_img_opacity;
var task_instruc_txt_pos;
var task_instruc_space_txt_pos;
var terminate_expt;
var terminate_expt_time;
var screeningQ1_passed;
var screeningQ2_passed;
var final_msg;
var start_time_entire_experiment;
var task_instruc_txt;
var task_instruc_resp;
var screening_qsClock;
var button_col;
var button_size;
var button1_pos;
var button2_pos;
var button3_pos;
var button4_pos;
var button5_pos;
var btxt_col;
var btxt_size;
var btxt1_pos;
var btxt2_pos;
var btxt3_pos;
var btxt4_pos;
var btxt5_pos;
var text_3;
var button1;
var button2;
var button3;
var button4;
var button5;
var mouse;
var btxt1;
var btxt2;
var btxt3;
var btxt4;
var btxt5;
var demographicsClock;
var demographics_txt;
var demographics_input;
var demo_resp;
var screening_msgClock;
var key_resp_2;
var text;
var task_instrucClock;
var instruc_txt;
var instruc_image;
var text_4;
var key_resp;
var blk_instrucClock;
var blk_order;
var blk_idx;
var curr_blk_number;
var total_blk_number;
var actions_blk;
var sval_mean;
var sval_sd;
var k_mean;
var k_sd;
var time_per_block;
var blk_txt;
var blk_instruc_resp;
var travelClock;
var total_actions;
var patchTime;
var travel_duration;
var fbk_duration;
var curr_isld;
var keys_allowed;
var agent;
var bounty;
var travel_msg;
var ocean_size;
var isld_size;
var isld_size_original;
var agent_size;
var treasure_size;
var center_txt_pos;
var cross_size;
var action_msg_size;
var ocean_pos;
var isld_pos;
var curr_pos;
var ship_pos;
var goal_pos;
var rew_pos;
var treasure_pos;
var action_msg_pos;
var ocean_col;
var isld_col;
var box_opacity;
var f_key_opacity;
var j_key_opacity;
var k_key_opacity;
var cross_opacity;
var fbk_opacity;
var rew_displayed;
var total_points;
var points_blk;
var mean_reward_block;
var mean_reward_entire_experiment;
var keys_first_exploit_allowed;
var keys_exploit_allowed;
var treasure_pos_orig;
var exploit_actions;
var ocean_select_2;
var travel_text;
var travel_blk_time_remaining;
var exploitClock;
var ocean_exploit;
var isld_exploit;
var agent_exploit;
var points_txt;
var dig_sail_txt;
var exploit_action_count;
var exploit_resp;
var exploit_fbkClock;
var ocean_exploit_2;
var isld_exploit_2;
var agent_exploit_2;
var points_txt_2;
var exploit_fbk_dig_sail_txt;
var exploit_fbk_action_count;
var treasure;
var post_blk_msgClock;
var text_2;
var post_blk_resp;
var close_exptClock;
var closing_msg_txt;
var closing_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  // define screen counters
  intruc_msg_counter=0;
  demographic_msg_counter=0;
  screening_msg_counter=0;
  task_instruc_msg_counter=0;
  
  // number of slides to present
  num_welcome=6;
  num_screening_questions=0; //2;
  num_demographic_questions=3;
  num_instruction_trials=9//10;
  
  // run phase?
  do_instruc=1;
  do_screening=1;
  do_demographics=1;
  do_task_instruc=1;
  
  // initialise variables
  screeningQ1=[];
  screeningQ2=[];
  label_txt='';
  age=[];
  gender=[];
  educationYears=[];
  
  // load task instruction images
  //instruc_imgs=["stimuli/free_choice1.png","stimuli/free_choice2.png","stimuli/free_choice3.png","stimuli/free_choice4.png","stimuli/free_choice5.png","stimuli/free_choice6.png","stimuli/free_choice6.png","stimuli/free_choice6.png","stimuli/forced_choice1.png","stimuli/forced_choice1.png"];
  //instruc_imgs=["stimuli/instruc1.png","stimuli/instruc2.png","stimuli/instruc3.png","stimuli/instruc4.png","stimuli/instruc5.png","stimuli/instruc6.png","stimuli/instruc7.png","stimuli/instruc8.png","stimuli/instruc8.png","stimuli/instruc8.png"];
  instruc_imgs=["stimuli/instruc1.png","stimuli/instruc2.png","stimuli/instruc3.png","stimuli/instruc3.png","stimuli/instruc5.png","stimuli/instruc6.png","stimuli/instruc7.png","stimuli/instruc8.png","stimuli/instruc8.png","stimuli/instruc8.png"];
  
  
  // task instructions opacity and positioning
      task_instruc_img_opacity=1;
      task_instruc_txt_pos=[0, 0.3];
      task_instruc_space_txt_pos=[0, -0.4]
      
  // initialise screening variables
  terminate_expt=0;
  terminate_expt_time=20;
  screeningQ1_passed=0;
  screeningQ2_passed=0;
  age=0;
  
  // final message if experiment is finished under normal circumstances
  final_msg=['Shiver me timbers! You completed the experiment. Press space to claim your treasure. Feel free to send us a message and let us know how found the task.'];
  
  // initalise variables for saving
  // participant variables
  psychoJS.experiment.addData('consent_given', 0);
  psychoJS.experiment.addData('screeningQ1', 0);
  psychoJS.experiment.addData('screeningQ2', 0);
  psychoJS.experiment.addData('age', 0);
  psychoJS.experiment.addData('gender', 0);
  psychoJS.experiment.addData('EducationYears', 0);
  
  // setting and block variables
  psychoJS.experiment.addData('starting_value_mean', 0); // should be defined under begin experiment in travel component
  psychoJS.experiment.addData('starting_value_sd', 0);   
  psychoJS.experiment.addData('decay_rate_mean', 0);     // should update based on block type
  psychoJS.experiment.addData('decay_rate_sd', 0);
  psychoJS.experiment.addData('blk_duration_mins', 0);
  psychoJS.experiment.addData('travel_duration', 0);     // should update based on block type
  psychoJS.experiment.addData('feedback_duration', 0);
  psychoJS.experiment.addData('blk_number', 0);
  psychoJS.experiment.addData('blk_type', 0); // 1=long-steep, 2=long-shallow, 3=short-steep, 4=short-shallow
  psychoJS.experiment.addData('starting_value', 0);
  
  // trial variables
  psychoJS.experiment.addData('trial_phase', 0);   // 1 for travel, 2 for exploit/leave decision, 3 for exploit feedback  
  psychoJS.experiment.addData('decision_type', 0); // initialise. Use 1 for stay, 2 for leave
  psychoJS.experiment.addData('decay_rate', 0);    // decay value drawn from the distribution
  psychoJS.experiment.addData('patch_reward_prospective', 0); // the prospective reward for an exploit action
  psychoJS.experiment.addData('patch_reward_recieved', 0);    // the reward recieved for the decision
  psychoJS.experiment.addData('patch_time_elapsed_seconds', 0); // time spent in the current patch
  psychoJS.experiment.addData('patch_actions_taken', 0);        // number of actions related to the current patch (exploit and leave)
  psychoJS.experiment.addData('exploit_phase_key', 0);
  psychoJS.experiment.addData('exploit_phase_RT', 0);
  psychoJS.experiment.addData('blk_time_event_onset_seconds', 0); // time recorded at begin routine
  psychoJS.experiment.addData('blk_time_event_offset_seconds', 0);// time record at end routine
  psychoJS.experiment.addData('blk_time_fbk_offset_seconds', 0);  // offset time + feedback duration
  psychoJS.experiment.addData('blk_time_remaining_event_onset', 0);
  psychoJS.experiment.addData('blk_time_remaining_event_offset', 0);
  psychoJS.experiment.addData('blk_points', 0);
  psychoJS.experiment.addData('blk_actions', 0);
  psychoJS.experiment.addData('mean_reward_block_time-based', 0); 
  psychoJS.experiment.addData('mean_reward_block_action-based', 0); 
  
  // broader variables
  psychoJS.experiment.addData('total_points', total_points);
  psychoJS.experiment.addData('total_actions', total_actions);
  psychoJS.experiment.addData('time_elapsed_entire_foraging_task', 0); 
  psychoJS.experiment.addData('time_elapsed_entire_experiment', 0); 
  
  // start timer for entire experiment
  start_time_entire_experiment=Date.now()
  task_instruc_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'task_instruc_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  task_instruc_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "screening_qs"
  screening_qsClock = new util.Clock();
  // define button positions for screening qs
  button_col = 'black'
  button_size=[0.1, 0.1]
  button1_pos=[-0.45, -0.15]
  button2_pos=[-0.225, -0.15]
  button3_pos=[0, -0.15]
  button4_pos=[0.225, -0.15]
  button5_pos=[0.45, -0.15]
  
  btxt_col = 'black'
  btxt_size=0.03
  btxt1_pos=[-0.45, -0.215]
  btxt2_pos=[-0.225, -0.215]
  btxt3_pos=[0, -0.215]
  btxt4_pos=[0.225, -0.215]
  btxt5_pos=[0.45, -0.215]
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  button1 = new visual.Polygon ({
    win: psychoJS.window, name: 'button1', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  button2 = new visual.Polygon ({
    win: psychoJS.window, name: 'button2', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  button3 = new visual.Polygon ({
    win: psychoJS.window, name: 'button3', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  button4 = new visual.Polygon ({
    win: psychoJS.window, name: 'button4', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  button5 = new visual.Polygon ({
    win: psychoJS.window, name: 'button5', 
    edges: 30, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  btxt1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt1',
    text: '',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -8.0 
  });
  
  btxt2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  btxt3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  btxt4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -11.0 
  });
  
  btxt5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'btxt5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -12.0 
  });
  
  // Initialize components for Routine "demographics"
  demographicsClock = new util.Clock();
  demographics_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'demographics_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  demographics_input = new visual.TextStim({
    win: psychoJS.window,
    name: 'demographics_input',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  demo_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "screening_msg"
  screening_msgClock = new util.Clock();
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "task_instruc"
  task_instrucClock = new util.Clock();
  instruc_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruc_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instruc_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruc_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 0.05)], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Press space to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blk_instruc"
  blk_instrucClock = new util.Clock();
  // define shuffle function
  window.shuffle = function(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
  
  // define block information
  blk_order = [1, 2, 3, 4];
  shuffle(blk_order);
  blk_idx = -1;         // updated when routine begins
  curr_blk_number = 0;  // used for end of block message. Will update to one when starting block_instruc
  total_blk_number = 4; // number of blocks in the experiment
  actions_blk=0;        // reset total actions for the new block
  sval_mean=100;         // mean of the distribution from which the starting value is drawn
  sval_sd=10;            // standard deviation of the distribution from which the starting value is drawn
  k_mean=0.91           // mean of the distribution from which the decay rate is drawn. Reset to a block specific number under 'Begin Routine'
  k_sd=0.07             // standard deviation of the above
  time_per_block=7.5;     // the amount of time allowed per block in mintues
  
  blk_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'blk_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  blk_instruc_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "travel"
  travelClock = new util.Clock();
  // initialise action counter for block and full experiment
  actions_blk=0;
  total_actions=0;
  patchTime=0;
  
  // set durations
  travel_duration = 10;
  fbk_duration=1.5; //3 seconds in Daw but seems too long?
  
  // set curr_isld to non-island value for first trial
  curr_isld = 2;
  
  // set keys allowed
  keys_allowed = ['space', 's'];
  
  // set image paths
  agent = "stimuli/pirate_ship.png";
  bounty = "stimuli/coin.png";
  
  // set travel message
  travel_msg='Sailing in progress...'
  travel_msg='Sailing to a new island...'
  
  // set object sizes
  ocean_size = [0.9, 0.9];
  isld_size = [0.25, 0.25];
  isld_size_original = [0.25, 0.25];
  agent_size = [0.1, 0.1];
  treasure_size = [0.025, 0.025];
  treasure_size = [0.05, 0.05];
  center_txt_pos=[0, -0.2];
  cross_size = 0.035;
  action_msg_size = 0.02;
  
  // set object positions
  ocean_pos = [0, 0];
  isld_pos = [0, 0];
  curr_pos = [0, -0.1];
  ship_pos = [0, -0.1];
  goal_pos = [0, -0.1];
  //rew_pos = [0, 0];
  //treasure_pos = [0.035, 0];
  //rew_pos = [-0.025, 0];
  //treasure_pos = [0.045, 0];
  //rew_pos = [-0.035, 0];
  //treasure_pos = [0.04, 0];
  rew_pos = [-0.0275, 0];
  treasure_pos = [0.0325, 0];
  action_msg_pos = [0.325, 0.425];
  
  // set object colours
  ocean_col = [(12 / 255), (164 / 255), (255 / 255)];
  isld_col = [0, (137 / 255), (82 / 255)];
  
  // set opacity values
  box_opacity = 0;
  f_key_opacity=1;
  j_key_opacity=1;
  k_key_opacity=1;
  cross_opacity=1;
  fbk_opacity=1;
  
  // initialise reward feedback to display and other reward variables
  rew_displayed = 0;
  total_points=0;
  points_blk=0;
  mean_reward_block=0;
  mean_reward_entire_experiment=0;
  
  // set keys allowed for first action in an island
  keys_first_exploit_allowed=['space']; // ensure first action must be a dig
  
  // set keys allowed for remaining actions in an island
  keys_exploit_allowed=['space','s']; // allows actions after the first to be a dig or to set sail
  
  // store a backup copy
  treasure_pos_orig=[];
  treasure_pos_orig=[...treasure_pos];
  
  // set local action counter for upcoming island
  exploit_actions = 0;
  ocean_select_2 = new visual.Rect ({
    win: psychoJS.window, name: 'ocean_select_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(ocean_col),
    fillColor: new util.Color(ocean_col),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  travel_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'travel_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  travel_blk_time_remaining = new visual.TextStim({
    win: psychoJS.window,
    name: 'travel_blk_time_remaining',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "exploit"
  exploitClock = new util.Clock();
  
  
  
  ocean_exploit = new visual.Rect ({
    win: psychoJS.window, name: 'ocean_exploit', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(ocean_col),
    fillColor: new util.Color(ocean_col),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  isld_exploit = new visual.Polygon ({
    win: psychoJS.window, name: 'isld_exploit', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  agent_exploit = new visual.ImageStim({
    win : psychoJS.window,
    name : 'agent_exploit', units : undefined, 
    image : agent, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  points_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'points_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 0,
    depth: -4.0 
  });
  
  dig_sail_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'dig_sail_txt',
    text: 'Press space to dig for treasure and s to set sail',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  exploit_action_count = new visual.TextStim({
    win: psychoJS.window,
    name: 'exploit_action_count',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  exploit_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exploit_fbk"
  exploit_fbkClock = new util.Clock();
  ocean_exploit_2 = new visual.Rect ({
    win: psychoJS.window, name: 'ocean_exploit_2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(ocean_col),
    fillColor: new util.Color(ocean_col),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  isld_exploit_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'isld_exploit_2', 
    edges: 25, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(isld_col),
    fillColor: new util.Color(isld_col),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  agent_exploit_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'agent_exploit_2', units : undefined, 
    image : agent, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  points_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'points_txt_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  exploit_fbk_dig_sail_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'exploit_fbk_dig_sail_txt',
    text: 'Press space to dig for treasure and s to set sail',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  exploit_fbk_action_count = new visual.TextStim({
    win: psychoJS.window,
    name: 'exploit_fbk_action_count',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  treasure = new visual.ImageStim({
    win : psychoJS.window,
    name : 'treasure', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "post_blk_msg"
  post_blk_msgClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  post_blk_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "close_expt"
  close_exptClock = new util.Clock();
  closing_msg_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'closing_msg_txt',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  closing_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_welcome;
var currentLoop;
function trials_welcomeLoopBegin(trials_welcomeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_welcome = new TrialHandler({
      psychoJS: psychoJS,
      nReps: num_welcome, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_welcome'
    });
    psychoJS.experiment.addLoop(trials_welcome); // add the loop to the experiment
    currentLoop = trials_welcome;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_welcome of trials_welcome) {
      const snapshot = trials_welcome.getSnapshot();
      trials_welcomeLoopScheduler.add(importConditions(snapshot));
      trials_welcomeLoopScheduler.add(welcomeRoutineBegin(snapshot));
      trials_welcomeLoopScheduler.add(welcomeRoutineEachFrame());
      trials_welcomeLoopScheduler.add(welcomeRoutineEnd());
      trials_welcomeLoopScheduler.add(endLoopIteration(trials_welcomeLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_welcomeLoopEnd() {
  psychoJS.experiment.removeLoop(trials_welcome);

  return Scheduler.Event.NEXT;
}


var trials_screening;
function trials_screeningLoopBegin(trials_screeningLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_screening = new TrialHandler({
      psychoJS: psychoJS,
      nReps: num_screening_questions, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_screening'
    });
    psychoJS.experiment.addLoop(trials_screening); // add the loop to the experiment
    currentLoop = trials_screening;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_screening of trials_screening) {
      const snapshot = trials_screening.getSnapshot();
      trials_screeningLoopScheduler.add(importConditions(snapshot));
      trials_screeningLoopScheduler.add(screening_qsRoutineBegin(snapshot));
      trials_screeningLoopScheduler.add(screening_qsRoutineEachFrame());
      trials_screeningLoopScheduler.add(screening_qsRoutineEnd());
      trials_screeningLoopScheduler.add(endLoopIteration(trials_screeningLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_screeningLoopEnd() {
  psychoJS.experiment.removeLoop(trials_screening);

  return Scheduler.Event.NEXT;
}


var trials_demographics;
function trials_demographicsLoopBegin(trials_demographicsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_demographics = new TrialHandler({
      psychoJS: psychoJS,
      nReps: num_demographic_questions, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_demographics'
    });
    psychoJS.experiment.addLoop(trials_demographics); // add the loop to the experiment
    currentLoop = trials_demographics;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_demographic of trials_demographics) {
      const snapshot = trials_demographics.getSnapshot();
      trials_demographicsLoopScheduler.add(importConditions(snapshot));
      trials_demographicsLoopScheduler.add(demographicsRoutineBegin(snapshot));
      trials_demographicsLoopScheduler.add(demographicsRoutineEachFrame());
      trials_demographicsLoopScheduler.add(demographicsRoutineEnd());
      trials_demographicsLoopScheduler.add(endLoopIteration(trials_demographicsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_demographicsLoopEnd() {
  psychoJS.experiment.removeLoop(trials_demographics);

  return Scheduler.Event.NEXT;
}


var trials_instructions;
function trials_instructionsLoopBegin(trials_instructionsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_instructions = new TrialHandler({
      psychoJS: psychoJS,
      nReps: num_instruction_trials, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_instructions'
    });
    psychoJS.experiment.addLoop(trials_instructions); // add the loop to the experiment
    currentLoop = trials_instructions;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_instruction of trials_instructions) {
      const snapshot = trials_instructions.getSnapshot();
      trials_instructionsLoopScheduler.add(importConditions(snapshot));
      trials_instructionsLoopScheduler.add(task_instrucRoutineBegin(snapshot));
      trials_instructionsLoopScheduler.add(task_instrucRoutineEachFrame());
      trials_instructionsLoopScheduler.add(task_instrucRoutineEnd());
      trials_instructionsLoopScheduler.add(endLoopIteration(trials_instructionsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_instructionsLoopEnd() {
  psychoJS.experiment.removeLoop(trials_instructions);

  return Scheduler.Event.NEXT;
}


var blk_loop;
function blk_loopLoopBegin(blk_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blk_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: total_blk_number, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blk_loop'
    });
    psychoJS.experiment.addLoop(blk_loop); // add the loop to the experiment
    currentLoop = blk_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlk_loop of blk_loop) {
      const snapshot = blk_loop.getSnapshot();
      blk_loopLoopScheduler.add(importConditions(snapshot));
      blk_loopLoopScheduler.add(blk_instrucRoutineBegin(snapshot));
      blk_loopLoopScheduler.add(blk_instrucRoutineEachFrame());
      blk_loopLoopScheduler.add(blk_instrucRoutineEnd());
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blk_loopLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blk_loopLoopScheduler.add(trialsLoopScheduler);
      blk_loopLoopScheduler.add(trialsLoopEnd);
      blk_loopLoopScheduler.add(post_blk_msgRoutineBegin(snapshot));
      blk_loopLoopScheduler.add(post_blk_msgRoutineEachFrame());
      blk_loopLoopScheduler.add(post_blk_msgRoutineEnd());
      blk_loopLoopScheduler.add(endLoopIteration(blk_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(travelRoutineBegin(snapshot));
      trialsLoopScheduler.add(travelRoutineEachFrame());
      trialsLoopScheduler.add(travelRoutineEnd());
      const exploit_loopLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(exploit_loopLoopBegin(exploit_loopLoopScheduler, snapshot));
      trialsLoopScheduler.add(exploit_loopLoopScheduler);
      trialsLoopScheduler.add(exploit_loopLoopEnd);
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var exploit_loop;
function exploit_loopLoopBegin(exploit_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exploit_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'exploit_loop'
    });
    psychoJS.experiment.addLoop(exploit_loop); // add the loop to the experiment
    currentLoop = exploit_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExploit_loop of exploit_loop) {
      const snapshot = exploit_loop.getSnapshot();
      exploit_loopLoopScheduler.add(importConditions(snapshot));
      exploit_loopLoopScheduler.add(exploitRoutineBegin(snapshot));
      exploit_loopLoopScheduler.add(exploitRoutineEachFrame());
      exploit_loopLoopScheduler.add(exploitRoutineEnd());
      exploit_loopLoopScheduler.add(exploit_fbkRoutineBegin(snapshot));
      exploit_loopLoopScheduler.add(exploit_fbkRoutineEachFrame());
      exploit_loopLoopScheduler.add(exploit_fbkRoutineEnd());
      exploit_loopLoopScheduler.add(endLoopIteration(exploit_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function exploit_loopLoopEnd() {
  psychoJS.experiment.removeLoop(exploit_loop);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


async function blk_loopLoopEnd() {
  psychoJS.experiment.removeLoop(blk_loop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var task_instruc_msg;
var _task_instruc_resp_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // define function to load instructions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })(); 
    
    if ((intruc_msg_counter===0)) {
    task_instruc_msg=instructions.consent.page1
    }
    
    if ((intruc_msg_counter===1)) {
    task_instruc_msg=instructions.consent.page2
    }
    
    if ((intruc_msg_counter===2)) {
    task_instruc_msg=instructions.consent.page3
    }
    
    if ((intruc_msg_counter===3)) {
    task_instruc_msg=instructions.consent.page4
    }
    
    if ((intruc_msg_counter===4)) {
    task_instruc_msg=instructions.consent.page5
    }
    
    if ((intruc_msg_counter===5)) {
    task_instruc_msg=instructions.consent.page6
    }
    
    
    task_instruc_txt.setText(task_instruc_msg);
    task_instruc_resp.keys = undefined;
    task_instruc_resp.rt = undefined;
    _task_instruc_resp_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(task_instruc_txt);
    welcomeComponents.push(task_instruc_resp);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'welcome'-------
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_instruc===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *task_instruc_txt* updates
    if (t >= 0.0 && task_instruc_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_instruc_txt.tStart = t;  // (not accounting for frame time here)
      task_instruc_txt.frameNStart = frameN;  // exact frame index
      
      task_instruc_txt.setAutoDraw(true);
    }

    
    // *task_instruc_resp* updates
    if (t >= 0.0 && task_instruc_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      task_instruc_resp.tStart = t;  // (not accounting for frame time here)
      task_instruc_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { task_instruc_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { task_instruc_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { task_instruc_resp.clearEvents(); });
    }

    if (task_instruc_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = task_instruc_resp.getKeys({keyList: ['space'], waitRelease: false});
      _task_instruc_resp_allKeys = _task_instruc_resp_allKeys.concat(theseKeys);
      if (_task_instruc_resp_allKeys.length > 0) {
        task_instruc_resp.keys = _task_instruc_resp_allKeys[_task_instruc_resp_allKeys.length - 1].name;  // just the last key pressed
        task_instruc_resp.rt = _task_instruc_resp_allKeys[_task_instruc_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'welcome'-------
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update counter
    intruc_msg_counter=intruc_msg_counter+1;
    psychoJS.experiment.addData('task_instruc_resp.keys', task_instruc_resp.keys);
    if (typeof task_instruc_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('task_instruc_resp.rt', task_instruc_resp.rt);
        routineTimer.reset();
        }
    
    task_instruc_resp.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var screening_question;
var screening_txt;
var gotValidClick;
var screening_qsComponents;
function screening_qsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'screening_qs'-------
    t = 0;
    screening_qsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // define function to demographic questions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })();
    
    if ((screening_msg_counter===0)) {
    psychoJS.experiment.addData('consent_given', 1);
    screening_question=instructions.screening.page1
    screening_txt=["blue", "green", "black", "purple", "red"];
    
    //slider.ticks=[1,2,3,4,5];
    //slider.labels=["blue", "green", "black", "purple", "red"];
    }
    
    if ((screening_msg_counter===1)) {
    screening_question=instructions.screening.page2
    screening_txt=["one", "two", "three", "four", "five"];
    
    //slider.ticks=[1,2,3,4,5];
    //slider.labels=["one", "two", "three", "four", "five"];
    }
    
    //slider._needVertexUpdate = true;
    //slider._buildSlider();
    //slider.style=[visual.Slider.Style.RADIO]
    
    
    
    
    text_3.setText(screening_question);
    button1.setFillColor(new util.Color(button_col));
    button1.setPos(button1_pos);
    button1.setSize(button_size);
    button1.setLineColor(new util.Color(button_col));
    button2.setFillColor(new util.Color(button_col));
    button2.setPos(button2_pos);
    button2.setSize(button_size);
    button2.setLineColor(new util.Color(button_col));
    button3.setFillColor(new util.Color(button_col));
    button3.setPos(button3_pos);
    button3.setSize(button_size);
    button3.setLineColor(new util.Color(button_col));
    button4.setFillColor(new util.Color(button_col));
    button4.setPos(button4_pos);
    button4.setSize(button_size);
    button4.setLineColor(new util.Color(button_col));
    button5.setFillColor(new util.Color(button_col));
    button5.setPos(button5_pos);
    button5.setSize(button_size);
    button5.setLineColor(new util.Color(button_col));
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    btxt1.setColor(new util.Color(btxt_col));
    btxt1.setPos(btxt1_pos);
    btxt1.setText(screening_txt[0]);
    btxt1.setHeight(btxt_size);
    btxt2.setColor(new util.Color(btxt_col));
    btxt2.setPos(btxt2_pos);
    btxt2.setText(screening_txt[1]);
    btxt2.setHeight(btxt_size);
    btxt3.setColor(new util.Color(btxt_col));
    btxt3.setPos(btxt3_pos);
    btxt3.setText(screening_txt[2]);
    btxt3.setHeight(btxt_size);
    btxt4.setColor(new util.Color(btxt_col));
    btxt4.setPos(btxt4_pos);
    btxt4.setText(screening_txt[3]);
    btxt4.setHeight(btxt_size);
    btxt5.setColor(new util.Color(btxt_col));
    btxt5.setPos(btxt5_pos);
    btxt5.setText(screening_txt[4]);
    btxt5.setHeight(btxt_size);
    // keep track of which components have finished
    screening_qsComponents = [];
    screening_qsComponents.push(text_3);
    screening_qsComponents.push(button1);
    screening_qsComponents.push(button2);
    screening_qsComponents.push(button3);
    screening_qsComponents.push(button4);
    screening_qsComponents.push(button5);
    screening_qsComponents.push(mouse);
    screening_qsComponents.push(btxt1);
    screening_qsComponents.push(btxt2);
    screening_qsComponents.push(btxt3);
    screening_qsComponents.push(btxt4);
    screening_qsComponents.push(btxt5);
    
    for (const thisComponent of screening_qsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function screening_qsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'screening_qs'-------
    // get current time
    t = screening_qsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_screening===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *button1* updates
    if (t >= 0.0 && button1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button1.tStart = t;  // (not accounting for frame time here)
      button1.frameNStart = frameN;  // exact frame index
      
      button1.setAutoDraw(true);
    }

    
    // *button2* updates
    if (t >= 0.0 && button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button2.tStart = t;  // (not accounting for frame time here)
      button2.frameNStart = frameN;  // exact frame index
      
      button2.setAutoDraw(true);
    }

    
    // *button3* updates
    if (t >= 0.0 && button3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button3.tStart = t;  // (not accounting for frame time here)
      button3.frameNStart = frameN;  // exact frame index
      
      button3.setAutoDraw(true);
    }

    
    // *button4* updates
    if (t >= 0.0 && button4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button4.tStart = t;  // (not accounting for frame time here)
      button4.frameNStart = frameN;  // exact frame index
      
      button4.setAutoDraw(true);
    }

    
    // *button5* updates
    if (t >= 0.0 && button5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button5.tStart = t;  // (not accounting for frame time here)
      button5.frameNStart = frameN;  // exact frame index
      
      button5.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button1, button2, button3, button4, button5]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *btxt1* updates
    if (t >= 0.0 && btxt1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt1.tStart = t;  // (not accounting for frame time here)
      btxt1.frameNStart = frameN;  // exact frame index
      
      btxt1.setAutoDraw(true);
    }

    
    // *btxt2* updates
    if (t >= 0.0 && btxt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt2.tStart = t;  // (not accounting for frame time here)
      btxt2.frameNStart = frameN;  // exact frame index
      
      btxt2.setAutoDraw(true);
    }

    
    // *btxt3* updates
    if (t >= 0.0 && btxt3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt3.tStart = t;  // (not accounting for frame time here)
      btxt3.frameNStart = frameN;  // exact frame index
      
      btxt3.setAutoDraw(true);
    }

    
    // *btxt4* updates
    if (t >= 0.0 && btxt4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt4.tStart = t;  // (not accounting for frame time here)
      btxt4.frameNStart = frameN;  // exact frame index
      
      btxt4.setAutoDraw(true);
    }

    
    // *btxt5* updates
    if (t >= 0.0 && btxt5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      btxt5.tStart = t;  // (not accounting for frame time here)
      btxt5.frameNStart = frameN;  // exact frame index
      
      btxt5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screening_qsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var screeningQ1_resp;
var screeningQ2_resp;
var _mouseXYs;
function screening_qsRoutineEnd() {
  return async function () {
    //------Ending Routine 'screening_qs'-------
    for (const thisComponent of screening_qsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((screening_msg_counter===0)) {
        screeningQ1_resp=mouse.clicked_name[0]; 
        if ((screeningQ1_resp === 'button4')) {
            screeningQ1_passed=1;
            }
        psychoJS.experiment.addData('screeningQ1', screeningQ1_passed);
        }
    
    if ((screening_msg_counter===1)) {
        screeningQ2_resp=mouse.clicked_name[0];
        if ((screeningQ2_resp === 'button3')) {
            screeningQ2_passed=1;
            }
        psychoJS.experiment.addData('screeningQ2', screeningQ2_passed);
        }
    
    screening_msg_counter=screening_msg_counter+1;
    
    if ((screening_msg_counter===2)) {
        if ((screeningQ1_passed===0 && screeningQ2_passed===0)) {
            terminate_expt=1;
            terminate_expt_time=50000;
            final_msg="Sorry captain, it looks like you failed both the attention checks and cannot continue with the study. Following the Prolific guidelines, please close the experiment at this point and return the submission. Thank you for your interest in this study.";
            }
    }
    
    
    
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    // the Routine "screening_qs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var addtext;
var demographic_question;
var _demo_resp_allKeys;
var demographicsComponents;
function demographicsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'demographics'-------
    t = 0;
    demographicsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // define function to load demographic questions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })(); 
    
    // initialise input text
    addtext='';
    psychoJS.eventManager.clearKeys()
    
    if ((demographic_msg_counter===0)) {
    demographic_question=instructions.demographics.page1
    }
    
    if ((demographic_msg_counter===1)) {
    demographic_question=instructions.demographics.page2
    }
    
    if ((demographic_msg_counter===2)) {
    demographic_question=instructions.demographics.page3
    }
    demographics_txt.setText(demographic_question);
    demo_resp.keys = undefined;
    demo_resp.rt = undefined;
    _demo_resp_allKeys = [];
    // keep track of which components have finished
    demographicsComponents = [];
    demographicsComponents.push(demographics_txt);
    demographicsComponents.push(demographics_input);
    demographicsComponents.push(demo_resp);
    
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var numericKeys;
function demographicsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'demographics'-------
    // get current time
    t = demographicsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_demographics===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    if ((terminate_expt===1)) {
        continueRoutine=false;
        //trials.finished=true;
        trials_demographics.finished=true;
        }
    
    // display text on screen
    numericKeys=['0','1','2','3','4','5','6','7','8','9'];
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['1','2','3','4','5','6','7','8','9','0', 'backspace','return']});
    
    if (theseKeys[0] !== "return") {
        if (theseKeys[0] === "backspace") {
            addtext = addtext.substring((addtext.length-1), -1);
        } else if (numericKeys.includes(theseKeys[0])) {
            if (addtext.length < 2) {
            addtext = String(addtext)+String(theseKeys[0]);
            }
        }
    } else if (theseKeys[0] === "return") {        
            if ((demographic_msg_counter===0)) {
                age=addtext
                    if (addtext.length === 2) {
                        continueRoutine = false;
                     }
                }
            
            if ((demographic_msg_counter===2)) {
                gender=addtext
                    if (addtext.length === 1) {
                        continueRoutine = false;
                     }
                }
            
             if ((demographic_msg_counter===1)) {
                educationYears=addtext
                    if (addtext.length > 0) {
                        continueRoutine = false;
                     }
                }
            
          }
    
    // *demographics_txt* updates
    if (t >= 0.0 && demographics_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_txt.tStart = t;  // (not accounting for frame time here)
      demographics_txt.frameNStart = frameN;  // exact frame index
      
      demographics_txt.setAutoDraw(true);
    }

    
    // *demographics_input* updates
    if (t >= 0.0 && demographics_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demographics_input.tStart = t;  // (not accounting for frame time here)
      demographics_input.frameNStart = frameN;  // exact frame index
      
      demographics_input.setAutoDraw(true);
    }

    
    if (demographics_input.status === PsychoJS.Status.STARTED){ // only update if being drawn
      demographics_input.setText(addtext, false);
    }
    
    // *demo_resp* updates
    if (t >= 0.0 && demo_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      demo_resp.tStart = t;  // (not accounting for frame time here)
      demo_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { demo_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { demo_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { demo_resp.clearEvents(); });
    }

    if (demo_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = demo_resp.getKeys({keyList: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'return'], waitRelease: false});
      _demo_resp_allKeys = _demo_resp_allKeys.concat(theseKeys);
      if (_demo_resp_allKeys.length > 0) {
        demo_resp.keys = _demo_resp_allKeys[_demo_resp_allKeys.length - 1].name;  // just the last key pressed
        demo_resp.rt = _demo_resp_allKeys[_demo_resp_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of demographicsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function demographicsRoutineEnd() {
  return async function () {
    //------Ending Routine 'demographics'-------
    for (const thisComponent of demographicsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //if ((demographic_msg_counter===0)) {
    //    psychoJS.experiment.addData('age', (Number(age)));
    //    }
    
    //if ((demographic_msg_counter===1)) {
    //    psychoJS.experiment.addData('gender', (Number(gender)));
    //    }
    
    if ((demographic_msg_counter===2)) {
        psychoJS.experiment.addData('age', (Number(age)));
        psychoJS.experiment.addData('gender', (Number(gender)));
        psychoJS.experiment.addData('EducationYears', (Number(educationYears)));
        }
        
    demographic_msg_counter=demographic_msg_counter+1;
    
    // save data
            if (Number(age)>40){
            terminate_expt=1
            terminate_expt_time=50000;
            final_msg="Sorry captain, it looks like you are over the age limit for this experiment and cannot continue. Following the Prolific guidelines, please close the experiment at this point and return the submission. Thank you for your interest in this study."
            }
    
            
            
            
    
    psychoJS.experiment.addData('demo_resp.keys', demo_resp.keys);
    if (typeof demo_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('demo_resp.rt', demo_resp.rt);
        }
    
    demo_resp.stop();
    // the Routine "demographics" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var screening_msgComponents;
function screening_msgRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'screening_msg'-------
    t = 0;
    screening_msgClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    text.setText(final_msg);
    // keep track of which components have finished
    screening_msgComponents = [];
    screening_msgComponents.push(key_resp_2);
    screening_msgComponents.push(text);
    
    for (const thisComponent of screening_msgComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function screening_msgRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'screening_msg'-------
    // get current time
    t = screening_msgClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (num_screening_questions==0) {
        continueRoutine = false;
        }
    
    if (num_demographic_questions==0) {
        continueRoutine = false;
        }
    
    if (terminate_expt!=1) {
        continueRoutine = false;
        }
    
    
    
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
      }
    }
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of screening_msgComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function screening_msgRoutineEnd() {
  return async function () {
    //------Ending Routine 'screening_msg'-------
    for (const thisComponent of screening_msgComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        }
    
    key_resp_2.stop();
    // the Routine "screening_msg" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var task_instruction_txt;
var _key_resp_allKeys;
var task_instrucComponents;
function task_instrucRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'task_instruc'-------
    t = 0;
    task_instrucClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // define function to load task instructions
    var instructions = (function () {
        var instructions  = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "instructions.json",
            'dataType': "json",
            'success': function (data) {
                instructions  = data;
            }
        });
        return instructions;
    })(); 
    
    if ((task_instruc_msg_counter==0)) {
        task_instruction_txt=instructions.task.page1
    }
    
    if ((task_instruc_msg_counter==1)) {
        task_instruction_txt=instructions.task.page2
    }
    
    if ((task_instruc_msg_counter==2)) {
        task_instruction_txt=instructions.task.page3
    }
    
    if ((task_instruc_msg_counter==3)) {
        task_instruction_txt=instructions.task.page4
    }
    
    if ((task_instruc_msg_counter==4)) {
        task_instruction_txt=instructions.task.page5
    }
    
    if ((task_instruc_msg_counter==5)) {
        task_instruction_txt=instructions.task.page6
    }
    
    if ((task_instruc_msg_counter==6)) {
        task_instruction_txt=instructions.task.page7
    }
    
    if ((task_instruc_msg_counter==7)) {
        task_instruction_txt=instructions.task.page8
    }
    
    if ((task_instruc_msg_counter==8)) {
        task_instruction_txt=instructions.task.page9
    }
    
    if ((task_instruc_msg_counter==9)) {
        task_instruc_img_opacity=0;
        task_instruc_txt_pos=[0,0];
        task_instruc_space_txt_pos=[0, -0.1]
        task_instruction_txt=instructions.task.page10
    }
    
    
    
    instruc_txt.setPos(task_instruc_txt_pos);
    instruc_txt.setText(task_instruction_txt);
    instruc_image.setOpacity(task_instruc_img_opacity);
    instruc_image.setImage(instruc_imgs[task_instruc_msg_counter]);
    text_4.setPos(task_instruc_space_txt_pos);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    task_instrucComponents = [];
    task_instrucComponents.push(instruc_txt);
    task_instrucComponents.push(instruc_image);
    task_instrucComponents.push(text_4);
    task_instrucComponents.push(key_resp);
    
    for (const thisComponent of task_instrucComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function task_instrucRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'task_instruc'-------
    // get current time
    t = task_instrucClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((do_task_instruc===0)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *instruc_txt* updates
    if (t >= 0.0 && instruc_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruc_txt.tStart = t;  // (not accounting for frame time here)
      instruc_txt.frameNStart = frameN;  // exact frame index
      
      instruc_txt.setAutoDraw(true);
    }

    
    // *instruc_image* updates
    if (t >= 0.0 && instruc_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruc_image.tStart = t;  // (not accounting for frame time here)
      instruc_image.frameNStart = frameN;  // exact frame index
      
      instruc_image.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of task_instrucComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var start_time_entire_foraging_task;
function task_instrucRoutineEnd() {
  return async function () {
    //------Ending Routine 'task_instruc'-------
    for (const thisComponent of task_instrucComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    task_instruc_msg_counter=task_instruc_msg_counter+1;
    
    // start timer
    start_time_entire_foraging_task=Date.now()
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "task_instruc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var curr_blk;
var blk_instruc_txt;
var mean_reward_blk;
var _blk_instruc_resp_allKeys;
var blk_instrucComponents;
function blk_instrucRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blk_instruc'-------
    t = 0;
    blk_instrucClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // determine block settings
    blk_idx=blk_idx+1;
    curr_blk = blk_order[blk_idx];
    curr_blk_number=curr_blk_number+1;
    
    // long steep condition
    if ((curr_blk===1)) {
        travel_duration=9
        //k_mean=0.81 // mean for decay distribution
        //k_mean=0.84 // mean for decay distribution
        k_mean=0.81 // mean for decay distribution
    }
    // long shallow condition
    if ((curr_blk===2)) {
        travel_duration=9
        //k_mean=0.96
        //k_mean=0.91
        k_mean=0.91
    }
    // short steep condition
    if ((curr_blk===3)) {
        //travel_duration=3
        //k_mean=0.81
        //travel_duration=2
        //k_mean=0.84
        travel_duration=2.5
        k_mean=0.81
    }
    // short shallow condition
    if ((curr_blk===4)) {
        //travel_duration=3
        //k_mean=0.96
        //travel_duration=2
        //k_mean=0.91
        travel_duration=2.5
        k_mean=0.91
    }
    blk_instruc_txt='Ready to set sail?\n\nLike any swashbuckling pirate with a thirst for riches, try to earn as many gold medallions as you can during the block, as this will increase your bonus payment!\n\n\n\nPress enter to begin'
    
    // reset block variables
    actions_blk=0;
    points_blk=0;
    mean_reward_blk=0;
    
    blk_txt.setText(blk_instruc_txt);
    blk_instruc_resp.keys = undefined;
    blk_instruc_resp.rt = undefined;
    _blk_instruc_resp_allKeys = [];
    // keep track of which components have finished
    blk_instrucComponents = [];
    blk_instrucComponents.push(blk_txt);
    blk_instrucComponents.push(blk_instruc_resp);
    
    for (const thisComponent of blk_instrucComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function blk_instrucRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blk_instruc'-------
    // get current time
    t = blk_instrucClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *blk_txt* updates
    if (t >= 0.0 && blk_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk_txt.tStart = t;  // (not accounting for frame time here)
      blk_txt.frameNStart = frameN;  // exact frame index
      
      blk_txt.setAutoDraw(true);
    }

    
    // *blk_instruc_resp* updates
    if (t >= 0.0 && blk_instruc_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blk_instruc_resp.tStart = t;  // (not accounting for frame time here)
      blk_instruc_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { blk_instruc_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { blk_instruc_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { blk_instruc_resp.clearEvents(); });
    }

    if (blk_instruc_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = blk_instruc_resp.getKeys({keyList: ['return'], waitRelease: false});
      _blk_instruc_resp_allKeys = _blk_instruc_resp_allKeys.concat(theseKeys);
      if (_blk_instruc_resp_allKeys.length > 0) {
        blk_instruc_resp.keys = _blk_instruc_resp_allKeys[_blk_instruc_resp_allKeys.length - 1].name;  // just the last key pressed
        blk_instruc_resp.rt = _blk_instruc_resp_allKeys[_blk_instruc_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blk_instrucComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var block_start_time;
function blk_instrucRoutineEnd() {
  return async function () {
    //------Ending Routine 'blk_instruc'-------
    for (const thisComponent of blk_instrucComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    //start block timer
    block_start_time=Date.now()
    
    
    
    psychoJS.experiment.addData('blk_instruc_resp.keys', blk_instruc_resp.keys);
    if (typeof blk_instruc_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('blk_instruc_resp.rt', blk_instruc_resp.rt);
        routineTimer.reset();
        }
    
    blk_instruc_resp.stop();
    // the Routine "blk_instruc" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var travel_start_t;
var sval;
var isld_svals;
var isld_rvals;
var block_present_time;
var block_time_elapsed_event_onset;
var time_remaining_event_onset;
var travelComponents;
function travelRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'travel'-------
    t = 0;
    travelClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    goal_pos=[0,-0.1];
    
    // set current pos to ship pos
    curr_pos = ship_pos;
    
    // start travel timer
    travel_start_t=Date.now();
    
    // define distribution function
    //https://mika-s.github.io/javascript/random/normal-distributed/2019/05/15/generating-normally-distributed-random-numbers-in-javascript.html
    function boxMullerTransform() {
        const u1 = Math.random();
        const u2 = Math.random(); 
        const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2); 
        return { z0, z1 };
    }
    function getNormallyDistributedRandomNumber(mean, stddev) {
        const { z0, _ } = boxMullerTransform(); 
        return z0 * stddev + mean;
    }
    // draw the block starting value from a distribution
    sval=Math.round(getNormallyDistributedRandomNumber(sval_mean, sval_sd))
    isld_svals=[sval] // this is a vector out of convenience (due to adaptation from a previous design)
    isld_rvals=[sval]
    
    // record onset of the decision phase
    block_present_time=Date.now()
    block_time_elapsed_event_onset=(block_present_time-block_start_time)/1000;
    time_remaining_event_onset=(time_per_block*60)-block_time_elapsed_event_onset;
    ocean_select_2.setPos(ocean_pos);
    ocean_select_2.setSize(ocean_size);
    travel_text.setPos(center_txt_pos);
    travel_blk_time_remaining.setPos(action_msg_pos);
    travel_blk_time_remaining.setHeight(action_msg_size);
    // keep track of which components have finished
    travelComponents = [];
    travelComponents.push(ocean_select_2);
    travelComponents.push(travel_text);
    travelComponents.push(travel_blk_time_remaining);
    
    for (const thisComponent of travelComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var block_time_elapsed;
var time_remaining;
var n_actions;
var time_remaining_rounded;
var time_remaining_msg;
var time_remaining_mins;
var time_remaining_sec;
var travel_time_remaining;
var frameRemains;
function travelRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'travel'-------
    // get current time
    t = travelClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // if the total time allowed in the block have been taken, end the block
    block_present_time=Date.now()
    block_time_elapsed=(block_present_time-block_start_time)/1000;
    time_remaining=(time_per_block*60)-block_time_elapsed
    if ((time_remaining<=0)) {
        exploit_actions=0;
        n_actions=0;
        continueRoutine=false;
        trials.finished=true;
        exploit_loop.finished=true;
        }
    time_remaining_rounded=Math.round(time_remaining);
    time_remaining_msg='Time left in block: ' + time_remaining_rounded.toString();
    
    time_remaining_mins=Math.floor(time_remaining_rounded/60)
    time_remaining_sec=time_remaining_rounded-(time_remaining_mins*60)
    time_remaining_msg='Time left in block: ' + time_remaining_mins.toString() + ':' + time_remaining_sec.toString();
    
    // calculate the travel time
    travel_time_remaining=Math.round(travel_duration-((block_present_time-travel_start_t)/1000))
    //console.log('travel_time_remaining:')
    //console.log(travel_time_remaining)
    
    //travel_time_remaining_unrounded=(travel_duration-((block_present_time-travel_start_t)/1000))
    //if (travel_time_remaining>(travel_duration/2)) {
    //    travel_opacity=1*(travel_time_remaining_unrounded/travel_duration)
    // }
    
    //if (travel_time_remaining<(travel_duration/2)) {
    //    travel_opacity=1*1-(travel_time_remaining_unrounded/travel_duration)
    // }
    //    travel_opacity=1*1-(travel_time_remaining_unrounded/travel_duration)
    
    // *ocean_select_2* updates
    if (t >= 0.0 && ocean_select_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ocean_select_2.tStart = t;  // (not accounting for frame time here)
      ocean_select_2.frameNStart = frameN;  // exact frame index
      
      ocean_select_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ocean_select_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ocean_select_2.setAutoDraw(false);
    }
    
    // *travel_text* updates
    if (t >= 0.0 && travel_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      travel_text.tStart = t;  // (not accounting for frame time here)
      travel_text.frameNStart = frameN;  // exact frame index
      
      travel_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (travel_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      travel_text.setAutoDraw(false);
    }
    
    if (travel_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      travel_text.setText(travel_msg, false);
    }
    
    // *travel_blk_time_remaining* updates
    if (t >= 0.0 && travel_blk_time_remaining.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      travel_blk_time_remaining.tStart = t;  // (not accounting for frame time here)
      travel_blk_time_remaining.frameNStart = frameN;  // exact frame index
      
      travel_blk_time_remaining.setAutoDraw(true);
    }

    frameRemains = 0.0 + travel_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (travel_blk_time_remaining.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      travel_blk_time_remaining.setAutoDraw(false);
    }
    
    if (travel_blk_time_remaining.status === PsychoJS.Status.STARTED){ // only update if being drawn
      travel_blk_time_remaining.setText(time_remaining_msg, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of travelComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var mean_rew_timebased;
var mean_rew_actionbased;
function travelRoutineEnd() {
  return async function () {
    //------Ending Routine 'travel'-------
    for (const thisComponent of travelComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // save data
    psychoJS.experiment.addData('consent_given', 1);
    psychoJS.experiment.addData('screeningQ1', 1);
    psychoJS.experiment.addData('screeningQ2', 1);
    psychoJS.experiment.addData('age', age);
    psychoJS.experiment.addData('gender', gender);
    psychoJS.experiment.addData('EducationYears', educationYears);
    
    // setting and block variables
    psychoJS.experiment.addData('starting_value_mean', sval_mean); // should be defined under begin experiment in travel component
    psychoJS.experiment.addData('starting_value_sd', sval_sd);   
    psychoJS.experiment.addData('decay_rate_mean', k_mean);     // should update based on block type
    psychoJS.experiment.addData('decay_rate_sd', k_sd);
    psychoJS.experiment.addData('blk_duration_mins', time_per_block);
    psychoJS.experiment.addData('travel_duration', travel_duration);     // should update based on block type
    psychoJS.experiment.addData('feedback_duration', fbk_duration);
    psychoJS.experiment.addData('blk_number', curr_blk_number);
    psychoJS.experiment.addData('blk_type', curr_blk); // 1=long-steep, 2=long-shallow, 3=short-steep, 4=short-shallow
    psychoJS.experiment.addData('starting_value', sval);
    
    // trial variables
    psychoJS.experiment.addData('trial_phase', 1);   // 1 for travel, 2 for exploit/leave decision, 3 for exploit feedback  
    psychoJS.experiment.addData('decision_type', 'NA'); // initialise. Use 1 for stay, 2 for leave
    psychoJS.experiment.addData('decay_rate', 'NA');    // decay value drawn from the distribution
    psychoJS.experiment.addData('patch_reward_prospective', 'NA'); // the prospective reward for an exploit action
    psychoJS.experiment.addData('patch_reward_recieved', 'NA');    // the reward recieved for the decision
    psychoJS.experiment.addData('patch_time_elapsed_seconds', 'NA'); // time spent in the current patch
    psychoJS.experiment.addData('patch_actions_taken', 'NA');        // number of actions related to the current patch (exploit and leave)
    psychoJS.experiment.addData('exploit_phase_key', 'NA');
    psychoJS.experiment.addData('exploit_phase_RT', 'NA');
    psychoJS.experiment.addData('blk_time_event_onset_seconds', block_time_elapsed_event_onset); // time recorded at begin routine
    psychoJS.experiment.addData('blk_time_event_offset_seconds', block_time_elapsed);            // time record at end routine
    psychoJS.experiment.addData('blk_time_fbk_offset_seconds', 'NA');  // offset time + feedback duration (only relevant to the exploit phase)
    psychoJS.experiment.addData('blk_time_remaining_event_onset', time_remaining_event_onset);
    psychoJS.experiment.addData('blk_time_remaining_event_offset', time_remaining);
    psychoJS.experiment.addData('blk_points', points_blk);
    psychoJS.experiment.addData('blk_actions', actions_blk);
    block_present_time=Date.now()
    mean_rew_timebased=points_blk/((block_present_time-block_start_time)/1000)
    mean_rew_actionbased=points_blk/actions_blk
    psychoJS.experiment.addData('mean_reward_block_time-based', mean_rew_timebased); 
    psychoJS.experiment.addData('mean_reward_block_action-based', mean_rew_actionbased); 
    
    // broader variables
    psychoJS.experiment.addData('total_points', total_points);
    psychoJS.experiment.addData('total_actions', total_actions);
    psychoJS.experiment.addData('time_elapsed_entire_foraging_task', (block_present_time-start_time_entire_foraging_task)/1000); 
    psychoJS.experiment.addData('time_elapsed_entire_experiment', (block_present_time-start_time_entire_experiment)/1000); 
    psychoJS.experiment.nextEntry()
    
    
    // the Routine "travel" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var startTime;
var _exploit_resp_allKeys;
var exploitComponents;
function exploitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exploit'-------
    t = 0;
    exploitClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // if just entered patch, start timer
    if ((exploit_actions===0)) { 
        patchTime=0;
        startTime = Date.now();
        n_actions=0;
    }
    
    // record onset of the decision phase
    block_present_time=Date.now()
    block_time_elapsed_event_onset=(block_present_time-block_start_time)/1000;
    time_remaining_event_onset=(time_per_block*60)-block_time_elapsed_event_onset;
    ocean_exploit.setSize(ocean_size);
    isld_exploit.setPos(isld_pos);
    isld_exploit.setSize(isld_size);
    agent_exploit.setPos(ship_pos);
    agent_exploit.setSize(agent_size);
    points_txt.setPos(rew_pos);
    points_txt.setText(rew_displayed);
    dig_sail_txt.setPos([0, (- 0.2)]);
    exploit_action_count.setPos(action_msg_pos);
    exploit_action_count.setHeight(action_msg_size);
    exploit_resp.keys = undefined;
    exploit_resp.rt = undefined;
    _exploit_resp_allKeys = [];
    // keep track of which components have finished
    exploitComponents = [];
    exploitComponents.push(ocean_exploit);
    exploitComponents.push(isld_exploit);
    exploitComponents.push(agent_exploit);
    exploitComponents.push(points_txt);
    exploitComponents.push(dig_sail_txt);
    exploitComponents.push(exploit_action_count);
    exploitComponents.push(exploit_resp);
    
    for (const thisComponent of exploitComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var valid_keypress;
function exploitRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exploit'-------
    // get current time
    t = exploitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // force the first action to be a treasure dig
    if ((exploit_actions===0)) {
    valid_keypress=keys_first_exploit_allowed.includes(exploit_resp.keys);
    if ((valid_keypress===true)) {
        continueRoutine=false;
        }
    }
    
    // after one dig, allow digging or sailing responses
    if ((exploit_actions>0)) {
    valid_keypress=keys_exploit_allowed.includes(exploit_resp.keys);
    if ((valid_keypress===true)) {
        continueRoutine=false;
        }
    }
    
    // if the total time allowed in the block have been taken, end the block
    block_present_time=Date.now()
    block_time_elapsed=(block_present_time-block_start_time)/1000;
    time_remaining=(time_per_block*60)-block_time_elapsed
    if ((time_remaining<=0)) {
        exploit_actions=0;
        n_actions=0;
        continueRoutine=false;
        trials.finished=true;
        exploit_loop.finished=true;
        }
    time_remaining_rounded=Math.round(time_remaining);
    time_remaining_msg='Time left in block: ' + time_remaining_rounded.toString();
    
    time_remaining_mins=Math.floor(time_remaining_rounded/60)
    time_remaining_sec=time_remaining_rounded-(time_remaining_mins*60)
    time_remaining_msg='Time left in block: ' + time_remaining_mins.toString() + ':' + time_remaining_sec.toString();
    
    
    // *ocean_exploit* updates
    if (t >= 0.0 && ocean_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ocean_exploit.tStart = t;  // (not accounting for frame time here)
      ocean_exploit.frameNStart = frameN;  // exact frame index
      
      ocean_exploit.setAutoDraw(true);
    }

    
    // *isld_exploit* updates
    if (t >= 0.0 && isld_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld_exploit.tStart = t;  // (not accounting for frame time here)
      isld_exploit.frameNStart = frameN;  // exact frame index
      
      isld_exploit.setAutoDraw(true);
    }

    
    // *agent_exploit* updates
    if (t >= 0.0 && agent_exploit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_exploit.tStart = t;  // (not accounting for frame time here)
      agent_exploit.frameNStart = frameN;  // exact frame index
      
      agent_exploit.setAutoDraw(true);
    }

    
    // *points_txt* updates
    if (t >= 0.0 && points_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      points_txt.tStart = t;  // (not accounting for frame time here)
      points_txt.frameNStart = frameN;  // exact frame index
      
      points_txt.setAutoDraw(true);
    }

    
    // *dig_sail_txt* updates
    if (t >= 0.0 && dig_sail_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dig_sail_txt.tStart = t;  // (not accounting for frame time here)
      dig_sail_txt.frameNStart = frameN;  // exact frame index
      
      dig_sail_txt.setAutoDraw(true);
    }

    
    // *exploit_action_count* updates
    if (t >= 0.0 && exploit_action_count.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_action_count.tStart = t;  // (not accounting for frame time here)
      exploit_action_count.frameNStart = frameN;  // exact frame index
      
      exploit_action_count.setAutoDraw(true);
    }

    
    if (exploit_action_count.status === PsychoJS.Status.STARTED){ // only update if being drawn
      exploit_action_count.setText(time_remaining_msg, false);
    }
    
    // *exploit_resp* updates
    if (t >= 0.0 && exploit_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_resp.tStart = t;  // (not accounting for frame time here)
      exploit_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exploit_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exploit_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exploit_resp.clearEvents(); });
    }

    if (exploit_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = exploit_resp.getKeys({keyList: ['space', 's'], waitRelease: false});
      _exploit_resp_allKeys = _exploit_resp_allKeys.concat(theseKeys);
      if (_exploit_resp_allKeys.length > 0) {
        exploit_resp.keys = _exploit_resp_allKeys[_exploit_resp_allKeys.length - 1].name;  // just the last key pressed
        exploit_resp.rt = _exploit_resp_allKeys[_exploit_resp_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exploitComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var rew_displayed_msg;
var k;
var decision_type;
function exploitRoutineEnd() {
  return async function () {
    //------Ending Routine 'exploit'-------
    for (const thisComponent of exploitComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // compute the reward value of the current patch
    if ((exploit_actions===0)) { // if first action, use actual patch values
        rew_displayed = Math.floor(isld_rvals[0]);
        rew_displayed_msg='+' + rew_displayed.toString();
        
        if (Math.floor(isld_rvals[0])>=100) {
            treasure_pos=[];
            //treasure_pos=[treasure_pos_orig[0]+0.0075,treasure_pos_orig[1]];
            treasure_pos=[treasure_pos_orig[0]+0.01,treasure_pos_orig[1]];
            }
        if (Math.floor(isld_rvals[0])<isld_svals[0]) {
            treasure_pos=[];
            treasure_pos=[treasure_pos_orig[0],treasure_pos_orig[1]];
        }
    }
    
    // define distribution function
    //https://mika-s.github.io/javascript/random/normal-distributed/2019/05/15/generating-normally-distributed-random-numbers-in-javascript.html
    function boxMullerTransform() {
        const u1 = Math.random();
        const u2 = Math.random(); 
        const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2); 
        return { z0, z1 };
    }
    function getNormallyDistributedRandomNumber(mean, stddev) {
        const { z0, _ } = boxMullerTransform(); 
        return z0 * stddev + mean;
    }
    
    if ((exploit_actions>0)) { // if beyond first action, enact decay
    //    base = 1-k; // k is the decay parameter
    //    power = (exploit_actions);
    // draw starting value from a distribution
        k=getNormallyDistributedRandomNumber(k_mean, k_sd);
        //if value drawn for is greater than 1, reset to 1
        //so that patch values do not increase
        if (k>1) {
            k=1
        }   
        isld_rvals[0] = Math.floor(isld_rvals[0] * k);
        rew_displayed = Math.floor(isld_rvals[0]);
        rew_displayed_msg='+' + rew_displayed.toString();
        }
    
    // display coin at normal position if two digit reward
    if (Math.floor(isld_rvals[0])<isld_svals[0]) {
            treasure_pos=[];
            treasure_pos=[treasure_pos_orig[0],treasure_pos_orig[1]];
        }
    if (Math.floor(isld_rvals[0])>=100) {
            treasure_pos=[];
            //treasure_pos=[treasure_pos_orig[0]+0.0075,treasure_pos_orig[1]];
            treasure_pos=[treasure_pos_orig[0]+0.01,treasure_pos_orig[1]];
    }
    
    // update exploit actions
    if ((exploit_resp.keys === "space")) {
        decision_type=1;
        exploit_actions = (exploit_actions + 1);
        n_actions = (n_actions + 1);
        points_blk=points_blk+rew_displayed;
        total_points=total_points+isld_rvals[0];
    }
    if ((exploit_resp.keys === "s")) {
        decision_type=2;
        n_actions = (n_actions + 1);
        }
    mean_reward_blk=points_blk/actions_blk;
    mean_reward_entire_experiment=total_points/total_actions;
    actions_blk=(actions_blk + 1);
    total_actions=(total_actions + 1);
    
    // save data
    psychoJS.experiment.addData('consent_given', 1);
    psychoJS.experiment.addData('screeningQ1', 1);
    psychoJS.experiment.addData('screeningQ2', 1);
    psychoJS.experiment.addData('age', age);
    psychoJS.experiment.addData('gender', gender);
    psychoJS.experiment.addData('EducationYears', educationYears);
    
    // setting and block variables
    psychoJS.experiment.addData('starting_value_mean', sval_mean); // should be defined under begin experiment in travel component
    psychoJS.experiment.addData('starting_value_sd', sval_sd);   
    psychoJS.experiment.addData('decay_rate_mean', k_mean);     // should update based on block type
    psychoJS.experiment.addData('decay_rate_sd', k_sd);
    psychoJS.experiment.addData('blk_duration_mins', time_per_block);
    psychoJS.experiment.addData('travel_duration', travel_duration);     // should update based on block type
    psychoJS.experiment.addData('feedback_duration', fbk_duration);
    psychoJS.experiment.addData('blk_number', curr_blk_number);
    psychoJS.experiment.addData('blk_type', curr_blk); // 1=long-steep, 2=long-shallow, 3=short-steep, 4=short-shallow
    psychoJS.experiment.addData('starting_value', sval);
    
    // trial variables
    psychoJS.experiment.addData('trial_phase', 2);   // 1 for travel, 2 for exploit/leave decision, 3 for exploit feedback  
    psychoJS.experiment.addData('decision_type', decision_type); // initialise. Use 1 for stay, 2 for leave
    psychoJS.experiment.addData('decay_rate', k);    // decay value drawn from the distribution
    psychoJS.experiment.addData('patch_reward_prospective', rew_displayed); // the prospective reward for an exploit action
    if ((exploit_resp.keys === "space")) {
        psychoJS.experiment.addData('patch_reward_recieved', rew_displayed);    // the reward recieved for the decision
    }
    if ((exploit_resp.keys === "s")) {
        psychoJS.experiment.addData('patch_reward_recieved', 0);    // the reward recieved for the decision
    }
    patchTime=(Date.now()-startTime)/1000
    psychoJS.experiment.addData('patch_time_elapsed_seconds', patchTime); // time spent in the current patch
    psychoJS.experiment.addData('patch_actions_taken', n_actions);        // number of actions related to the current patch (exploit and leave)
    psychoJS.experiment.addData('exploit_phase_key', exploit_resp.keys);
    psychoJS.experiment.addData('exploit_phase_RT', exploit_resp.rt);
    psychoJS.experiment.addData('blk_time_event_onset_seconds', block_time_elapsed_event_onset); // time recorded at begin routine
    psychoJS.experiment.addData('blk_time_event_offset_seconds',block_time_elapsed);            // time record at end routine
    psychoJS.experiment.addData('blk_time_fbk_offset_seconds', block_time_elapsed+fbk_duration);  // offset time + feedback duration (only relevant to the exploit phase)
    psychoJS.experiment.addData('blk_time_remaining_event_onset', time_remaining_event_onset);
    psychoJS.experiment.addData('blk_time_remaining_event_offset', time_remaining);
    psychoJS.experiment.addData('blk_points', points_blk);
    psychoJS.experiment.addData('blk_actions', actions_blk);
    block_present_time=Date.now()
    mean_rew_timebased=points_blk/(((block_present_time-block_start_time)/1000)+fbk_duration) // mean reward factoring in points for the most recent exploit action and feedback time
    mean_rew_actionbased=points_blk/actions_blk // mean reward factoring in points for the most recent exploit action
    psychoJS.experiment.addData('mean_reward_block_time-based', mean_rew_timebased); 
    psychoJS.experiment.addData('mean_reward_block_action-based', mean_rew_actionbased); 
    
    // broader variables
    psychoJS.experiment.addData('total_points', total_points);
    psychoJS.experiment.addData('total_actions', total_actions);
    psychoJS.experiment.addData('time_elapsed_entire_foraging_task', (block_present_time-start_time_entire_foraging_task)/1000); 
    psychoJS.experiment.addData('time_elapsed_entire_experiment', (block_present_time-start_time_entire_experiment)/1000); 
    psychoJS.experiment.nextEntry()
    
    // return to selection screen
    if ((exploit_resp.keys === "s")) {
        exploit_actions=0;
        n_actions=0;
        continueRoutine=false;
        exploit_loop.finished=true;
        //trials.finished=true;
        }
    psychoJS.experiment.addData('exploit_resp.keys', exploit_resp.keys);
    if (typeof exploit_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exploit_resp.rt', exploit_resp.rt);
        }
    
    exploit_resp.stop();
    // the Routine "exploit" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var exploit_fbkComponents;
function exploit_fbkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'exploit_fbk'-------
    t = 0;
    exploit_fbkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ocean_exploit_2.setSize(ocean_size);
    isld_exploit_2.setPos(isld_pos);
    isld_exploit_2.setSize(isld_size);
    agent_exploit_2.setPos(ship_pos);
    agent_exploit_2.setSize(agent_size);
    points_txt_2.setColor(new util.Color('white'));
    points_txt_2.setPos(rew_pos);
    points_txt_2.setText(rew_displayed_msg);
    exploit_fbk_dig_sail_txt.setPos([0, (- 0.2)]);
    exploit_fbk_action_count.setPos(action_msg_pos);
    exploit_fbk_action_count.setHeight(action_msg_size);
    treasure.setOpacity(fbk_opacity);
    treasure.setPos(treasure_pos);
    treasure.setSize(treasure_size);
    treasure.setImage(bounty);
    // keep track of which components have finished
    exploit_fbkComponents = [];
    exploit_fbkComponents.push(ocean_exploit_2);
    exploit_fbkComponents.push(isld_exploit_2);
    exploit_fbkComponents.push(agent_exploit_2);
    exploit_fbkComponents.push(points_txt_2);
    exploit_fbkComponents.push(exploit_fbk_dig_sail_txt);
    exploit_fbkComponents.push(exploit_fbk_action_count);
    exploit_fbkComponents.push(treasure);
    
    for (const thisComponent of exploit_fbkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exploit_fbkRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'exploit_fbk'-------
    // get current time
    t = exploit_fbkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // if s is pressed, end the routine
    if ((exploit_resp.keys === "s")) {
        continueRoutine=false;
        }
    
    // if the total time allowed in the block have been taken, end the block
    block_present_time=Date.now()
    block_time_elapsed=(block_present_time-block_start_time)/1000;
    time_remaining=(time_per_block*60)-block_time_elapsed
    
    if ((time_remaining<=0)) {
        exploit_actions=0;
        n_actions=0;
        continueRoutine=false;
        trials.finished=true;
        exploit_loop.finished=true;
        }
    time_remaining_rounded=Math.round(time_remaining);
    time_remaining_msg='Time left in block: ' + time_remaining_rounded.toString();
    
    time_remaining_mins=Math.floor(time_remaining_rounded/60)
    time_remaining_sec=time_remaining_rounded-(time_remaining_mins*60)
    time_remaining_msg='Time left in block: ' + time_remaining_mins.toString() + ':' + time_remaining_sec.toString();
    
    
    
    
    // *ocean_exploit_2* updates
    if (t >= 0.0 && ocean_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ocean_exploit_2.tStart = t;  // (not accounting for frame time here)
      ocean_exploit_2.frameNStart = frameN;  // exact frame index
      
      ocean_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ocean_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ocean_exploit_2.setAutoDraw(false);
    }
    
    // *isld_exploit_2* updates
    if (t >= 0.0 && isld_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isld_exploit_2.tStart = t;  // (not accounting for frame time here)
      isld_exploit_2.frameNStart = frameN;  // exact frame index
      
      isld_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isld_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isld_exploit_2.setAutoDraw(false);
    }
    
    // *agent_exploit_2* updates
    if (t >= 0.0 && agent_exploit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      agent_exploit_2.tStart = t;  // (not accounting for frame time here)
      agent_exploit_2.frameNStart = frameN;  // exact frame index
      
      agent_exploit_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (agent_exploit_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      agent_exploit_2.setAutoDraw(false);
    }
    
    // *points_txt_2* updates
    if (t >= 0.0 && points_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      points_txt_2.tStart = t;  // (not accounting for frame time here)
      points_txt_2.frameNStart = frameN;  // exact frame index
      
      points_txt_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (points_txt_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      points_txt_2.setAutoDraw(false);
    }
    
    // *exploit_fbk_dig_sail_txt* updates
    if (t >= 0.0 && exploit_fbk_dig_sail_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_fbk_dig_sail_txt.tStart = t;  // (not accounting for frame time here)
      exploit_fbk_dig_sail_txt.frameNStart = frameN;  // exact frame index
      
      exploit_fbk_dig_sail_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exploit_fbk_dig_sail_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exploit_fbk_dig_sail_txt.setAutoDraw(false);
    }
    
    // *exploit_fbk_action_count* updates
    if (t >= 0.0 && exploit_fbk_action_count.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exploit_fbk_action_count.tStart = t;  // (not accounting for frame time here)
      exploit_fbk_action_count.frameNStart = frameN;  // exact frame index
      
      exploit_fbk_action_count.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (exploit_fbk_action_count.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      exploit_fbk_action_count.setAutoDraw(false);
    }
    
    if (exploit_fbk_action_count.status === PsychoJS.Status.STARTED){ // only update if being drawn
      exploit_fbk_action_count.setText(time_remaining_msg, false);
    }
    
    // *treasure* updates
    if (t >= 0.0 && treasure.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      treasure.tStart = t;  // (not accounting for frame time here)
      treasure.frameNStart = frameN;  // exact frame index
      
      treasure.setAutoDraw(true);
    }

    frameRemains = 0.0 + fbk_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (treasure.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      treasure.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exploit_fbkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exploit_fbkRoutineEnd() {
  return async function () {
    //------Ending Routine 'exploit_fbk'-------
    for (const thisComponent of exploit_fbkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "exploit_fbk" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blk_msg_points;
var blk_msg_allpoints;
var post_blk_msg;
var _post_blk_resp_allKeys;
var post_blk_msgComponents;
function post_blk_msgRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'post_blk_msg'-------
    t = 0;
    post_blk_msgClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    blk_msg_points=Math.floor(points_blk);
    blk_msg_allpoints=Math.floor(total_points);
    
    if ((curr_blk_number<total_blk_number)) {
    post_blk_msg='Arrr! Well done salty sea dog.\n\n\In this block ye earned ' + blk_msg_points.toString() + ' gold medallions!\n\nYou have now completed ' + curr_blk_number.toString() + ' out of ' + total_blk_number.toString() + ' and have collected ' + blk_msg_allpoints.toString() + ' gold medallions overall. See if you can earn even more medallions in the next block to boost your bonus payment.\n\n\n\nPress space to continue'
    }
    
    if ((curr_blk_number===total_blk_number)) {
    post_blk_msg='Arrr! Well done salty sea dog.\n\n\In this block ye earned ' + blk_msg_points.toString() + ' gold medallions!\n\nYou have now completed ' + curr_blk_number.toString() + ' out of ' + total_blk_number.toString() + ' and have collected ' + blk_msg_allpoints.toString() + ' gold medallions overall.\n\n\n\nPress space to continue'
    }
    text_2.setText(post_blk_msg);
    post_blk_resp.keys = undefined;
    post_blk_resp.rt = undefined;
    _post_blk_resp_allKeys = [];
    // keep track of which components have finished
    post_blk_msgComponents = [];
    post_blk_msgComponents.push(text_2);
    post_blk_msgComponents.push(post_blk_resp);
    
    for (const thisComponent of post_blk_msgComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function post_blk_msgRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'post_blk_msg'-------
    // get current time
    t = post_blk_msgClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((terminate_expt===1)) {
        continueRoutine=false;
        trials.finished=true;
        }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *post_blk_resp* updates
    if (t >= 0.0 && post_blk_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      post_blk_resp.tStart = t;  // (not accounting for frame time here)
      post_blk_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { post_blk_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { post_blk_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { post_blk_resp.clearEvents(); });
    }

    if (post_blk_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = post_blk_resp.getKeys({keyList: ['space'], waitRelease: false});
      _post_blk_resp_allKeys = _post_blk_resp_allKeys.concat(theseKeys);
      if (_post_blk_resp_allKeys.length > 0) {
        post_blk_resp.keys = _post_blk_resp_allKeys[_post_blk_resp_allKeys.length - 1].name;  // just the last key pressed
        post_blk_resp.rt = _post_blk_resp_allKeys[_post_blk_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of post_blk_msgComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function post_blk_msgRoutineEnd() {
  return async function () {
    //------Ending Routine 'post_blk_msg'-------
    for (const thisComponent of post_blk_msgComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('post_blk_resp.keys', post_blk_resp.keys);
    if (typeof post_blk_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('post_blk_resp.rt', post_blk_resp.rt);
        routineTimer.reset();
        }
    
    post_blk_resp.stop();
    // the Routine "post_blk_msg" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _closing_resp_allKeys;
var close_exptComponents;
function close_exptRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'close_expt'-------
    t = 0;
    close_exptClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    closing_msg_txt.setText(final_msg);
    closing_resp.keys = undefined;
    closing_resp.rt = undefined;
    _closing_resp_allKeys = [];
    // keep track of which components have finished
    close_exptComponents = [];
    close_exptComponents.push(closing_msg_txt);
    close_exptComponents.push(closing_resp);
    
    for (const thisComponent of close_exptComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function close_exptRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'close_expt'-------
    // get current time
    t = close_exptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *closing_msg_txt* updates
    if (t >= 0.0 && closing_msg_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      closing_msg_txt.tStart = t;  // (not accounting for frame time here)
      closing_msg_txt.frameNStart = frameN;  // exact frame index
      
      closing_msg_txt.setAutoDraw(true);
    }

    frameRemains = 0.0 + terminate_expt_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (closing_msg_txt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      closing_msg_txt.setAutoDraw(false);
    }
    
    // *closing_resp* updates
    if (((terminate_expt == 0)) && closing_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      closing_resp.tStart = t;  // (not accounting for frame time here)
      closing_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { closing_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { closing_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { closing_resp.clearEvents(); });
    }

    if (closing_resp.status === PsychoJS.Status.STARTED && t >= (closing_resp.tStart + terminate_expt_time)) {
      closing_resp.status = PsychoJS.Status.FINISHED;
  }

    if (closing_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = closing_resp.getKeys({keyList: ['space'], waitRelease: false});
      _closing_resp_allKeys = _closing_resp_allKeys.concat(theseKeys);
      if (_closing_resp_allKeys.length > 0) {
        closing_resp.keys = _closing_resp_allKeys[_closing_resp_allKeys.length - 1].name;  // just the last key pressed
        closing_resp.rt = _closing_resp_allKeys[_closing_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of close_exptComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function close_exptRoutineEnd() {
  return async function () {
    //------Ending Routine 'close_expt'-------
    for (const thisComponent of close_exptComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('closing_resp.keys', closing_resp.keys);
    if (typeof closing_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('closing_resp.rt', closing_resp.rt);
        routineTimer.reset();
        }
    
    closing_resp.stop();
    // the Routine "close_expt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
