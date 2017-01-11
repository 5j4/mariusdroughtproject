---
layout: science
published: true
permalink: /dashboard/science/drought_impacts_management/hydrology/idhns/

subsection: Drought Impacts Management > Hydrology
_title: Integrating drought hydrology to the national scale
research_team:
  - gemma_coxon
  - jim_freer
  - thorsten_wagener
  - ross_woods
  - nicholas_howden
---
## Key science findings

* Quantification and analysis of uncertainties in hydrological modelling of drought
* Enhanced modelling capability to represent drought processes through incorporation of water resource system elements and improved surface-groundwater representation in dynamic TOPMODEL
* National analysis of catchment flow to future drought event sets and generation of probabilistic future flow predictions for multi-scale drought risk analysis
 
## Introduction

NERC’s MaRIUS (Managing the Risks, Impacts and Uncertainties of drought and water Scarcity) project explores how best to manage future droughts in the UK.  Work package B3 delivers national scale hydrological modelling with the aim of providing enhanced scientific understanding and modelling capability for representing drought processes.  To achieve this, research has focused upon the analysis of catchment flows for past and future droughts and the incorporation of new processes and water resource system elements in the hydrological modelling framework.  Importantly, prediction uncertainty is quantified through Monte Carlo simulation and included in each element of the modelling chain to realise the <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> project vision of multi-scale drought risk analysis that allows the identification of robust management options for droughts and water scarcity.

## Research methods

* A semi-distributed hydrological model (Dynamic TOPMODEL) has been set up for national scale hydrological drought modelling across the UK. 
* Model is driven using spatial inputs of precipitation and potential-evapotranspiration from observed and future drought event sets for national scale analysis of catchment flows in present and future climate conditions
* Probabilistic future flow predictions are generated from the future drought event sets
* Model performance is assessed using a limits of acceptability framework to explore multiple different sources of uncertainty for all gauging stations across the UK
* Enhanced modelling capability of UK droughts through
	- Incorporation of abstractions in the modelling framework
	- Improved surface water/groundwater representation in dynamic TOPMODEL

{% include 
  image.html 
  image="idhns_topmodel.jpg"
  width="100%"
  caption="Dynamic TOPMODEL schematic (adapted from Metcalfe, P., Beven, K. and Freer, J. (2015) Dynamic TOPMODEL: A new implementation in R and its sensitivity to time and space. Environmental Modelling & Software 72, 155-72)"
%}

### Quantification and analysis of uncertainties in hydrological modelling of drought

The quantification of different sources of uncertainties in hydrological modelling is essential to provide robust drought predictions and simulations.  In MaRIUS, many different sources of uncertainty are incorporated into the hydrological modelling, including estimates of data input uncertainties (ensembles of drought event sets), model structure and parameter uncertainties in space and time, and evaluation data uncertainties (uncertainties in flow data).  These uncertainties are explored in a limits of acceptability framework using time step based analysis of model performance that focus on low flows and drought conditions.  Improved understanding of these uncertainties will provide the basis for identification of robust management options for droughts and water scarcity.

{% include 
  image.html 
  image="updatedtimestepmodelevalplot.png"
  caption="Time step based model evaluation. The top plot shows uncertainty bounds for dynamic TOPMODEL behavioural model simulations alongside observed daily rainfall and discharge for the River Coln at Bibury (39020) during the 1976 drought.  The middle plot shows the Standardised Precipitation Index calculated for each month for the Bibury catchment (positive/negative value indicates a wetter/drier month respectively). The bottom plot presents box plots of the model scores for each month (red line indicates a perfect match with the observed discharge, above/below the red line indicates that the model is over/under estimating the observed discharge)"
%}

### Enhanced modelling capability to represent drought processes through incorporation of water resource system elements and improved surface-groundwater representation in dynamic TOPMODEL

Drought modelling is challenging as the dynamic processes that occur during low flow periods, such as non-linear groundwater contributions and a greater influence of water resource system elements, are typically not well represented in commonly used hydrological models due to data and model limitations.  For the research in MaRIUS, abstraction data is incorporated into the Dynamic TOPMODEL hydrological modelling framework to provide enhanced modelling capability in representing drought processes as an emergent property of coupled human-water systems.  Furthermore, improved representation of surface-groundwater processes has been developed in dynamic TOPMODEL.   This enhanced modelling capability developed in <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> is essential in order to provide robust and reliable predictions of future drought events.

### National analysis of catchment flow to future drought event sets and generation of probabilistic future flow predictions for multi-scale drought risk analysis

The future drought event sets developed using weather@home are propagated through dynamic TOPMODEL to provide probabilistic future flow simulations for the multi-scale drought risk analysis.  Importantly, these future probabilistic flow predictions are generated considering uncertainty in the climate input by using an ensemble of drought events, uncertainty in the hydrological model parameters and uncertainty in future drought management scenarios.  The probabilistic future flow simulations are analysed to better understand how future climate change and drought management scenarios may impact the frequency, duration and severity of droughts across the UK. 
