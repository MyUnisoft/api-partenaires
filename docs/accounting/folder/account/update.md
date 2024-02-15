# Mise à jour complète d'un compte client ou fournisseur
Il est possible de mettre à jour un compte (mais de manière non partielle, il est donc obligatoire de renvoyer l'intégralité des informations).

```bash
curl --location --request PUT 'https://api.myunisoft.fr/api/v1/account' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "account_number": "411FOOBAR",
    "label": "FOOBAR account"
}'
```

Les champs account_id et account_number sont obligatoires (Note : account_number peut être remplacé par le label).

Ci-dessous l'interface TypeScript des champs pouvant être mis à jour;

```ts
interface UpdateAccount {
  account_id: number;
  account_number: string;
  label: string;
  analytics?: boolean;
  intraco_account?: boolean;
  btp_autoliquidation?: boolean;
  exoneration?: boolean;
  vat_param_id?: number;
  counterpart_account_id?: number;
  das_2?: boolean;
  ocr_autovalidation?: boolean;
  ocr_threshold?: number;
  provider?: boolean;
  complementary_info?: ComplementaryInfo;
}

interface ComplementaryInfo {
  name?: string;
  siren?: string;
  // API: society/ape
  id_ape?: number;
  // Établissement étranger
  is_foreign?: boolean;

  // Nom du dirigeant
  person_in_charge?: string;
  profession?: string;

  // Addresse du siège
  repetition_index: string;
  way_type_id: number;
  address: string;
  address_number: string;
  address_complement: string;
  postal_code: string;
  city: string;

  // API: country
  id_country?: number;

  // Contact principal
  contact_lastname?: string;
  contact_firstname?: string;
  function?: string;
  tel?: string;
  tel2?: string;
  email?: string;

  // Contacts secondaires
  contact_list?: Contact[];

  // Règlement
  iban_list?: Iban[];
  
  id_payment_deadline?: number;
  payment_type_id?: number;

  // Divers
  misc_referent?: string;
  misc_group?: string;
  misc_doubtful_id?: number;
  misc_language_id?: number;
  misc_archived?: boolean;
}

interface Iban {
  id?: number;
  iban: string;
  bic?: string;
  rum?: string;
}

interface Contact {
  email: string;
  lastname: string;
  firstname: string;
  tel1: string;
  tel2: string;
  function: string;
  id_contact_compte_tiers?: number | null;
  isNew?: boolean;
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

---

⬅️ [README](../../../../README.md)
