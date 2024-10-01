This is a repo containing data and analysis scripts associated with following paper: 

```

```

## Reproducibility instructions

The scripts are written partially in Python (3.8.13) and partially in in R. For ease of reproduction, the main analyses are all in R, so if you are only interested in re-running the analyses from already preprocessed data, no need to set up the Python env. 

**Cone the repo** 

`git clone git@github.com:ozika/ed-foraging-mcmaster-and-zika.git`

**Setup Python Environment** 

Requires: `conda`, `python==3.8.13`, `groo-ozika==0.1.1`

Build the conda environment from the `yml` file:

`conda env create -f foraging_env.yml`

Alternatively, you can use `venv` and `pip`

`pip install -r requirements.txt`

Once the env is ready, use it to run the jupyter notebooks. 

**Python files** 

`preprocess_data.ipynb` - preprocessess the data 


**R scripts** 

R scripts use `renv` to set up the r environment, so if you don't have it in your base R you need to install it `install.packages("renv", "here")`. 

Install R env from `renv.lock`:

`renv::restore()`

Depending on whether you have or haven't got the packages cached this might take between a few seconds and 30 min.

`main_res_questionnaire.Rmd` - script to run factor analysis  
`main_res_only_leaving_trial.Rmd` - scripts looking at leaving trial data  
`main_res_all_trials_analyses.Rmd` - scripts analyzing all trials (stay and lave decisions)  

The scripts contain analyses described in the paper as well as many additional checks and analyses, they are reasonably well documented and should be easily navigable. 

--- 

For any queries, please raise an issue in this repo. 







