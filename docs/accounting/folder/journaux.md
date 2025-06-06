---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Récupérer les journaux d'une société (dossier)

Ce guide a pour objectif de vous aider dans la récupération des journaux (diary) d'une société (dossier).

Dans MyUnisoft la liste des journaux est accessible en passant par `Paramètres` > `Dossier` > `Journaux`.

![Aperçu de la liste des journaux](../../images/liste_journaux.PNG)

## API

La route <https://api.myunisoft.fr/api/v1/diary> permet de récupérer la même liste mais par le biais de l'API partenaires.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/diary' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

Si tout va bien vous devriez recevoir un JSON avec **une structure similaire à l'exemple ci-dessous**

<details class="details custom-block">
<summary>Visualiser la réponse JSON</summary>

```json
[
    {
        "code": "01",
        "name": "JOURNAL D'ACHATS",
        "account": null,
        "blocked": false,
        "diary_id": 32169,
        "diary_type_id": 1,
        "diary_type_code": "ACH",
        "diary_type_name": "Achat"
    },
    {
        "code": "02",
        "name": "JOURNAL DE VENTES",
        "account": null,
        "blocked": false,
        "diary_id": 32170,
        "diary_type_id": 2,
        "diary_type_code": "VTE",
        "diary_type_name": "Vente"
    },
    {
        "code": "03",
        "name": "JOURNAL D'ACHATS BIS",
        "account": null,
        "blocked": false,
        "diary_id": 32171,
        "diary_type_id": 1,
        "diary_type_code": "ACH",
        "diary_type_name": "Achat"
    },
    {
        "code": "09",
        "name": "JOURNAL NDF",
        "account": null,
        "blocked": false,
        "diary_id": 32172,
        "diary_type_id": 13,
        "diary_type_code": "NDF",
        "diary_type_name": "Note de frais"
    },
    {
        "code": "15",
        "name": "JOURNAL BANQUE",
        "account": {
            "id": 1180244,
            "label": "BANQUES",
            "number": "512000"
        },
        "blocked": false,
        "diary_id": 32173,
        "diary_type_id": 3,
        "diary_type_code": "BQ",
        "diary_type_name": "Banque"
    },
    {
        "code": "18",
        "name": "JOURNAL DE CAISSE",
        "account": null,
        "blocked": false,
        "diary_id": 32174,
        "diary_type_id": 4,
        "diary_type_code": "CAISSE",
        "diary_type_name": "Caisse"
    },
    {
        "code": "20",
        "name": "JOURNAL D' OD",
        "account": null,
        "blocked": false,
        "diary_id": 32175,
        "diary_type_id": 5,
        "diary_type_code": "OD",
        "diary_type_name": "OD"
    },
    {
        "code": "21",
        "name": "JOURNAL  SITUATIONS",
        "account": null,
        "blocked": false,
        "diary_id": 32176,
        "diary_type_id": 7,
        "diary_type_code": "OD_SIMUL",
        "diary_type_name": "OD Simulation"
    },
    {
        "code": "30",
        "name": "JOURNAL DE PAIE",
        "account": null,
        "blocked": false,
        "diary_id": 32177,
        "diary_type_id": 11,
        "diary_type_code": "OD_PAIE",
        "diary_type_name": "OD Paie"
    },
    {
        "code": "40",
        "name": "JOURNAL AN",
        "account": null,
        "blocked": false,
        "diary_id": 32178,
        "diary_type_id": 10,
        "diary_type_code": "AN",
        "diary_type_name": "À Nouveaux"
    },
    {
        "code": "50",
        "name": "JOURNAL OD DECL FISCALE",
        "account": null,
        "blocked": false,
        "diary_id": 32179,
        "diary_type_id": 14,
        "diary_type_code": "OD_DECL_FISCALE",
        "diary_type_name": "OD TVA"
    },
    {
        "code": "60",
        "name": "JOURNAL OD LETTRAGE",
        "account": null,
        "blocked": false,
        "diary_id": 32180,
        "diary_type_id": 12,
        "diary_type_code": "OD_LET",
        "diary_type_name": "OD Lettrage"
    },
    {
        "code": "98",
        "name": "JOURNAL A EXTOURNER",
        "account": null,
        "blocked": false,
        "diary_id": 32181,
        "diary_type_id": 8,
        "diary_type_code": "A_EXT",
        "diary_type_name": "À extourner"
    },
    {
        "code": "99",
        "name": "JOURNAL EXTOURNE",
        "account": null,
        "blocked": false,
        "diary_id": 32182,
        "diary_type_id": 9,
        "diary_type_code": "EXT",
        "diary_type_name": "Extourne"
    },
    {
        "code": "CT",
        "name": "Compte chèque",
        "account": null,
        "blocked": true,
        "diary_id": 37440,
        "diary_type_id": null,
        "diary_type_code": "",
        "diary_type_name": ""
    }
]
```

</details>

### Type de journaux

| id | label | code |
| --- | --- | --- |
| 1 | Achat | ACH |
| 2 | Vente | VTE |
| 3 | Banque | BQ |
| 4 | Caisse | CAISSE |
| 5 | OD | OD |
| 6 | OD Audit | OD_AUDIT |
| 7 | OD Simulation | OD_SIMUL |
| 8 | À extourner | A_EXT |
| 9 | Extourne | EXT |
| 10 | À Nouveaux | AN |
| 11 | OD Paie | OD_PAIE |
| 12 | OD Lettrage | OD_LET |
| 13 | Note de frais | NDF |
| 14 | OD TVA | OD_DECL_FISCALE |
| 15 | OD Extracomptable | OD_EXC |
| 19 | Reprise Balance | RBAL |

## Définition TypeScript

Le endpoint **diary** retourne un tableau de structure Diary.

```ts
interface DiaryType {
  ACH: 1,
  VTE: 2,
  BQ: 3,
  CAISSE: 4,
  OD: 5,
  OD_AUDIT: 7,
  A_EXT: 8,
  EXT: 9,
  AN: 10,
  OD_PAIE: 11,
  OD_LET: 12,
  NDF: 13,
  OD_DECL_FISCALE: 14,
  OD_EXC: 15
}

interface Diary<T = DiaryType> {
  code: string;
  name: string;
  closed: boolean;
  account: null | {
    id: number;
    label: string;
    number: string;
  };
  blocked: boolean;
  diary_id: number;
  diary_type_id: T[keyof T];
  diary_type_code: keyof T;
  diary_type_name: string;
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
