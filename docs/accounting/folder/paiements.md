# Récupérer les types de paiement disponible sur une société (dossier)
Ce guide a pour objectif de vous aider dans la récupération des méthodes de paiement disponible sur une société (dossier).

## API

La route https://api.myunisoft.fr/api/v1/payment_type permet de récupérer la même liste mais par le biais de l'API partenaires.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/payment_type' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

Si tout va bien vous devriez recevoir un JSON avec **une structure similaire à l'exemple ci-dessous**
```json
[
    {
        "payment_type_id": 11093,
        "name": "Carte bleue",
        "code": "CB"
    },
    {
        "payment_type_id": 11096,
        "name": "Chèque",
        "code": "CHQ"
    },
    {
        "payment_type_id": 11095,
        "name": "Espèce",
        "code": "ESP"
    },
    {
        "payment_type_id": 11098,
        "name": "Lettre de change",
        "code": "LCR"
    },
    {
        "payment_type_id": 11097,
        "name": "Prélèvement",
        "code": "PRLV"
    },
    {
        "payment_type_id": 11094,
        "name": "Virement",
        "code": "VIRT"
    }
]
```

### Type de paiement

| id | label | code |
| --- | --- | --- |
| 1 | Télépaiement | TP |
| 2 | Chéque | CH |
| 3 | Prélèvement | PRE |
| 4 | Virement | VIR |
| 5 | Espèce | ESP |

## Définition TypeScript

Le endpoint **payment_type** retourne un tableau de structure Payment.

```ts
interface Payment {
  payment_type_id: number;
  name: string;
  code: string;
}
```

---

⬅️ [README](../../../README.md)
