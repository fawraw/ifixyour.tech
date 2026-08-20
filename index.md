---
layout: default
title: "Réparation électronique board-level en Suisse, atelier en préparation"
---

<p class="kicker">Atelier de micro-soudure · Suisse romande</p>

# Réparation électronique au niveau du composant

<p class="lede">iFixYourTech Sàrl répare ce que la réparation classique déclare
irréparable : micro-soudure sur cartes mères de smartphones et cartes logiques
de MacBook, sous microscope, composant par composant.</p>

<dl class="fiche">
	<dt>Atelier</dt><dd>Suisse romande</dd>
	<dt>Statut</dt><dd>En préparation</dd>
	<dt>Spécialités</dt><dd>Cartes mères smartphones, cartes logiques MacBook</dd>
</dl>

<div class="notice">
<span class="notice-label">Atelier en préparation</span>
<p>L'atelier se met en place : banc de mesure, poste de micro-soudure, filière de
pièces et procédures de test. Nous ne prenons pas encore d'appareils en charge.
Chaque intervention menée sur l'établi est documentée publiquement dans le
<a href="/journal/">journal d'atelier</a> : symptômes, mesures, intervention,
résultat. Sans marketing et sans promesse.</p>
</div>

<div class="plaque">
	<img src="/assets/img/logo-plaque.png" alt="Logo iFixYour.Tech" width="1180" height="240">
</div>

<div class="home-section">

## À terme

<div class="cols">
	<div>
		<h3>Reconditionnement</h3>
		<p>Des appareils condamnés pour panne de carte mère, remis en vie au niveau du composant.</p>
	</div>
	<div>
		<h3>Sous-traitance board-level</h3>
		<p>Pour les ateliers de réparation qui ne font pas de micro-soudure.</p>
	</div>
	<div>
		<h3>Récupération de données</h3>
		<p>Sur les appareils qui ne s'allument plus.</p>
	</div>
	<div>
		<h3>L'établi</h3>
		<p>Microscope trinoculaire, station à air chaud, préchauffeur, alimentation de laboratoire, soudure fine.</p>
	</div>
</div>

</div>

<div class="home-section">

## Dernières interventions

<ul class="post-list">
	{% for post in site.posts limit: 3 %}
	<li>
		<time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d.%m.%Y" }}</time>
		<a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
		{% if post.description %}<p class="post-excerpt">{{ post.description }}</p>{% endif %}
	</li>
	{% endfor %}
</ul>

<p><a href="/journal/">Tout le journal &rarr;</a></p>

</div>
