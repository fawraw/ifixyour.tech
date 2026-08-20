---
layout: post
title: "MODÈLE — Ne s'allume plus : diagnostic et réparation"
description: "Une phrase de résumé pour les moteurs de recherche : appareil, panne, issue."
appareil: "MacBook Pro 13\" 2020 (A2251, carte 820-01949)"
tags: [macbook, dégât-liquide, ppbus]
---

<!--
Gabarit d'article du journal. Pour publier :
1. Copier ce fichier dans _posts/ sous le nom AAAA-MM-JJ-slug-de-l-article.md
2. Remplir le front matter (title = requête que taperait le client, appareil = modèle + n° de carte)
3. Remplir les sections, supprimer les commentaires
4. git add + commit + push → l'article est en ligne
-->

## Symptômes

Ce que voit l'utilisateur : ne s'allume plus, ne charge plus, s'éteint sous charge,
image absente… Historique connu (chute, liquide, réparation précédente).

## Diagnostic

Cheminement réel, y compris les fausses pistes : inspection visuelle, mesures en
diode-mode sur les rails principaux, consommation à l'ampèremètre, points de mesure sur
le schéma / boardview.

| Rail | Attendu | Mesuré |
|---|---|---|
| PPBUS_G3H | ~12,6 V | 0,4 V |

## Intervention

Composants remplacés (référence exacte), technique (air chaud, fer, préchauffage),
difficultés rencontrées.

## Résultat

Redémarre / stable après N heures de test / échec et pourquoi. Photos avant/après.

## Temps passé et leçons

Durée réelle, ce qui serait fait autrement la prochaine fois.
