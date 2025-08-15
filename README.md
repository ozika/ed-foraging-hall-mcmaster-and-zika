This is a repo containing data and analysis scripts associated with following paper: 


> Hall-McMaster, S.\*, & Zika, O. \*(2025). Increasing Response Vigour Under Time Pressure as a Transdiagnostic Marker of Eating Disorders. Computational Psychiatry, 9(1), pp. 124–141. DOI: https://doi.org/10.5334/cpsy.130*


---

## Reproducibility instructions

The scripts are written partially in Python (3.8.13) and in R. For ease of reproduction, the main analyses are all in R, so if you are only interested in re-running the analyses from already preprocessed data, no need to set up the Python env. 

**Cone the repo** 

`git clone git@github.com:ozika/ed-foraging-mcmaster-and-zika.git`

**Get the data** 

The anonymized data set contains the raw data as well as various aggregated measures and data sets. It is placed on a public GIN repository: 

`https://gin.g-node.org/ozika/foraging-ed-anon-data/` 

You can download it directly from there and rename the folder to `anon-data`. 

Alternatively, you can use datalad to clone it:

`datalad clone git@gin.g-node.org:/ozika/foraging-ed-anon-data.git anon-data` 

You need to set up ssh key / account with gin.g-node.org. (Use https clone if you don't have the ssh key set up: https://gin.g-node.org/ozika/foraging-ed-anon-data.git)

For instructions about how to use datalad, see: https://handbook.datalad.org/en/latest/ 



**Setup Python Environment** (only necessary to re-create the aggregate data)

Requires: `conda`, `python==3.8.13`, `groo-ozika==0.1.1`

Build the conda environment from the `yml` file:

`conda env create -f foraging_env.yml`

Alternatively, you can use `venv` and `pip`

`pip install -r requirements.txt`

Once the env is ready, use it to run the jupyter notebooks. 

## Task code

Task code is writen in PsychoPy and it is included in the `task` folder. 

## Analysis files

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
`bootstrap_main_res.Rmd` - bootstrapping script for the main exploratory result

The scripts contain analyses described in the paper as well as many additional checks and analyses, they are reasonably well documented and should be easily navigable. 

--- 

For any queries, please raise an issue in this repo. 







