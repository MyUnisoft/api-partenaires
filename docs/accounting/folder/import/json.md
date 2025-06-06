---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Création d'une entrée comptable avec le format JSON

Documentation sur la création d’une entrée comptable au format JSON.
​
Les routes HTTP concernées;

- <https://api.myunisoft.fr/api/v1/entry?type=e>
- <https://api.myunisoft.fr/api/v1/entry/temp> (permet la création de "factures en attentes").

## Définition TypeScript d'une entrée au format JSON

​La définition de type permet d’identifier les différents types des propriétés pour les structures JSON.

### Pièce jointe

​Définition de la structure JSON pour l’ajout d’une pièce jointe. Les mimes-types qui ne sont pas référencés ci-dessous ne sont pas supportés.

```ts
interface PJ {
  /** Le contenu (Buffer) de la pièce jointe au format base64. */
  content: string;

  /** Nom du fichier (la pièce jointe). */
  name: string;

  /** Mime-type de la pièce jointe. Par exemple: "application/pdf" */
  type: "image/gif" |
    "image/jpeg" |
    "image/pjpeg" |
    "image/jpg" |
    "image/bmp" |
    "image/png" |
    "image/x-png" |
    "image/tiff" |
    "image/tif" |
    "application/pdf" |
    "application/vnd.ms-excel" |
    "application/msword" |
    "application/vnd.ms-powerpoint" |
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" |
    "application/vnd.openxmlformats-officedocument.presentationml.presentation" |
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" |
    "application/vnd.oasis.opendocument.text" |
    "text/plain";
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

### Analytique

Définition de la structure JSON pour l'ajout de l'analytique sur une ligne d'une entrée comptable.

```ts
interface AnalyticRepartition {
  id_axe: number;
  code: string;
  label: string;
  repartition: RepartitionInfo[];
}

interface RepartitionInfo {
  id_section: number;
  code: string;
  label: string;
  rate: number;
  amount: number;
}
```

L'objet en question est récupérable automatiquement par le biais de l'API `https://api.myunisoft.fr/api/v1/analytics/repartitions`. Pour plus d'informations nous vous invitons à consulter [le guide sur la gestion de l'analytique](../analytique.md).

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

### Ligne entrée comptable

Définition de type de la structure JSON d’une ligne d’entrée comptable.

```ts
interface NewEntryLine {
  /** Tableau contenant une ou plusieurs pièces jointes à attacher à la ligne. */
  pj_list?: PJ[];

  /**
   * Il peut contenir un numéro libre (numéro de chèque, numéro de virement etc).
   * IMPORTANT: Merci d'utiliser le champ piece2 pour le numéro de facture!
   *
   * Contient uniquement des caractères alphanumériques et a une longueur maximum de 15.
   */
  piece?: string;

  /**
   * Numéro d'identification de la facture.
   *
   * Contient uniquement des caractères alphanumériques et à une longueur maximum de 15.
   */
  piece2?: string;

  /** Doit être supérieur ou égale a la propriété date_piece, format AAAA-MM-JJ */
  deadline: string;

  /** Credit et Debit de la ligne (l'un des deux doit toujours être à zéro). */
  credit: number;
  debit: number;

  /** Devise, par exemple 'EUR' **/
  currency?: string;

  /** Montant de la devise **/
  value_currency?: number;

  /** Tableau contenant la répartition/lien analytique à effectuer (si besoin) **/
  analytique?: AnalyticRepartition[];

  /**
  ID du type de paiement pour la ligne.
  Peut-être égal à -1 si vous n'avez pas l'information.
  Les différents moyens de paiement disponibles pour la société sont récupérables avec la route GET /paiement_type.
  */
  payment_type_id?: number;

  /**
  Id du compte à associé à la ligne (attention ce n'est pas l'account number).
  Il est possible de récupérer l'id avec la route POST account (qui s'occupera aussi de créer le compte s'il n'existe pas).
  */
  account_id: number;

  /** Label de la ligne (aussi appelé Intitulé). */
  label: string;

  /**
  Configuration du lettrage pour la ligne.
  Longueur maximum de 3 caractères au fomat [a-zA-Z]{1,3}
  Note: ⚠️ le lettrage n'est pas exploité par le back-end à ce jour.
  */
  lettrage?: string;

  /** Configuration rapprochement bancaire, aa (année) - mm (mois) - jj (jour) */
  pointage_aa?: string;
  pointage_mm?: string;
  pointage_jj?: string;
}
```

