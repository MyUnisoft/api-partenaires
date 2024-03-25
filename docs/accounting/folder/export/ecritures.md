---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Récupérer les écritures comptables

Ce guide a pour objectif de vous aider dans la récupération des écritures comptables d'un dossier de production.

## API

La route https://api.myunisoft.fr/api/v1/entries?type=e permet de récupérer l'intégralité des écritures par **type**.

```bash
$ curl --location \
--request POST 'https://api.myunisoft.fr/api/v1/entries?type=e' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
--data-raw '{
    "sort": { "ecr": "desc" },
    "filters": [
      {
        "name": "type", "value": "e"
      }
    ]
  }'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

Si tout va bien vous devriez recevoir un JSON avec **une structure similaire à l'exemple ci-dessous**

```json
{
  "type": "E",
  "debit_total": 118000,
  "credit_total": 118000,
  "entry_array": [
    {
      "diary": {
        "id": 15894,
        "code": "V",
        "label": "VENTES",
        "diary_type_code": "VTE"
      },
      "blocked": false,
      "comment": false,
      "entry_id": 1945319,
      "date_piece": "2020-12-31",
      "entry_date": "2020-12-31",
      "entry_list": [
        {
          "debit": 83.77,
          "label": "TEST",
          "piece": "",
          "piece2": "202007567",
          "account": {
            "label": "TEST",
            "account_id": 618900,
            "account_number": "411CG875400"
          },
          "currency": "EUR",
          "line_entry_id": 8756022
        }
      ],
      "etablissement_id": 178
    }
  ]
}
```

### Type d'écriture disponible

Les différents types d'écritures sont:

- **E** (ECRITURE)
- **O** (ECRITURE OCR/ECRITURE EN ATTENTE)
- **IB** (ECRITURE INTEGRATION BANCAIRE)
- **M** (ECRITURE MANUEL)
- **EXT** (ECRITURE EXTOURNE)
- **L** (ECRITURE LETTRAGE)

### Filtre de la requête HTTP

Il vous est possible de récupérer les écritures par période et par code journal par le biais des filtres du body JSON.

```json
{
  "sort": { "ecr": "desc" },
  "filters": [
    { "name": "type", "value": "e" },
    { "name": "diary", "value": "02" },
    { "name": "start_date", "value": "2020-12-01" },
    { "name": "end_date", "value": "2020-12-31" }
  ]
}
```

### Interface TypeScript (type E & O uniquement).

```ts
export type Entries = {
  type: "E";
  debit_total: number;
  credit_total: number;
  entry_array: EntryE[];
} | {
  type: "O";
  debit_total: number;
  credit_total: number;
  entry_array: EntryO[];
}

interface BaseEntry<DiaryType, EntryLineType> {
  comment: boolean;
  entry_id: number;
  date_piece: string;
  etablissement_id: number;
  diary: DiaryType;
  entry_list: EntryLineType[];
}

export interface EntryE extends BaseEntry<DiaryE, EntryLineE>{
  blocked: boolean;
  entry_date: string;
}

export interface EntryO extends BaseEntry<DiaryO, EntryLineO>{
  alerte: string;
  doublon: boolean;
  period_to?: string;
  period_from?: string;
  last_comment?: string | LastComment;
  account_base_id?: string;
  transaction_qonto_id: string;
  entry_origin_partner_id: string;
  pj_list: EntryOPJ[];
}

export interface LastComment {
  id: number;
  name: string;
  comment: string;
  date_time: string;
}

export interface DiaryE {
  id: number;
  code: string;
  label: string;
  account?: {
    id: number;
    label: string;
    number: string;
  };
  diary_type_code?: string;
}

export interface DiaryO {
  id: number;
  code: string;
  label: string;
}

interface BaseEntryLine {
  credit?: number;
  debit?: number;
  label: string;
  piece?: string;
  piece2?: string;
  account: Account;
  deadline?: string;
  line_entry_id: number;
}

export interface EntryLineE extends BaseEntryLine{
  currency: string;
  flags?: {
    leasing: {
      company: {
        value: number;
      };
      leasing: {
        id: number;
        title: string;
        comment: string;
        period_id: number;
        is_expired: boolean;
        payment_count: number;
        bank_account_id: number;
        contract_number: string;
        payment_type_id: number;
        contract_type_id: number;
        is_tax_deduction: boolean;
        is_deductible_vat: boolean;
        personal_account_id: number;
        tax_deduction_value: number;
      };
      property_cost: {
        actual: number;
        original: number;
      };
      payments?: Payment[];
    }
  };
}

export interface Payment {
  date: string;
  amount: number;
  insurance: number;
}

export interface EntryLineO extends BaseEntryLine{
  payment_type: {
    code: string;
    name: string;
    payment_type_id?: number;
  };
  pj_list: EntryOPJ[];
}

export interface EntryOPJ {
  name: string;
  token: string;
  etat: boolean;
  link?: string;
  baseUrl?: string;
  download?: string;
  date_time?: string;
  thumbnail?: string;
  document_id?: number;
}
```
