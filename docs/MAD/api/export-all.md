---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

# Export Complet

L'export complet permet de récupérer l'intégralité des données d'un dossier comptable.

Le format de récupération des données est possible en JSON ou TRA.

## JSON

Le paramétrage de la route pour la récupération JSON se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string).

| nom | description | obligatoire | valeurs multiples |
| --- | --- | :---: | :---: |
| version | version du format | ✔️ | ❌ |
| format | format d'export souhaité (JSON) | ✔️ | ❌ |

## TRA

L'export au format TRA est géré de façon partielle.

Voici les [querystrings](https://en.wikipedia.org/wiki/Query_string) attendues :

| nom | description | obligatoire | valeurs multiples | Particularité |
| --- | --- | :---: | :---: | :---: |
| version | version du format | ✔️ | ❌ | - |
| format | format d'export souhaité (TRA) | ✔️ | ❌ | - |
| idExercice | id de l'exercice souhaité | ❌ | ❌ | non associable à une période |
| startDate | date de début de période | ❌ | ❌ | non associable à idExercice |
| endDate | date de fin de période | ❌ | ❌ | non associable à idExercice |
| journalIds | tableau d'id des journaux | ❌ | ✔️ | - |

> [!IMPORTANT]  
> L'export en format TRA **ne peut pas combiner** un `idExercice` et une période (`startDate`, `endDate`) .
<br>
> L'écart entre la date de début et de fin ne doit pas dépasser le bornage maximum prévu par l'exercice comptable (12 à 24 mois).

<br>
La génération est opérée de manière asynchrone et se décompose de la façon suivante :

## Déclenchement de l'opération

> [!IMPORTANT]  
> 🔹 L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

```bash
curl --location 'https://app.myunisoft.fr/api/v1/mad/all?accountingFolderId=1&format=json&version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V;' \
--header 'society-id: 1;' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Exemple de retour JSON de l'API :

```json
{
  "id": "export_sch-1_acf-1",
  "status": "INIT"
}
```

> [!NOTE]  
> Un délai de 1 heure est requis pour pouvoir déclencher un nouvel export avec les mêmes paramètres.  
> Durant ce délai l'API retournera le résultat de la précédente tentative.

## Récupération du statut de l'export

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string).

| nom | description | obligatoire | valeurs multiples |
| --- | --- | :---: | :---: |
| exportId | l'id de l'export | ✔️ | ❌ |

```bash
curl --location 'https://app.myunisoft.fr/api/v1/mad/all/status?exportId=export_4eb2e1fce7838647' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V;' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

::: code-group

```json [Export disponible]
{
    "id": "export_4eb2e1fce7838647",
    "status": "DONE",
    "url": "https://app.myunisoft.fr/api/ged/ged/document/x-xxxxxxxxxxxxxxxxxxxxx/download"
}
```

```json [Export en cours]
{
    "id": "export_4eb2e1fce7838647",
    "status": "INIT"
}
```

```json [Export échoué]
{
    "id": "export_sch-1_acf-1",
    "status": "FAILED",
    "reason": "An error message"
}
```

:::

## Récupération du fichier d'export

Lorsque le statut d'export est `DONE` le fichier contenant les données est récupérable via l'URL fourni dans la réponse de la route de récupération du statut.

Dans le cas de notre exemple : `"https://app.myunisoft.fr/api/ged/ged/document/x-xxxxxxxxxxxxxxxxxxxxx/download"`

## 🔬 Structure des données récupérées

### Données JSON

```ts
interface MAD {
  metadata: {
    version: string;
    createdAt: number;
    producer: "MyUnisoft";
    additionalFreeProperties: Record<string, any>;
  };
  data: {
    accountingFolder: AccountingFolder;
    payments: Payment[];
    banks: Bank[];
    journals: Journal[];
    accounts: Account[];
    exercices: Exercice[];
    analytics: AnalyticalAxe[];
    entries: Entry[];
  };
}
```

Le JSON renvoyé utilise les spécifications suivantes :

- [AccountingFolder](../specs/v1.0.0/accountingFolder.md)
- [Payment](../specs/v1.0.0/payment.md)
- [Bank](../specs/v1.0.0/bank.md)
- [Journal](../specs/v1.0.0/journal.md)
- [Account](../specs/v1.0.0/account.md)
- [Exercice](../specs/v1.0.0/exercice.md)
- [Analytic](../specs/v1.0.0/analytic.md)
- [Entry](../specs/v1.0.0/entries.md)

### Données TRA

Le document contenant les spécifications du format historique TRA est consultable sur cette [page](https://github.com/MyUnisoft/api-partenaires/blob/main/docs/MAD/TRA.pdf).
