# Récupérer et travailler avec le plan comptable.
Ce guide a pour objectif de vous aider dans la gestion du plan comptable.

Dans MyUnisoft le plan comptable peut être édité: `Paramètres` > `Tenue` > `Plan comptable`.

![](./images/plan_comptable.PNG)

## API

La route https://api.myunisoft.fr/api/v1/account?mode=2 permet de récupérer la même liste mais par le biais de l'API partenaires.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/account?mode=2' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> 👀 Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

Noter la présence du paramètre `mode` égal à **2**. Ce mode permet de récupérer toutes les informations en lien avec les comptes alors que le mode 1 ne retournera que l'id, numéro et label de chaque compte.

Si tout va bien vous devriez recevoir un JSON avec **une structure similaire à l'exemple ci-dessous**
```json
{
  "rows_number": 394,
  "pages_number": 1,
  "account_array": [
    {
      "row_number": 1,
      "account_id": 1157868,
      "account_number": "101100",
      "label": "CAPITAL NON APPELE",
      "solde": 0,
      "sens": "",
      "comment": "",
      "intraco": false,
      "btp_autoliquidation": false,
      "presta": false,
      "das_2": false,
      "blocked": false,
      "vat_param": null,
      "counterpart_account": null,
      "complementary_informations": null
    },
    {
      "row_number": 2,
      "account_id": 1157869,
      "account_number": "101200",
      "label": "CAPITAL APPELE NON VERSE",
      "solde": 0,
      "sens": "",
      "comment": "",
      "intraco": false,
      "btp_autoliquidation": false,
      "presta": false,
      "das_2": false,
      "blocked": false,
      "vat_param": null,
      "counterpart_account": null,
      "complementary_informations": null
    }
  ]
}
```

Si vous avez choisi le mode 1 le retour sera plutôt similaire à celui-ci:

```json
[
    {
        "account_id": 11660,
        "account_number": "101000",
        "label": "CAPITAL"
    },
    {
        "account_id": 11661,
        "account_number": "106100",
        "label": "RESERVE LEGALE"
    }
]
```

### Récupération des entrées comptables en lien avec un compte.
Il est possible de récupérer les entrées en lien avec un compte (par id ou numéro).

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/account/entries?limit=100&account_no=401NAME' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Le paramètre `account_id` si l'id du compte est connu ou bien `account_no` si vous voulez faire une recherche par le numéro. L'ensemble des paramètres possibles sont disponibles sur le [postman en ligne](https://docs.api.myunisoft.fr/#intro).

Si tout va bien vous devriez recevoir un JSON avec **une structure similaire à l'exemple ci-dessous**
```json
{
    "rows_number": 255,
    "pages_number": 3,
    "total_debit": 3777.89,
    "total_credit": 3737.48,
    "list_entries_line": [
        {
            "diary_id": 6007,
            "diary_code": "AD",
            "is_an": true,
            "entry_id": 1034259,
            "entry_line_id": 4030899,
            "date": "2001-04-30",
            "piece": null,
            "piece2": null,
            "label": "Reprise",
            "debit": null,
            "credit": 1497.8,
            "solde": -1497.8,
            "lettrage": "AAA",
            "comment": false,
            "pj_list": [],
            "payment_type": null,
            "deadline": null,
            "added_date": "2001-04-30",
            "period_from": null,
            "period_to": null,
            "closed": false,
            "dotted": false,
            "flags": null
        }
    ]
}
```

### Récupération et/ou création d'un compte.
Il est aussi possible de récupérer unitaire un compte (et s'il n'existe pas il sera créé). C'est une route plutôt pratique si vous souhaitez faire un import dans le format JSON (car celui-ci ne gère pas la création automatique des comptes).

```bash
curl --location --request POST 'https://api.myunisoft.fr/api/v1/account' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "account_number": "411FOOBAR",
    "label": "FOOBAR account"
}'
```

La requête ci-dessus aura pour effet de récupérer (ou créer s'il n'existe pas encore) le compte `411FOOBAR`. Le retour contiendra l'id du compte qui sera notamment nécessaire dans l'import format JSON.

```json
{
  "account_id": 2228247,
  "account_number": "411FOOBAR",
  "label": "FOOBAR account",
  "counterpart_account": null
}
```

> Note: Le compte de contrepartie lorsqu'il est défini à la même structure qu'un compte normal (donc avec la propriété account_id, account_number et label).

### Mise à jour d'un compte existant

TBC
