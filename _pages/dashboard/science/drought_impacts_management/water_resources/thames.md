---
layout: science
published: true
permalink: /dashboard/science/drought_impacts_management/water_resources/thames/
subsection: Drought Impacts Management > Water Resources
_title: Nested catchment modelling - Thames basin
research_team:
  - Mohammad_Mortazavi-Naeini
  - jim_hall
---
## Key science outputs

-Nested model : Thames basin water resource system; simple and complex versions

## Introduction 

WATHNET has been employed in <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> project to develop Thames basin water resources system. Two version of Thames basin water resources system developed, one captures all the details and complexity of the system while the other one is an aggregated version of the detailed one and it is indeed simplified. 
     
![Figure 1: Simplified model of Thames Basin water resource system]({{site.baseurl}}/assets/img/Mohammad_2.png)

## Result 1

The more detailed and complex model has about 450 arcs and 300 nodes. The 26 surface water sources (river flows in the basin) and 80 groundwater sources serve water to 14 demand centres in the region. The model includes all regulations and constraints in place, i.e. Lower Thames Control Diagram and Teddington flow requirement. The computation time of the model on a desktop computer (3.40GHz) for 30 years period on daily basis is about 3.5 minutes. 

A more simplified version of Thames model developed. This model has 30 nodes and 40 arcs. In this model, all demands are aggregated to two nodes and all Lower Thames storages presented in one node. The computation time on a desktop computer (3.4 Ghz) for 30 years period on daily basis is about 2.5 seconds. 

## Result 2

Both simplified and detailed models are validated against Thames Water model to make sure the models are not biased and the regulations and rules are as expected. This has been done by comparing selected outputs of WATHNET model with Thames Water model. One of the best outputs is total lower Thames storages and how it changes over time as the storage level determines the level of restrictions and required environmental flow at Teddington (Based on Lower Thames Control Diagram). 

In Figure 2 the total lower Thames storages of two models are compared. The graph presents compatibility of WATHNET results with Thames Water model.

![Figure 2: Comparison of total lower Thames storages level from 1920 to 2014 between Thames Water model and WATHNET model (simplified version) outputs]({{site.baseurl}}/assets/img/Mohammad_3.png)

## Further information
Visit the _Droughts, people and environment dashboard_ [here]({{ site.dpe_url }}/drought_management/water_supply_options/)
