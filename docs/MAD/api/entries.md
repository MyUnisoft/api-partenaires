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

| nom | description | obligatoire | valeurs multiples |
| --- | --- | :---: | :---: |
| version | Version du format | ✔️ | ❌ |
| idExercice | Identifiant de l'exercice | ❌ | ❌ |
| startDate | Date de début d'extraction au format `YYYY-MM-DD` | ❌ | ❌ |
| endDate | Date de fin d'extraction au format `YYYY-MM-DD` | ❌ | ❌ |
| dateFilter | Modifie la colonne utilisée par les options `startDate` et `endDate`. Les valeurs possibles sont **document** (par défaut), **myunisoft** (horodatage MyUnisoft), et **accounting** (date de comptabilisation). | ❌ | ❌ |
| source | Permet de récupérer les écritures liées à une source spécifique. | ❌ |  ❌ |
| journalIds | Filtre pour inclure uniquement les écritures associées aux journaux spécifiés. Les ID**s** peuvent être récupérés via la route MAD [journals](./journal.md) | ❌ | ✔️ |
| draft | Si présent, l'API retournera uniquement les écritures en attente de validation | ❌ | ❌ |
| comment | Ajoute les commentaires liés aux écritures | ❌ | ❌ |

> [!NOTE]
> L'écart entre la date de début et de fin ne doit pas dépasser le bornage maximum prévu par l'exercice comptable (12 à 24 mois).

> [!IMPORTANT]
> 🔹 Accès cabinet  
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

### Source

Le paramètre `source` doit contenir le code correspondant à l'une des sources documentées [ici](../specs/v1.0.0/entries.md#source-d-une-ecriture)

## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/entries.md).

## 💬 Consulter les écritures sur l'interface MyUnisoft

Sur MyUnisoft, il existe plusieurs moyens de récupérer et/ou consulter les écritures:

- Par le biais de la saisie: `Tenue` > `Saisie/Consultation` > `Saisie`
- Par la **recherche rapide**: accessible via l'icône en forme de loupe en haut à droite.

![](../../images/quick_search.jpg)

L'avantage de la première option est qu'elle permet de consulter les factures en attente, ce qui est courant lors d'un import au format JSON nécessitant une étape de validation par le responsable de dossier.

![](../images/saisie_header.PNG)
