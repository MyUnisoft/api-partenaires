---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next:
  text: Compte (Spec)
  link: MAD/specs/v1.0.0/account.md
---

# Export des comptes

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/mad/accounts?version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string).

| nom | description | obligatoire | valeurs multiples |
| --- | --- | :---: | :---: |
| version | version du format | ✔️ | ❌ |
| comment | Ajoute les commentaires liés aux comptes | ❌ | ❌ |
| classAccount | Inclut uniquement les comptes commençant par la classe/catégorie spécifiée. Peut prendre une ou plusieurs racines. | ❌ | ✔️ |

> [!NOTE]  
> Le filtre `classAccount` gère plusieurs racines de compte avec un `%` à la fin (ex: `400%`)

> [!IMPORTANT]  
> 🔹 Accès cabinet  
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Retour d'API: `Account[]`

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/account.md).

## 💬 Gérer les comptes sur l'interface MyUnisoft

Le plan comptable peut être configuré à partir du menu: `Paramètres` > `Dossier` > `Plan comptable`.

![Aperçu du plan comptable](../../images/plan_comptable.PNG)

La modification des comptes tiers `401`, `411` et `421` permettra d'ajouter des informations complémentaires à ceux-ci, telles que l'adresse du siège, les contacts, etc.

![Aperçu des infos complémentaires d'une fiche de compte](../../images/fiche_compte_complementaire.PNG)
