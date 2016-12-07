---
layout: default
published: true
permalink: /about_marius/people/researchers/

subsection: About MaRIUS
_title: Researchers
---
The <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> research consortium incorporate expertise across the range of drought impacts from environmental, social, humanities, economics and engineering perspectives. Moreover, the consortium has a track record of innovation in the development of interdisciplinary science and stakeholder engagement. The consortium partners (Oxford, Bristol and Cranfield Universities, the Centre for Ecology and Hydrology and the Met Office) have worked together in a variety of collaborations, and are motivated by the prospect of developing an interdisciplinary and integrative approach to drought impacts analysis and risk management, which we consider to be very timely, both scientifically and in practice.

<div class="profiles">
{% for person in site.data.people_researchers %}
{% include person_card.html person=person %}
{% endfor %}
</div>