---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Création et mise à jour d'un compte EDI

Ce guide va vous accompagner dans la création et la mise à jour des comptes d'envoi EDI, afin de provisionner et mettre à jour automatiquement leurs informations lors de la création d'un dossier via l'API.

Pour récupérer la liste des comptes EDI existants d'un dossier, consultez le guide [Récupérer les comptes d'envoi EDI d'un dossier](./compte_edi.md).

## API

### Création d'un compte EDI

La route <https://api.myunisoft.fr/api/v1/edi_account> permet de créer un compte EDI.

```bash
curl --location \
--request POST 'https://api.myunisoft.fr/api/v1/edi_account' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--data '{
  "id_society_declarant": 12345,
  "id_portail_edi": 42,
  "login": "mon_login_edi",
  "password": "SuperSecretPassword123!",
  "enabled": true,
  "is_default": true
}'
```

### Mise à jour d'un compte EDI

La route <https://api.myunisoft.fr/api/v1/edi_account/{edi_account_id}> permet de mettre à jour un compte EDI existant.

> [!IMPORTANT]
> L'identifiant du compte EDI (`edi_account_id`) doit être passé en **paramètre d'URL**.

```bash
curl --location \
--request PUT 'https://api.myunisoft.fr/api/v1/edi_account/1' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--data '{
  "id_society_declarant": 12345,
  "id_portail_edi": 42,
  "login": "mon_login_edi",
  "password": "SuperSecretPassword123!",
  "enabled": true,
  "is_default": true
}'
```

## Schéma du body (payload)

Les deux routes (`POST` et `PUT`) attendent un body au format JSON composé des propriétés suivantes :

<details class="details custom-block"><summary>Définition TypeScript d'un compte EDI</summary>

```ts
interface CompteEDI {
  id_society_declarant: number | null,
  id_portail_edi: number,
  login: string,
  password: string,
  enabled: boolean,
  is_default: boolean
}
```

</details>

<br>

| Propriété | Type | Description |
| --- | --- | --- |
| `id_society_declarant` | `number` \| `null` | Id de l'entreprise déclarante, ou `null` pour rattacher le compte au cabinet. |
| `id_portail_edi` | `number` | Id du portail EDI. La liste est récupérable via la route `GET /edi_portail`. |
| `login` | `string` | Identifiant du compte. |
| `password` | `string` | Mot de passe du compte. |
| `enabled` | `boolean` | Statut d'activation du compte. |
| `is_default` | `boolean` | Indique si le compte est défini par défaut. |

## Règles de gestion

> [!NOTE]
> **Unicité du compte par défaut** : un seul compte EDI peut être défini par défaut. Si le paramètre `is_default` est envoyé à `true`, l'API se charge automatiquement de décocher l'ancien compte qui était par défaut (comportement géré par la route Windev).

> [!IMPORTANT]
> **Scénario Entreprise vs Scénario Cabinet** :
> - Pour associer le compte à une **entreprise**, `id_society_declarant` doit contenir l'id de l'entreprise.
> - Pour associer le compte au **cabinet**, `id_society_declarant` doit explicitement avoir la valeur `null`.

### Exemple de payload — Scénario Entreprise

```json
{
  "id_society_declarant": 12345,
  "id_portail_edi": 42,
  "login": "mon_login_edi",
  "password": "SuperSecretPassword123!",
  "enabled": true,
  "is_default": true
}
```

### Exemple de payload — Scénario Cabinet

```json
{
  "id_society_declarant": null,
  "id_portail_edi": 42,
  "login": "login_cabinet_edi",
  "password": "SuperSecretPassword123!",
  "enabled": true,
  "is_default": false
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
