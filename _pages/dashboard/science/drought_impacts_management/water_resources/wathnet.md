---
layout: science
published: true
permalink: /dashboard/science/drought_impacts_management/water_resources/wathnet/
_title: WATHNET
subsection: Drought Impacts Management > Water Resources
research_team:
  - mohammad_mortazavi
  - jim_hall
---
## Key science findings

The concepts behind the simulation platform for water resources (WATHNET) are explained below. 

## Introduction 

Decision support systems facilitate the process of decision making by providing insight to decision makers about the consequences of implementing various options. Two important components of a decision support system are the simulation model and tools that support optimizing outcomes important to the decision maker. Simulation models allow investigation of system behaviour under historical and future scenarios. In particular, they assist in answering “what-if” questions.

Simulation models are used widely to simulate the behaviour of the water resource systems for a given set of input conditions. In this project, the WATHNET (Kuczera, 1992) simulation model is adopted. WATHNET is a model based on Network Flow Programming (NFP). WATHNET was selected for following reasons: 1) the efficient computation time and capability of running on parallel nodes 2) the availability of the source code meant to software could be adapted to new and unplanned needs; 3) the scripting future which facilitate introducing any rules or constraints 4)its architecture facilitates the implementation of multi-objective optimization and handling optionality  

Here we explain a description of the WATHNET simulation model that is used in this project. This is followed by discussion on the Thames basin water resources model including simplified and detailed versions. Finally, the national model is presented which simulates water resources of large water companies in England.

## Research methods

In an NFP model the water resource system is represented as a directed graph which is collection of nodes and a set of arcs. The nodes represent source, demand or transfer points on the network. The arcs represent flow paths from one node to another. In WATHNET, two types of arcs are defined, namely stream arcs which represent rivers and conduit arcs which represent pipes. Six different nodes are defined in WATHNET, namely stream, reservoir, demand, waste, harvest and junction nodes. Stream nodes represent a source of water to the system such as inflow to reservoirs or rainfall over a catchment. Reservoir nodes represent reservoirs and carryover storage from one time step to the next. Demand nodes represent sink points in the network. Junction nodes represent transfer points. Harvest nodes enable application of stochastic transfer functions such as in the modelling of domestic rainwater tank savings or run-of-river diversions at monthly time scales. Waste nodes act as a sink points to collect any water leaving the network.

{% include 
	image.html 
	image="Mohammad_4.png" 
	caption="A simple network in WATHNET (adapted from Kuczera, 1992)." 
%}

## Further information
Visit the _Droughts, people and environment dashboard_ [here]({{ site.dpe_url }}/drought_management/water_supply_options/)

-Kuczera, G. (1992). "Water supply headworks simulation using network linear programming." Advances in Engineering Software 14(1): 55-60.