> [!NOTE]
> Vous aurez besoin du champ **piece2** pour le numéro de facture. Le champ **piece1** est régulièrement utilisé pour le numéro de facture interne du logiciel partenaire.
​
<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

### Entrée comptable

Structure principale (racine) pour la création d’une entrée comptable dans MyUnisoft. Il est important que l’intégralité des lignes soit équilibré en crédit et débit.

```ts
interface NewEntry {
  /** Tableau contenant une ou plusieurs pièces jointes à attacher à l'entrée comptable. */
  pj_list?: PJ[];

  /** Ligne de l'entrée comptable. */
  entry_list: NewEntryLine[];

  /** Date de l'entrée comptable au format AAAA-MM-JJ. */
  date_piece: string;

  /** Période from et to au format AAAA-MM-JJ. */
  period_from?: string;
  period_to?: string;

  /** Id de la société d'appartenance. */
  etablissement_id: number;

  /**
  Id du journal en lien avec l'entrée comptable.
  Les journaux en lien avec la société sont récupérables avec la route GET /diary.
  */
  diary_id: number;

  /**
  ID partenaire de l'entrée comptable.
  Il se doit d'être strictement unique et de préférence avoir un préfixe identifiant le partenaire.
  L'entrée comptable sera récupérable avec la route GET entry/id?id_origin=ID

  @example
  QB-dd661851-022a-44ae-8205-f3f4449eb891
  */
  entry_origin_partner_id?: string;

  /**
  Structure JSON personnalisée attachée a l'entrée comptable.
  Pratique pour conserver des informations complémentaires qui pourront être récupérées plus tard!
  */
  json?: string;

  /** Commentaire attaché a l'entrée comptable. */
  comment?: { content: string };

  /** Id pour identifier la source (provenance) de l'entrée comptable. */
  id_source?: number;
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

### Schéma JSON

Le schéma JSON est un vocabulaire qui vous permet d'annoter et de valider les documents JSON. Il existe des outils en ligne comme JSON Schema Validator qui vous permettront d’expérimenter en temps réel la validation d’une structure JSON.
​
<details class="details custom-block">
<summary>Visualiser le schéma JSON</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "definitions": {
    "PJ": {
      "type": "object",
      "required": [
        "content",
        "name",
        "type"
      ],
      "additionalProperties": false,
      "properties": {
        "content": {
          "type": "string",
          "description": "Le contenu (Buffer) de la pièce jointe au format base64.",
          "contentEncoding": "base64"
        },
        "name": {
          "type": "string",
          "description": "Nom du fichier (la pièce jointe).",
          "maxLength": 50
        },
        "type": {
          "type": "string",
          "description": "Mime-type de la pièce jointe.",
          "enum": [
            "image/gif",
            "image/jpeg",
            "image/pjpeg",
            "image/jpg",
            "image/bmp",
            "image/png",
            "image/x-png",
            "image/tiff",
            "image/tif",
            "application/pdf",
            "application/vnd.ms-excel",
            "application/msword",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.oasis.opendocument.text",
            "text/plain"
          ]
        }
      }
    },
    "EntryComment": {
      "type": "object",
      "required": [
        "content"
      ],
      "additionalProperties": false,
      "properties": {
        "content": {
          "type": "string",
          "description": "Contenu du commentaire."
        }
      }
    },
    "RepartitionInfo": {
      "type": "object",
      "properties": {
        "id_section": {
          "type": "number"
        },
        "code": {
          "type": "string"
        },
        "label": {
          "type": "string"
        },
        "rate": {
          "type": "number",
          "description": "Rate (pourcent %)"
        },
        "amount": {
          "type": "number"
        }
      },
      "required": ["id_section", "code", "label", "rate", "amount"],
      "additionalProperties": false
    },
    "AnalyticRepartition": {
      "type": "object",
      "properties": {
        "id_axe": {
          "type": "number"
        },
        "code": {
          "type": "string"
        },
        "label": {
          "type": "string"
        },
        "repartition": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/RepartitionInfo"
          }
        }
      },
      "required": ["id_axe", "code", "label", "repartition"],
      "additionalProperties": false
    },
    "NewEntryLine": {
      "type": "object",
      "additionalProperties": true,
      "required": ["deadline", "account_id", "label", "credit", "debit"],
      "properties": {
        "pj_list": {
          "type": "array",
          "description": "Tableau contenant une ou plusieurs pièces jointes à attacher à la ligne.",
          "items": {
            "$ref": "#/definitions/PJ"
          }
        },
        "piece": {
          "type": "string",
          "description": "Peut contenir ce que vous voulez (numéro de chèque, numéro de virement etc.).",
          "format": "^[a-zA-Z0-9]{1,15}$"
        },
        "piece2": {
          "type": "string",
          "description": "Numéro d'identification de la facture.",
          "format": "^[a-zA-Z0-9]{1,10}$"
        },
        "deadline": {
          "type": "string",
          "description": "Doit être supérieur ou égale a la propriété date_piece",
          "format": "date"
        },
        "credit": {
          "type": "number",
          "description": "credit (obligatoirement en EUROS)",
          "default": 0
        },
        "debit": {
          "type": "number",
          "description": "debit (obligatoirement en EUROS)",
          "default": 0
        },
        "analytique": {
          "type": "array",
          "description": "Tableau contenant les répartitions analytiques avec les liens sur les axes et sections.",
          "items": {
            "$ref": "#/definitions/AnalyticRepartition"
          }
        },
        "currency": {
          "type": "string",
          "description": "Code ISO 4217",
          "default": "EUR"
        },
        "value_currency": {
          "type": "number",
          "description": "La valeur du débit ou crédit dans la devise choisi"
        },
        "payment_type_id": {
          "type": "number",
          "description": "ID du type de paiement pour la ligne",
          "default": -1
        },
        "account_id": {
          "type": "number",
          "description": "Id du compte à associé à la ligne (attention ce n'est pas l'account number)."
        },
        "label": {
          "type": "string",
          "description": "Label de la ligne (aussi appelé Intitulé).",
          "maxLength": 50
        },
        "lettrage": {
          "type": "string",
          "description": "Configuration du lettrage pour la ligne.",
          "format": "^[a-zA-Z]{1,3}$"
        }
      }
    }
  },
  "additionalProperties": true,
  "required": ["entry_list", "date_piece", "etablissement_id", "diary_id"],
  "properties": {
    "pj_list": {
      "type": "array",
      "description": "Tableau contenant une ou plusieurs pièces jointes à attacher à l'entrée comptable.",
      "items": {
        "$ref": "#/definitions/PJ"
      }
    },
    "entry_list": {
      "type": "array",
      "description": "Ligne de l'entrée comptable.",
      "minItems": 1,
      "items": {
        "$ref": "#/definitions/NewEntryLine"
      }
    },
    "date_piece": {
      "type": "string",
      "description": "Date de l'entrée comptable",
      "format": "date"
    },
    "period_from": {
      "type": "string",
      "format": "date"
    },
    "period_to": {
      "type": "string",
      "format": "date"
    },
    "etablissement_id": {
      "type": "number",
      "description": "Id de la société d'appartenance."
    },
    "diary_id": {
      "type": "number",
      "description": "Id du journal en lien avec l'entrée comptable."
    },
    "entry_origin_partner_id": {
      "type": "string",
      "description": "ID unique identifiant l'entrée comptable chez le partenaire."
    },
    "json": {
      "type": "string",
      "description": "Payload JSON custom attaché a l'entrée comptable."
    },
    "comment": {
      "$ref": "#/definitions/EntryComment"
    }
  }
}
```

