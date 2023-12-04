# Récupération et/ou création d'un compte (upsert)
Il est aussi possible de récupérer unitairement un compte (et s'il n'existe pas il **sera créé**).

C'est une route plutôt pratique si vous souhaitez faire un import dans le format JSON (car celui-ci ne gère pas la création automatique des comptes).

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

> [!NOTE]
> Le compte de contrepartie lorsqu'il est défini à la même structure qu'un compte normal (donc avec la propriété account_id, account_number et label).

## Liste des potentielles erreurs clientes

L'intégralité des codes erreurs est documentée [ici](../../../erreurs.md)

### COMPTE6
Le premier caractère du numéro de compte `account_number` doit être compris entre 1 et 9. Les comptes commençant par des lettres ne sont pas autorisés, par exemple: `AB411` sera rejeté.

### COMPTE7
Le numéro de compte `account_number` saisi ne doit pas dépasser **20 caractères**.

## Création du compte avec des informations complémentaires
Il est possible de créer le compte avec des informations complémentaires. Voici une interface pouvant vous aider sur les clés possibles:

```ts
interface UpsertAccount {
  account_id: number;
  account_number: string;
  label: string;
  provider?: boolean;
  intraco_account?: boolean;
  btp_autoliquidation?: boolean;
  exoneration?: boolean;
  vat_param_id?: number;
  counterpart_account_id?: number;
  das_2?: boolean;
  complementary_info?: ComplementaryInfo;
}
​
interface ComplementaryInfo {
  profession?: string;
  siren?: string;
  id_ape?: number;
  person_in_charge?: string;
  name?: string;
  contact_lastname?: string;
  contact_firstname?: string;
  function?: string;
  tel?: string;
  email?: string;
  iban_list?: Iban[];
  id_payment_deadline?: number;
  payment_type_id?: number;
  address_number?: string;
  repetition_index?: string;
  way_type_id?: number;
  address?: string;
  address_complement?: string;
  postal_code?: string;
  city?: string;
  country?: string;
}
​
interface Iban {
  id_iban_compte_tiers: number;
  iban: string;
  bic: string;
  etablissement: string;
  rum_date_signature?: null;
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

---

⬅️ [README](../../../../README.md)
