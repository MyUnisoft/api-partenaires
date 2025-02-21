---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next:
  text: Analytique (Spec)
  link: MAD/specs/v1.0.0/balance.md
---

# Export des balances de comptes

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/mad/balance?version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string). 

| nom | description | obligatoire |
| --- | --- | :---: |
| version | version du format | ✔️ |
| idExercice | Identifiant de l'exercice | ✔️ |
| startDate | Date de début d'extraction au format `YYYY-MM-DD` | ✔️ |
| endDate | Date de fin d'extraction au format `YYYY-MM-DD` | ✔️ |
| accountNumber | Numero de compte dont vous souhaitez avoir la balance. Gère aussi en racine de compte avec un `%` à la fin (ex: '400%') | ✔️ |

> [!NOTE]  
> Vous pouvez choisir entre donner l'idExercice ou une date de début et de fin de l'exercice.  
> L'écart maximum entre la date de début et de fin doit être de maximums 12 mois.

> [!IMPORTANT]  
> 🔹 Accès cabinet  
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/balance.md).
