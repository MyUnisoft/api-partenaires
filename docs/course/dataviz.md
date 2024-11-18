# Parcours d'intégration Dataviz 📊

Ce guide s'adresse aux éditeurs de logiciels Dataviz souhaitant s'intégrer avec MyUnisoft pour exporter les données d'un portefeuille de dossiers de production comptable.

Nous l'avons conçu en nous appuyant sur l'expérience d'intégration avec plusieurs de nos partenaires :

- **abCSR**
- **Drivn**
- **Emasphere**
- **Finthesis**
- **Pilotguard**
- **Waibi**

...et bien d'autres éditeurs que vous retrouverez sur [MyUnisoft Connected](https://myunisoft-connected.fr/liste-partenaires/).

## 🔬 Aperçu de l'usage classique

Dans la majorité des cas, les éditeurs de Dataviz souhaitent pouvoir :

1. Récupérer et identifier les dossiers de production comptable.
2. Extraire les écritures et mouvements (au format FEC ou JSON).

D'autres éléments en lien avec la comptabilité sont souvent récupérés, comme :

- Les exercices.
- Les journaux.

Pour l'authentification, merci de suivre le guide **Partenaire** dans le menu à gauche.

## 🌍 APIs et Guides

### 1. Récupérer et identifier les dossiers de production

Pour extraire les dossiers, veuillez consulter le guide suivant: [Récupérer les sociétés (dossiers)](../accounting/society.md)

### 2. Extraire les écritures et mouvements

Deux options s'offrent à vous pour extraire les écritures et mouvements :

- [API D'Export FEC](../accounting/folder/export/FEC.md)
- [API MAD](../MAD/introduction.md)
  - [Export des écritures (+ mouvements associés)](../MAD/api/entries.md)
  - [Export des mouvements](../MAD/api/movements.md)

L'export au format **FEC** est souvent le choix le plus commun, mais il peut s'avérer limité techniquement et moins riche en données. Pour répondre à ces limites, MyUnisoft propose des APIs d'export au format **JSON** qui offrent davantage de détails (données analytiques, lettrage, pièces jointes, etc.).

#### 💥 Problèmes fréquent avec l'export FEC

L'export FEC peut parfois être une API capricieuse, susceptible de retourner des erreurs, notamment :

- `GBL7` : Pas de données disponibles.  
- `FEC7` : Export FEC non équilibré.  

Ces erreurs surviennent généralement lorsque :  

1. L'exercice comptable est vide.  
2. L'exercice est incomplet, ce qui empêche la génération d'un export standard valide.

### 3. Autres éléments comptables

Les APIs MAD répondent également à vos besoins pour récupérer d'autres éléments comptables, tels que :

- [Exercices](../MAD/api/exercice.md)
- [Journaux](../MAD/api/journal.md)
- [Comptes](../MAD/api/account.md)

En complément, chaque guide inclut des explications sur l'utilisation de l'interface web MyUnisoft, afin de vous offrir une vue d'ensemble et une expérience utilisateur optimale.

## 🚀 Volumétrie et ratelimit

Lors de l'utilisation de nos APIs, il est essentiel de :

1. **Respecter les limitations d'appels (rate limits)** :  
   Nous imposons des limites pour garantir une performance optimale et une disponibilité constante. Veuillez consulter notre [documentation](../ratelimit.md) sur les quotas d'appels pour éviter tout blocage temporaire.

2. **Anticiper la volumétrie des données exportées** :  
   Les APIs JSON, particulièrement lorsqu'elles manipulent de grands exercices comptables (plus de **50,000 écritures**), peuvent générer des réponses très volumineuses, parfois supérieures à **100MB**. 

## 🙏 Retour d'expérience

Merci d'avoir pris le temps de parcourir ce guide dédié aux éditeurs de Dataviz. Nous espérons qu'il vous a été utile dans votre intégration avec MyUnisoft.  

Si vous avez trouvé ce guide pertinent ou si vous avez des suggestions pour l'améliorer, n'hésitez pas à nous partager vos retours. Chaque commentaire est précieux et nous aide à mieux répondre à vos besoins.
