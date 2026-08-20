---
layout: post
title: "MODÈLE : ne s'allume plus, diagnostic et réparation"
description: "Une phrase de résumé pour les moteurs de recherche et la liste du journal : appareil, panne, issue. Toujours entre guillemets."
appareil: "MacBook Pro 13\" 2020 (A2251)"
carte: "820-01949"
symptome: "Ne s'allume plus après dégât liquide"
duree: "2 h 15"
tags: [macbook, degat-liquide, ppbus]
---

<!--
Gabarit d'article du journal. Pour publier :
1. Copier ce fichier dans _posts/ sous le nom AAAA-MM-JJ-slug-de-l-article.md
2. Remplir le front matter. REGLE ABSOLUE : toute valeur contenant un deux-points
   est mise entre guillemets, sinon le YAML casse et la page est publiée sans layout
   (strict_front_matter est actif : le build échouera, c'est voulu).
   title = la requête que taperait le client. description = 1 phrase, alimente la
   liste du journal et le SEO. La fiche (appareil, carte, symptome, duree) s'affiche
   automatiquement en tête d'article.
3. Remplir les sections, supprimer les commentaires.
4. Les photos vont dans assets/img/journal/, insérées avec figure + figcaption :
   <figure><img src="/assets/img/journal/xxx.jpg" alt="..."><figcaption>Légende en
   police mono.</figcaption></figure>
5. Les tableaux de mesures : première colonne = libellé, colonnes suivantes = valeurs
   (elles s'alignent à droite en mono automatiquement).
6. git add + commit + push : l'article est en ligne en une minute.
-->

## Symptômes

Ce que voit l'utilisateur : ne s'allume plus, ne charge plus, s'éteint sous charge,
image absente. Historique connu (chute, liquide, réparation précédente).

## Diagnostic

Cheminement réel, y compris les fausses pistes : inspection visuelle, mesures en
diode-mode sur les rails principaux, consommation à l'ampèremètre, points de mesure
sur le schéma et le boardview.

| Rail | Attendu | Mesuré |
|---|---|---|
| PPBUS_G3H | 12,6 V | 0,4 V |

## Intervention

Composants remplacés (référence exacte), technique (air chaud, fer, préchauffage),
difficultés rencontrées.

## Résultat

Redémarre, stable après N heures de test, ou échec et pourquoi. Photos avant et après.

## Temps passé et leçons

Durée réelle, ce qui serait fait autrement la prochaine fois.
