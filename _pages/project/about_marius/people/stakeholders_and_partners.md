---
layout: default
published: true
permalink: /about_marius/people/stakeholders_and_partners/

subsection: About MaRIUS
_title: Stakeholder and Partners
---

The <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> project benefits from expert advice and support from a very experienced group of UK based project partners in government, industry and NGOs. These partners form the project’s Stakeholder Advisory Group (SAG) and give inputs, in terms of time and expertise, to help steer the project. Liaison between the stakeholders and the project’s social and natural scientists will help to ensure that the outputs from the <abbr title="Managing the Risks, Impacts and Uncertainties of drought and water Scarcity">MaRIUS</abbr> project, including the ‘impacts dashboard’, are matched to their needs and to the evolving policy context.

In addition we have close working relationships with Defra, Environment Agency, Ofwat, UKWIR and the Adaptation Sub-Committee of the Committee on Climate Change.

{% for person in site.data.people_stakeholders_and_partners %}
	{% include person_card.html person=person %}
{% endfor %}