---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next:
  text: Analytique (Spec)
  link: MAD/specs/v1.0.0/analytic.md
---

# Export des axes et sections analytiques

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/mad/analytics?version=1.0.0' \
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

## 💬 Gérer l'analytique sur l'interface MyUnisoft

L'analytique peut être gérée par le biais du menu: `Paramètres` > `Dossier` > `Analytique`. Par défaut l'analytique d'un dossier est déactivé.

Pour plus d'informations merci de consulter le guide [Gérer l'analytique d'une société (dossier)](../../accounting/folder/analytique.md)

> [!NOTE]
> Il vous sera nécessaire de sélectionner le dossier de production en amont (ou pendant la procédure).


## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/analytic.md).
