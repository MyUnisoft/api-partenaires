---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next:
  text: TVA (Spec)
  link: MAD/specs/v1.0.0/vat.md
---

# Export des TVAs

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/mad/vats?version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string).

| nom | description | obligatoire |
| --- | --- | :---: |
| version | version du format | ✔️ |

> [!IMPORTANT]
> 🔹 Accès cabinet
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Retour d'API: `Vat[]`

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/vat.md).

## 💬 Consulter les TVAs sur l'interface MyUnisoft

Dans MyUnisoft les paramètres de TVA peuvent être récupérés dans `Paramètres` > `Dossier` > `Plan comptable` > `Liste TVA`.

![Aperçu de la liste des codes et comptes de TVA d'un dossier](../../images/liste_tva.PNG)