</details>

Exemple avec l’outil cité plus tôt:
​
Il vous suffit de copier-coller le schéma ci-dessus dans le formulaire de gauche et votre entrée comptable dans le formulaire de droite. S'il y des anomalies elles seront détectées.
​
![Exemple de validation avec JSON Schema Validator](https://i.imgur.com/EUgYd4T.png)

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

### Exemples de JSON

- Exemple d'import JSON d'écritures (avec commentaires et pièces jointes, **sans** gestion de l'analytique) :

<details class="details custom-block">
<summary>Visualiser le body JSON</summary>

```json
{
  "pj_list": [
    {
      "content": "...",
      "name": "Apercu - Copie.pdf",
      "type": "application/pdf"
    }
  ],
  "entry_list": [
    {
      "label": "CARREFOUR",
      "deadline": "2020-05-05",
      "debit": 1000,
      "credit": 0,
      "account_id": 1021,
      "piece": "5043",
      "piece2": "1484515",
      "payment_type_id": 1271
    },
    {
      "label": "CARREFOUR",
      "deadline": "2020-05-05",
      "debit": 0,
      "credit": 1000,
      "account_id": 1190,
      "payment_type": -1,
      "piece": "5043",
      "piece2": "1484515",
      "payment_type_id": 1271
    }
  ],
  "diary_id": 43,
  "date_piece": "2020-04-22",
  "etablissement_id": 3,
  "period_to": "2020-04-22",
  "period_from": "2020-03-22"
}
```

</details>

- Exemple d'import JSON d'écritures (avec commentaires et pièces jointes, **avec** gestion de l'analytique) :

<details class="details custom-block">
<summary>Visualiser le body JSON</summary>

```json
{
  "pj_list": [
    {
      "content": "...",
      "name": "Apercu - Copie.pdf",
      "type": "application/pdf"
    }
  ],
  "entry_list": [
    {
      "label": "CARREFOUR",
      "deadline": "2020-05-05",
      "debit": 1000,
      "credit": 0,
      "account_id": 1021,
      "piece": "5043",
      "piece2": "1484515",
      "payment_type_id": 1271,
      "analytique": [
        {
          "id_axe": 5489,
          "label_axe": "Lib 1",
          "code_axe": "AXE 1",
          "repartition": [
            {
              "id_section": 518529,
              "code_section": "ATTENTE",
              "label_section": "Section d'attente",
              "montant": 1000,
              "taux": 100
            }
          ]
        }
      ]
    },
    {
      "label": "CARREFOUR",
      "deadline": "2020-05-05",
      "debit": 0,
      "credit": 1000,
      "account_id": 1190,
      "payment_type": -1,
      "piece": "5043",
      "piece2": "1484515",
      "payment_type_id": 1271
    }
  ],
  "diary_id": 43,
  "date_piece": "2020-04-22",
  "etablissement_id": 3,
  "period_to": "2020-04-22",
  "period_from": "2020-03-22"
}
```

</details>

## Gestion des comptes tiers

À la **différence de l'import TRA+PJ** il n'est pas possible de synchroniser et créer automatiquement les comptes tiers **411** et **401**.

Il est donc nécessaire de vous assurer que les comptes soient bien créés avant d'importer l'écriture. Je vous invite à consulter le guide suivant: [Récupérer et travailler avec le plan comptable](../account/plan_comptable.md)

## Gestion d'un id partenaire

Les écritures MyUnisoft peuvent avoir un id partenaire `entry_origin_partner_id` qui se doit d'être strictement unique. Pour cela nous vous recommandons de par exemple préfixer un UUID/CUID avec le nom de votre entreprise: `name-0aad3319-2aa7-400a-b709-6942562a200e`.

Cela peut éventuellement permettre de Synchroniser l'état d'une écriture entre nos deux solutions car l'id de l'écriture n'est pas forcément fiable (il changera par exemple quand l'écriture passera d'en "**attente de validation**" à "**valider**"). L'id partenaire lui ne changera jamais et vous pointera toujours vers la bonne écriture.

L'id de l'écriture pourra être récupérés avec le endpoint suivant:

```bash
$ curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/entry/id?id_origin=name-0aad3319-2aa7-400a-b709-6942562a200e' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}'
```

Le retour de la route est un JSON décrit par l'interface TypeScript suivante:

```ts
interface PartnersEntryMetadata {
  id_entry: number;
  type: "ENTRIES" | "ENTRIES_TEMP";
  json_metadata_partners?: string;
}
```

`json_metadata_partners` étant un JSON au format texte (présent uniquement si vous aviez défini la clé `json` sur NewEntry).

Pour récupérer l'écriture en elle même il vous suffit maintenant d'appeler la route `/entries` avec le body suivant:

```json
{
    filters: [
        { name: "id_entry", value: "id ici" }
    ]
};
```

## Gestion d'une devise différente de l'euro €

Il vous sera nécessaire pour chaque **NewEntryLine** de renseigner le champ `currency` avec la devise et le champ `value_currency` avec le montant de la devise.

Il sera nécessaire de convertir le crédit ou débit en euros avec le taux de conversion actuellement en vigueur. À noter que nous exposons une route permettant de récupérer les taux par devise:

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/currencies' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}'
```

Voici un exemple avec une ligne d'un montant de 100 francs suisses (CHF) qui sera avec le taux de change égal à 101,86 €.

```json
{
  "credit": 101.86,
  "debit": 0,
  "currency": "CHF",
  "value_currency": 100
}

```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
