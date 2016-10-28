---
layout: science
published: true
permalink: /dashboard/science/drought_climatology/dd/
subsection: Drought Climatology
_title: Drought datasets and how to access them
---

## Introduction

Two types of climate datasets have been generated within MaRIUS: the [Hindcast]({{ site.science_url }}/20c/) and the synthetic event set ([baseline]({{ site.science_url }}/20c/) and [future]({{ site.science_url }}/21c/)). These are currently available to <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> researchers and in time they will be freely available to anyone. This page describes these in greater detail and provides information about data format, access and interpretation.


## Dataset 1: Hindcast

This product uses the [20th-Century Reanalysis version 2c product](go.usa.gov/XTd ; portal.nersc.gov/project/20C_Reanalysis/) to drive the RCM HadRM3P at its boundaries. In this case, the atmospheric circulation in an RCM closely follows the driving data. Hence for the Hindcast product, since the reanalysis product is a reconstruction of reality, atmospheric circulation and thereby also the sequences of weather events should be close to real events (albeit with model biases). **Therefore, this is a model-based 6-hourly reconstruction of the weather that occurred in the past**(1851-2014, with an experimental reconstruction of the 20 years preceding this also included in the simulation but not being made available).

Note that: 
1.	20CR consists of 56 ensemble members to sample uncertainty in the reconstruction where the surface pressure observations used to constrain the reanalysis are sparse. Each member is equally plausible and hence a single ensemble member (number 37) was chosen at random for the <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> experiments.
2.	The first 20 years (1830-1850) were discarded as spin-up as these used climatological sea-surface temperatures (rather than time-varying observed estimates used from 1850 onwards).
3.	Years 2013 and 2014 switch to another sea surface temperature data set (Reynolds data set), because the data used for previous years (SODAsi.2 with the high latitudes corrected to COBE-SST2) do not go beyond 2012. More information is available [here](http://www.esrl.noaa.gov/psd/data/gridded/data.20thC_ReanV2c.html). 


## Dataset 2: Synthetic event set

For this product, a global climate model, (HadAM3P, the parent global model of HadRMP), driven by observed sea surface temperature, is used to drive HadRM3P. Together, these two models form the climate modelling system known as [weather@home](http://www.climateprediction.net/weatherathome/),  which can be run by volunteers around the world on their personal computers, using a volunteer distributed computing system. This unique capability allows to generate a large number of model simulations and, thus, a large number of droughts that could have occurred in the past or could occur in the future. For MaRIUS, a new version of [weather@home (version 2)](http://www.climateprediction.net/weatherathome/)  has been implemented.

The event set includes 3 sub-products that are similar in format/content but that span different time periods. These provide **a range of possible weather time series that**: 

1.	could have occurred in the past (‘**Baseline**’, 1900-2006, of which years 1975-2004 are to be used to compare to the future time slices).
2.	might occur in the near future (‘**Near Future**’, 2020-2049 under emission scenarios RCP8.5).
3.	might occur in the far future (‘**Far Future**’, 2070-2099) under emission scenarios RCP8.5). 
100 time series has been generated for each time slice. The 30-year future time slices are based on years 1975-2004 from the baseline (ocean variability, volcanoes, etc). Hence, the reference period in the baseline which the future time slices are to be compared to is 1975-2004.

As described [Science dashboard page]({{ site.science_url }}/21c/), five sets of 100 near future time series have been generated using five sets of sea surface temperature projections: one average scenario and four alternative scenarios which combine high and low climate sensitivity to high and low changes in North Atlantic sea surface temperature gradient. The same applies to the far future time slice.


## Variables available from both datasets

Table 1 shows the list of variables available in both datasets and their temporal resolution. A year consists of 360 days (30 days per month) in the event set, while the Hindcast product is based on the standard calendar.

HadRM3P does not directly provide PET as an output variable. However, PET estimates are provided in the dataset. These are computed from other variables and based on a Penman-Monteith formulation, and as consistent as possible with the MORECS estimates. Two PET estimates are provided for the future time slices: one without any changes in stomatal resistance relative to the baseline values (“pepm”), and one with values adjusted to account for CO2 fertilization effect (“pepm_adjrs”).

![List of variables available for each product and temporal resolution. The table includes for each variable: variable name (used in the NetCDF files name and NetCDF variable name), description, available temporal resolution in the data sets (20CR and synthetic events sets), and the field code. ]({{site.baseurl}}/assets/img/Benoit1b.png)


## Data format

The NetCDF data format is used to store the data. Data is generated on a rotated longitude-latitude grid (the Cordex-EU domain at 0.22 degrees; over the UK this corresponds to the grid used in UKCP09). 


## Data access

Data is currently available to <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> researchers. The aim is to make them freely available early 2017. This page will be updated in due time, with information on where to find the data.


## Data citation

How the data should be cited will be stated here when releasing the dataset.


## Further information

### Papers:
- weather@home 2 description and validation paper currently in review: link to http://www.geosci-model-dev-discuss.net/gmd-2016-239/
- Further papers with detailed validation and analyses of the event set are being prepared

### Podcasts:
- The climate datasets, particularly the drought event set, being generated in the <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> project: https://youtu.be/i4kApYaeQpQ
- Western US drought attribution, and the generation of synthetic multi-year UK drought events for risk-based impact studies:
https://youtu.be/ybkZ7TAh9wA





