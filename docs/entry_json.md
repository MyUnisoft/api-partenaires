# Création d'une entrée comptable avec le format JSON

Documentation sur la création d’une entrée comptable au format JSON.
​
Les routes HTTP concernées;
- https://api.myunisoft.fr/api/v1/entry?type=e
- https://api.myunisoft.fr/api/v1/entry/temp (permet la création de "factures en attentes").
​
# Définition TypeScript
​
La définition de type permet d’identifier les différents types des propriétés pour les structures JSON.
​
> Le signe **?** indique que la propriété est optionnelle. PJ**[]** indique que la propriété est un tableau de structure PJ.
​
## Pièce jointe
​
Définition de la structure JSON pour l’ajout d’une pièce jointe. Les mimes-types qui ne sont pas référencés ci-dessous ne sont pas supportés.
​
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
​
## Ligne entrée comptable
​
Définition de type de la structure JSON d’une ligne d’entrée comptable.
​
```ts
interface NewEntryLine {
  /** Tableau contenant une ou plusieurs pièces jointes à attacher à la ligne. */
  pj_list?: PJ[];

  /**
  Il n'y a pas de règle prédéfini pour ce champ.
  Il peut contenir ce que vous voulez (numéro de chèque, numéro de virement etc.).
  Contient uniquement des caractères alphanumériques et avoir une longueur maximum de 15.
  */
  piece?: string;

  /**
  Numéro d'identification de la facture.
  Contient uniquement des caractères alphanumériques et avoir une longueur maximum de 10.
  */
  piece2: string;

  /** Doit être supérieur ou égale a la propriété date_piece, format AAAA-MM-JJ */
  deadline: string;

  /** Credit et Debit de la ligne (l'un des deux doit toujours être à zéro). */
  credit: number;
  debit: number;

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
  */
  lettrage?: string;

  /** Configuration rapprochement bancaire, aa (année) - mm (mois) - jj (jour) */
  pointage_aa?: string;
  pointage_mm?: string;
  pointage_jj?: string;
}
```
​
> Les propriétés lettrage, pointage_aa, pointage_mm, pointage_jj ne sont certainement pas nécessaires aux partenaires.
​
## Entrée comptable
​
Structure principale (racine) pour la création d’une entrée comptable dans MyUnisoft. Il est important que l’intégralité des lignes soit équilibré en crédit et débit.
​
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
​
> Les propriétés entry_origin_partner_id , json et id_source ne sont certainement pas nécessaires aux partenaires.
​
# Schéma JSON
​
Le schéma JSON est un vocabulaire qui vous permet d'annoter et de valider les documents JSON. Il existe des outils en ligne comme JSON Schema Validator qui vous permettront d’expérimenter en temps réel la validation d’une structure JSON.
​
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
    "NewEntryLine": {
      "type": "object",
      "additionalProperties": true,
      "required": ["piece2", "deadline", "account_id", "label", "credit", "debit"],
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
          "description": "credit",
          "default": 0
        },
        "debit": {
          "type": "number",
          "description": "debit",
          "default": 0
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
​
Exemple avec l’outil cité plus tôt:
​
Il vous suffit de copier-coller le schéma ci-dessus dans le formulaire de gauche et votre entrée comptable dans le formulaire de droite. S'il y des anomalies elles seront détectées.
​
![](https://i.imgur.com/EUgYd4T.png)