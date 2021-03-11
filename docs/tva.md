# Récupérer la TVA d'une société (dossier)
Ce guide a pour objectif de vous aider dans la récupération des paramètres de TVA d'un dossier (société).

Dans MyUnisoft les paramètres de TVA peuvent être récupérés dans `Paramètres` > `Tenue` > `Plan comptable` > `Liste TVA`.

![](./images/liste_tva.PNG)

## API

La route https://api.myunisoft.fr/api/v1/vat_param permet de récupérer la même liste mais par le biais de l'API partenaires.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/vat_param' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> 👀 Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

Si tout va bien vous devriez recevoir un JSON avec **une structure similaire à l'exemple ci-dessous**
```json
[
    {
        "vat_param_id": 6628,
        "code": "01",
        "account_ded": {
            "account_id": 1180209,
            "account_number": "445660",
            "label": "TVA DEDUCT.S/ACHATS"
        },
        "account_coll": {
            "account_id": 1180443,
            "account_number": "445712",
            "label": "TVA collectée"
        },
        "vat": {
            "id": 4,
            "rate": 20
        },
        "vat_type": {
            "id": 1,
            "label": "Bien et service"
        },
        "vat_exigility": {
            "id": 1,
            "label": "Débit (facturation)"
        },
        "blocked": false
    }
]
```

> ⚠️ There is a real typo with **vat_exigility** (this is not an error in the example).

### Type de TVA

| id | label |
| --- | --- |
| 1 | Bien et service |
| 2 | Immobilisation |
| 3 | Auto-liquidation |
| 4 | non soumis |
| 5 | import/export |

### Type d'Exigibilité

| id | label |
| --- | --- |
| 1 | Débit (facturation) |
| 2 | Encaissement / Décaissement |
| 3 | Mixte |

### Note sur la construction d'un label TVA

Les TVA sur MyUnisoft ne sont pas labellisés (ce qui peut être problématique dans certaines interconnexions). Si vous avez ce besoin il vous sera nécessaire de construire le label vous-même.

Nous vous recommandons de conserver le "**code**" ce qui vous permettra de visuellement faire le lien avec ce qui est présent dans My Unisoft.

## Définition TypeScript

Le endpoint **vat_param** retourne un tableau de structure VatParam.

```ts
interface VatParam {
  vat_param_id: number;
  code: string;
  account_ded: Account;
  account_coll: Account;
  vat: {
    id: number;
    rate: number;
  };
  vat_type: Vat;
  vat_exigility: Vat;
  blocked: boolean;
}

interface Vat {
  id: number;
  label: string;
}

interface Account {
  account_id: number;
  account_number: string;
  label: string;
  counterpart_account?: Account;
}
```