---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next:
  text: Écriture et Mouvements (Spec)
  link: MAD/specs/v1.0.0/entries.md
---

# Export des écritures et mouvements

L'API d'export ci-dessous vous permettra de récupérer les écritures par deux biais distincts;

- Avec un [exercice](./exercice.md)
- Sur une période données de maximums **12 mois**.

Il n'est pas possible de mélanger les deux.

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/mad/entries?idExercice=1&version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string). 

| nom | description | obligatoire |
| --- | --- | :---: |
| version | version du format | ✔️ |
| idExercice | id exercice | ❌ |
| startDate | Date de début d'extraction au format `YYYY-MM-DD` | ❌ |
| endDate | Date de fin d'extraction au format `YYYY-MM-DD` | ❌ |
| journalIds | N'incluent que les écritures liés aux journaux demandés, les IDs peuvent être récupérés à partir de la route MAD [journals](./journal.md) | ❌ |

> [!NOTE]
> L'écart maximum entre la date de début et de fin doit être de maximums 12 mois.

> [!IMPORTANT]
> 🔹 Accès cabinet 
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/entries.md).

## 💬 Consulter les écritures sur l'interface MyUnisoft

Sur MyUnisoft, il existe plusieurs moyens de récupérer et/ou consulter les écritures:

- Par le biais de la saisie: `Tenue` > `Saisie/Consultation` > `Saisie`
- Par la **recherche rapide**: accessible via l'icône en forme de loupe en haut à droite.

![](../../images/quick_search.jpg)

L'avantage de la première option est qu'elle permet de consulter les factures en attente, ce qui est courant lors d'un import au format JSON nécessitant une étape de validation par le responsable de dossier.

![](../images/saisie_header.PNG)
