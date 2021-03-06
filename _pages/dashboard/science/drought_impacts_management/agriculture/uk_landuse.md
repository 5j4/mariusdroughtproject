---
layout: science
published: true
permalink: /dashboard/science/drought_impacts_management/agriculture/uklu/
subsection: Drought Impacts Management > Agriculture
_title: UK Land use change
research_team:
  - victoria_janes
  - ian_holman
  - david_parsons
  - dolores_rey
  - nirman_shrestha
---
### Key science findings

* Increased water scarcity will lead to changes in agricultural landuse as relative crop and farm profitability change within the UK and Europe.

### Introduction

Effects of long term yield and profit variability influence farm business planning and investment, for example affecting crop and rotation selection, investment in infrastructure for irrigation and fodder storage, livestock numbers, etc. MaRIUS aims to understand how long term farm planning will change due to increased water scarcity; and the impacts and response of farmers, processors and food retailers to drought.

### Research methods

A Pan-European integrated modelling platform was used to simulation UK landuse change in response to increased water scarcity, arising from changing relative crop and farm profitability. The model accounts for varying crop yields, forest productivity, flooding, and availability of water resources. Initially the model was validated by comparison of observed current and simulated land use (see figure 1). The model was then simulated with a range of temperature and precipitation changes to provide an indicate potential change in rural land use allocation.

<!-- <div id="coming-soon">
	<div class="ident">INTERACTIVE <span class="cs">COMING SOON</span></div>
	<div class="description">
		<p markdown="1"><a href="{{ site.assets_url }}/data/land_use/index2.html">UK land use, relative to baseline, range of temperature &amp; precipitation</a></p>
	</div>
</div> -->
### UK land use, relative to baseline, range of temperature &amp; precipitation
<div class="half">
<select id="luimg1" onChange="jsFunction1()">
<option value="t0_p0">UK_T0_P0 = baseline</option>
<option value="t0_pm10">Temperature: +0&deg;C, Precipitation: -10%</option>
<option value="t0_pm20">Temperature: +0&deg;C, Precipitation: -20%</option>
<option value="t2_p0">Temperature: +2&deg;C, Precipitation: -0%</option>
<option value="t2_pm10">Temperature: +2&deg;C, Precipitation: -10%</option>
<option value="t2_pm20">Temperature: +2&deg;C, Precipitation: -20%</option>
<option value="t4_p0">Temperature: +4&deg;C, Precipitation: -0%</option>
<option value="t4_pm10">Temperature: +4&deg;C, Precipitation: -10%</option>
<option value="t4_pm20">Temperature: +4&deg;C, Precipitation: -20%</option>
</select>   
<img src="{{ site.assets_url }}/data/land_use/data/t0_p0.png" id="luimgholder1" />
</div>
<div class="half">
<select id="luimg2" onChange="jsFunction2()">
<option value="t0_p0">UK_T0_P0 = baseline</option>
<option value="t0_pm10">Temperature: +0&deg;C, Precipitation: -10%</option>
<option value="t0_pm20">Temperature: +0&deg;C, Precipitation: -20%</option>
<option value="t2_p0">Temperature: +2&deg;C, Precipitation: -0%</option>
<option value="t2_pm10">Temperature: +2&deg;C, Precipitation: -10%</option>
<option value="t2_pm20">Temperature: +2&deg;C, Precipitation: -20%</option>
<option value="t4_p0">Temperature: +4&deg;C, Precipitation: -0%</option>
<option value="t4_pm10">Temperature: +4&deg;C, Precipitation: -10%</option>
<option value="t4_pm20">Temperature: +4&deg;C, Precipitation: -20%</option>
</select>   
<img src="{{ site.assets_url }}/data/land_use/data/t0_p0.png" id="luimgholder2" />
</div>
<style>
.half
{
    width:48%;
    float:left;
}
#luimgholder1, #luimgholder2
{
  width:50%;
}
</style>
<script type="text/javascript">
function jsFunction1()
{
  var myselect = document.getElementById("luimg1");
  var myimage = document.getElementById("luimgholder1");
  var myimgpath = "{{ site.assets_url }}/data/land_use/data/"+myselect.options[myselect.selectedIndex].value+".png";
  /* alert(myselect.options[myselect.selectedIndex].value); */
  myimage.src = myimgpath;
}
function jsFunction2()
{
  var myselect = document.getElementById("luimg2");
  var myimage = document.getElementById("luimgholder2");
  var myimgpath = "{{ site.assets_url }}/data/land_use/data/"+myselect.options[myselect.selectedIndex].value+".png";
  /* alert(myselect.options[myselect.selectedIndex].value); */
  myimage.src = myimgpath;
}
</script>

{% include 
	image.html 
	image="Fig1.png" 
	caption="(Left): Observed CORINE land use, (middle): Model simulated land use for the baseline period (majority land use type for each grid cell shown), (Right): Model simulated land use with 20% decrease in precipitation" 
%}

### Results

Figure 2 indicates the average change in rural land use allocation across the UK with temperature and precipitation change. Most noticable is perhaps the large reduction in arable land use and corresponding increase in intensive grassland when temperature increases by approximately 2 degrees. This indicates under warming scenarios arable land within the UK is less profitable than grassland. This is likely to be caused by the large increase in arable area and production within central and eastern Europe under these scenarios.

{% include 
	image.html 
	image="2.png" 
	caption="The average change in rural land use allocation across the UK with temperature and precipitation change." 
%}

As shown in figure 1, the model simulates a reduction in forest area and increase in grassland as precipitation decreases. This ultimately reflects the increased profitiability of grassland under reduced precipitation scenario, possibly due to  reduced forest productivity, and the additional area of grassland required to support a similar dairy/meat production in a drier climate.

## Further information

Visit the _Droughts, people and environment dashboard_  [here]({{ site.dpe_url }}/drought_impacts/farming/)
