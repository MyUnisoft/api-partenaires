# Export des écritures et mouvements

L'API d'export ci-dessous vous permettra de récupérer les écritures par deux biais distincts;

- Avec un exercice
- Sur une période données de maximums **12 mois**.

Il n'est pas possible de mélanger les deux.

```bash
curl --location --request GET 'https://api.myunisoft.fr/api/v1/mad/entries?idExercice=1&version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string). 

| nom | description | obligatoire |
| --- | --- | --- |
| version | version du format | ✔️ |
| idExercice | id exercice | ❌ |
| startDate | Date de début d'extraction au format `YYYYMMDD` | ❌ |
| endDate | Date de fin d'extraction au format `YYYYMMDD` | ❌ |

> [!NOTE]
> L'écart maximum entre la date de début et de fin doit être de maximums 12 mois.

> [!IMPORTANT]
> 🔹 Accès cabinet 
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/entries.md).

> [!CAUTION]
> Pour éviter les extractions abusives nous avons volontairement limité à un exercice par requête API. Si vous souhaitez extraire l'intégralité des mouvements nous vous recommandons d'itérer sur l'intégralité des exercices séquentiellement.

---

⬅️ [Introduction MAD](../introduction.md)
