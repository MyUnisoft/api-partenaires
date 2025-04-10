---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Gérer les RIB/IBAN d'une société

Ce guide vous accompagnera dans la gestion (ajout, modification, suppression) des RIB/IBAN d'une société.

Dans MyUnisoft, la configuration des RIB/IBAN s'effectue à partir de: `Paramètres` > `Banques`.

![](../../images/RIB.jpg)

> [!IMPORTANT]
> 🔹 Accès cabinet : L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production **pour chaque route exposée ci-dessous**.

## Ajouter un RIB/IBAN

Pour ajouter un RIB/IBAN, l'API partenaire met à votre disposition la route https://api.myunisoft.fr/api/v1/rib.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/rib' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Society-id: 1;' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--data '{
    "banking_integration": true,
    "bic": "ABCDFRPP",
    "diary_id": 669294,
    "iban": "FR3817569000XXXXXX237686L18",
    "is_default": true,
    "owner": "SOCIETE TEST",
    "rib_label": "BANK TEST",
    "start_date": "2023-08-10"
}'
```

La requête executée avec succès vous retournera une réponse au format JSON accompagné d'un code `200`.

Exemple de retour JSON de l'API

```json
{
  "rib_id": 10665,
  "diary_id": 669294,
  "diary_label": "15 - JOURNAL BANQUE",
  "society_id": 1,
  "start_date": "20230810",
  "owner": "SOCIETE TEST",
  "banking_integration": true,
  "company_name": "NFG-TEST",
  "rib_label": "BANK TEST",
  "iban": "FR38 1756 9000 XXXX XX23 2686 L18",
  "bic": "ABCDFRPP",
  "is_default": true,
  "shared_iban_needing_banking_integration": []
}
```

La route attend un body au format JSON composé de propriétés de l'interface suivante :

Interface TypeScript RIB

```ts
export interface RIB {
  banking_integration: boolean,
  bic: string,
  diary_id: number,
  iban: string,
  is_default: boolean,
  owner: string,
  rib_label: string,
  start_date: string
}
```

Voici quelques détails sur les propriétés nécessaires :

- `banking_integration` : Afin de récupérer les écritures bancaires, le booléen `true` est à insérer en valeur.
- `diary_id` : Il s'agit de l'id du journal de type `banque` auquel vous souhaitez lier le RIB/IBAN. Pour récupérer la liste des journaux du dossier comptable, vous pouvez consulter cette [page](./journaux.md).
- `is_default` : permet de paramétrer le RIB par defaut si plusieurs sont ajoutés au dossier.
- `owner` : Il s'agit du titulaire du compte bancaire. (généralement la société)
- `start_date` : la date d'activation du RIB dans le dossier, attendue au format "YYYY-MM-DD".

## Modifier un RIB/IBAN

Pour modifier un RIB/IBAN, l'API partenaire met à votre disposition la route https://api.myunisoft.fr/api/v1/rib/:id.

```bash
curl --location --request PUT 'https://api.myunisoft.fr/api/v1/rib/10665' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Society-id: 1' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--data '{
    "banking_integration": true,
    "bic": "ABCDFRPP",
    "diary_id": 669294,
    "iban": "FR3817569000XXXXXX237686L18",
    "is_default": true,
    "owner": "SOCIETE TEST",
    "rib_id": 10665,
    "rib_label": "BNP",
    "start_date": "2023-08-10"
}'
```

> [!NOTE]
> La route attend un paramètre `:id`.<br>
> Il s'agit de celui du rib que vous souhaitez modifier.<br>
> Pour le récupérer, vous pouvez consulter cette [page](./RIB.md).

La requête executée avec succès vous retournera une réponse au format JSON accompagné d'un code `200`.

Exemple de retour JSON de l'API

```json
{
  "rib_id": 10665,
  "diary_id": 669294,
  "diary_label": "15 - JOURNAL BANQUE",
  "society_id": 1,
  "start_date": "20230810",
  "owner": "SOCIETE TEST",
  "banking_integration": true,
  "company_name": "SOCIETE TEST",
  "rib_label": "BNP",
  "iban": "FR38 1756 9000 XXXX XX23 2686 L18",
  "bic": "ABCDFRPP",
  "is_default": true,
  "shared_iban_needing_banking_integration": []
}
```

La route attend un body au format JSON composé de propriétés de l'interface suivante :

Interface TypeScript RIB

```ts
export interface RIB {
  banking_integration: boolean,
  bic: string,
  diary_id: number,
  iban: string,
  is_default: true,
  owner: string,
  rib_id: number,
  rib_label: string,
  start_date: string
}
```

Voici quelques détails sur les propriétés necessaires :

- `banking_integration` : Afin de récupérer les écritures bancaires, le booléen `true` est à insérer en valeur.
- `diary_id` : Il s'agit de l'id du journal de type `banque` auquel vous souhaitez lier le RIB/IBAN. Pour récupérer la liste des journaux du dossier comptable, vous pouvez consulter cette [page](./journaux.md).
- `is_default` : permet de paramétrer le RIB par defaut si plusieurs sont ajoutés au dossier.
- `owner` : Il s'agit du titulaire du compte bancaire. (généralement la société)
- `start_date` : la date d'activation du RIB dans le dossier, attendue au format "YYYY-MM-DD".
- `rib_id` : L'id du RIB que vous souhaitez modifier. Pour récupérer la liste des RIB/IBAN du dossier comptable, vous pouvez consulter cette [page](./RIB.md).

## Supprimer un RIB/IBAN

Pour supprimer un RIB/IBAN, l'API partenaire met à votre disposition la route https://api.myunisoft.fr/api/v1/rib.

```bash
curl --location --request DELETE 'https://api.myunisoft.fr/api/v1/rib' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Society-id: 1;' \
--data '{
    "rib_id": [
        10662
    ]
}'
```

La requête executée avec succès vous retournera une réponse au format JSON accompagné d'un code `200`.

La réponse obtenue sera la liste des RIB/IBAN **actualisée** du dossier comptable. (Dans notre exemple, le dossier n'en a plus aucun)

Exemple de retour JSON de l'API

```json
{
  "list_rib": [],
  "shared_iban_needing_banking_integration": []
}
```

La route attend un body au format JSON composé de propriétés de l'interface suivante :

Interface TypeScript RIB

```ts
export interface RIB {
  "rib_id": number[]
}
```

- `rib_id` : un tableau d'IDs du/des RIB que vous souhaitez supprimer. Pour récupérer la liste des RIB/IBAN du dossier comptable, vous pouvez consulter cette [page](./RIB.md).
