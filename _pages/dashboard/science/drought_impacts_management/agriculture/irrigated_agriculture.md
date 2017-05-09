---
layout: science
published: true
permalink: /dashboard/science/drought_impacts_management/agriculture/irrigated/
subsection: Drought Impacts Management > Agriculture
_title: Irrigated agriculture
sub_title: Agricultural droughts impacts and responses
research_team:
  - ian_holman
  - david_parsons
  - dolores_rey
  - victoria_janes
  - nirman_shrestha
presentations:
  - delores_rey_20150908
---

## Key science findings

* The net economic benefit of agricultural irrigation in England and Wales in a dry year is around £665 million.
* Water productivity in UK irrigation during drought averages in excess of £3.30/m3.
* The apparent impact of drought on irrigated farm businesses has declined since the 1975-76 drought, due to on-farm measures to reduce drought risk and a move towards partnership working during droughts by the Regulator.
* Increased water scarcity will lead to changes in agricultural landuse as relative crop and farm profitability change within the UK and Europe.
 
## Introduction

Irrigated agribusinesses can face abstraction restrictions imposed by the Regulator during droughts and increased competition for water resources from public water supply and the environment. MaRIUS aims to understand how long term farm planning will change due to increased water scarcity; and the impacts and response of farmers, processors and food retailers to drought.

## Research methods

A range of qualitative and quantitative methods are being used to investigate the above research questions:

* Web surveys and interviews with farmers, packers, processors and retailers to understand drought impacts, responses and risk management within the UK agricultural and food supply chain
* Assessment of the economic value of irrigation during droughts through combining industry and farm level economic data, with geospatial information on agricultural land use, agro-climate, soils and irrigation practices
* Evaluation of the changing risk of abstraction restrictions on agriculture under climate change through application of drought management rules to hydrological model outputs
 
## The net economic benefit of agricultural irrigation in England and Wales during drought is around £665 million (2010 prices) 
 
Irrigation is an essential component of crop production to meet retailer demands for premium quality. Under drought conditions, irrigation can be constrained by water resources availability, with consequent impacts on yield, quality and revenue. By combining industry and farm level economic data, with geospatial information on agricultural land use, agroclimate, soils and irrigation practices within a GIS, research in <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> estimated the total net financial benefit of outdoor irrigated production in England and Wales in a ‘design’ dry year to be around £665 million.  The highest benefits (and therefore the greatest economic risks due to imposed abstraction constraints during drought events) accrue in Anglian, Midlands and Southern EA regions, where high-value crops (soft fruit, potatoes and vegetables) are concentrated.

{% include 
	image.html 
	image="irrigated_agriculture_estimated_benefits.jpg" 
	caption="Estimated irrigation benefits (£) per 2km x 2km grid cell [from Rey et al., 2016]." 
%}

## Water productivity in UK irrigation during drought averages in excess of £3.30/m3
 
Research in <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> has shown that the areas with the highest water productivity are mainly in the south-east, around the Bristol Channel and in the midlands.  Irrigation benefits tend to be highest for high-value crops, where irrigation can make most difference to yield and farm-gate price; and for crops such as soft fruit that are associated with relatively high capital and labour production costs, helping to secure their viability, but which are highly vulnerable to drought restrictions.  Soft fruit and early potatoes have the highest average water productivity (£52 and £1.94 per m3, respectively), with cereals (£0.08 per m3) and grass (£0.11 per m3) having the lowest values.

{% include 
	image.html 
	image="irrigated_water_productivity.jpg" 
	caption="Irrigation water productivity (£/m<sup>3</sup>) [from Rey et al., 2016]." 
%}

## The apparent impact of drought on irrigated farm businesses has declined since the 1976-77 drought, due to on-farm measures to reduce drought risk and a move towards partnership working during droughts by the Regulator

The apparent impact of drought on irrigated farm businesses has declined since the 1975-76 drought in the Anglian region (the most productive agricultural region in the UK), due to on-farm investments (on-farm reservoirs and water distribution networks; improved irrigation efficiency) and improved farm planning to reduce drought risk; greater collaboration within farming (formation of Water Abstractor Groups); and a move towards partnership working during droughts by the Regulator (Environment Agency)
<style>
div.selection
{
	width:48%;
	float:left;
	text-align: center;
}
div#clearthem
{
	clear:both;
}
</style>
<div class="selection">
	<select>
		<option>Select</option>
		<option value="{{ site.images_url }}/ea-cams-water-availability.jpg">EA CAMS water availability</option>
		<option value="{{ site.images_url }}/irrigated-area-2nd-round.jpg">Irrigated area 2<sup>nd</sup> round</option>
		<option value="{{ site.images_url }}/irrigated-demand-2nd-round.jpg">Irrigated demand 2<sup>nd</sup> round</option>
		<option value="{{ site.images_url }}/psmd-2010.jpg">PSMD 2010</option>
		<option value="{{ site.images_url }}/benefit-grid.jpg">Benefit grid</option>
		<option value="{{ site.images_url }}/water-prod-2nd-round.jpg">Water productivity 2<sup>nd</sup> round</option>
	</select>
	<img src="#" alt="" />
</div>
<div class="selection">
	<select>
		<option>Select</option>
		<option value="{{ site.images_url }}/ea-cams-water-availability.jpg">EA CAMS water availability</option>
		<option value="{{ site.images_url }}/irrigated-area-2nd-round.jpg">Irrigated area 2<sup>nd</sup> round</option>
		<option value="{{ site.images_url }}/irrigated-demand-2nd-round.jpg">Irrigated demand 2<sup>nd</sup> round</option>
		<option value="{{ site.images_url }}/psmd-2010.jpg">PSMD 2010</option>
		<option value="{{ site.images_url }}/benefit-grid.jpg">Benefit grid</option>
		<option value="{{ site.images_url }}/water-prod-2nd-round.jpg">Water productivity 2<sup>nd</sup> round</option>
	</select>
	<img src="#" alt="" />
</div>
<div id="clearthem"></div>
<script>
(function()
{
	$('div.selection > select').on('change', function()
	{
		var correspondingImage = $(this).parent().find('img');
		correspondingImage.attr('src',$(this).val());
	});
})();
</script>
<br />
<hr />
<br />
## Further information

* Rey, D; Holman, I.P; Daccache, A; Morris, J, Weatherhead, E.K, and Knox, J.W (2016). Modelling and mapping the economic value of supplemental irrigation in a humid climate.  Agricultural Water Management 173: 13-22 <a href="http://www.sciencedirect.com/science/article/pii/S0378377416301342" target="_blank">http://www.sciencedirect.com/science/article/pii/S0378377416301342</a>
* “Managing risks, impacts and uncertainty of drought” <a href="http://www.ukia.org/data/conference/Holman.pdf" target="_blank">http://www.ukia.org/data/conference/Holman.pdf</a>
