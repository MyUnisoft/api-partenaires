---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Création d'une entrée comptable avec le format TRA+PJ
Documentation sur la création d’une entrée comptable au format TRA+PJ.
​
Les routes HTTP concernées;
- https://api.myunisoft.fr/api/v1/TRA/partial

## Introduction

Un TRA + PJ est une archive .zip contenant un fichier .TRA et optionnellement des pièces jointes (à la racine de l'archive).

![](../../../images/TRA_archive.PNG)

Le format du fichier .TRA est documenté dans <a href="https://github.com/MyUnisoft/api-partenaires/blob/main/docs/MAD/TRA.pdf" target="_blank">le PDF ici</a>.


## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string). 

| nom | description | obligatoire |
| --- | --- | :---: |
| `mandatory_docs` | Par défaut, l'API ne retournera pas d'erreur en cas de documents manquants (que ce soit dans l'archive ou en raison de l'indisponibilité d'un de nos services de stockage). Ce comportement peut être modifié en activant ce paramètre avec la valeur **1**. | ❌ |
| `HascodeVerif` | Si présent/activé (`true`), le back-end vérifiera si le fichier **TRA** n'a pas déjà été importé en calculant un hash **MD5** du fichier `.tra` présent dans l'archive. **Cette vérification ne concerne pas les pièces jointes des écritures contenues dans l'archive.** | ❌ |
