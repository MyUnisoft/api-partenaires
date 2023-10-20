<span id="readme-top"></span>

# Comprendre les informations complémentaires d'un compte client ou fournisseur

> [!IMPORTANT]
> Nous vous invitons préalablement à lire le guide [Récupérer et travailler avec le plan comptable.](./plan_comptable.md)

Ce guide a pour objectif de vous aider dans la récupération et la compréhension des informations complémentaires attachées aux comptes du plan comptable (principalement les comptes clients et fournisseurs).

Dans MyUnisoft le plan comptable est accessible à partir du menu: `Paramètres` > `Tenue` > `Plan comptable`.

![](../../../images/plan_comptable.PNG)

Sélectionner par exemple un compte fournisseur et éditez-le (un pop-up devrait apparaitre).

![](../../../images/fiche_compte.PNG)

Vous n'avez plus qu'à accéder au second onglet "Info. complémentaires".

![](../../../images/fiche_compte_complementaire.PNG)

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

## API

Ces informations pourront être récupérées au sein de la clé **complementary_informations** retourner par la route `https://api.myunisoft.fr/api/v1/account?mode=2`.

```json
{
  "account_id": 990,
  "account_number": "4041700000",
  "label": "FOURNISSEURS IMMO.",
  "solde": 0,
  "sens": "",
  "comment": "",
  "intraco": false,
  "btp_autoliquidation": false,
  "presta": false,
  "exoneration": false,
  "das_2": false,
  "closed": false,
  "blocked": false,
  "vat_param": null,
  "counterpart_account": null,
  "array_counterpart_account": null,
  "complementary_informations": {
    "id_info_compte_tiers": 10,
    // Corresponds à DIRIGEANT dans l'interface.
    "person_in_charge": "Cyril MANDRILLY",
    "address_number": "3",
    "indice_repetition": null,
    "address": "GAI SEJOUR",
    "address_complement": null,
    "postal_code": "91700",
    "city": "SAINTE GENEVIEVE DES BOIS",
    "siren": "840143275",
    "name": "MY UNISOFT",
    "contact_lastname": "GENTILHOMME",
    "contact_firstname": "Thomas",
    "function": "Développeur API",
    "tel": "+33655547180",
    "email": "gentilhomme.thomas@gmail.com",
    "comment": null,
    "profession": null,

    // firstname et lastname sont des informations récupérés sur des documents des impôts
    "firstname": null,
    "lastname": null,
    "type_info_compte_tiers": null,
    "iban_list": [
      {
        "id_iban_compte_tiers": 11,
        "iban": "",
        "bic": "",
        "etablissement": "",
        "rum_date_signature": null
      }
    ],
    "way_type": {
      "way_type_id": 9,
      "label": "Rue"
    },
    "amount_type_paid": null,
    "ape": {
      "id": 534,
      "value": "5829C",
      "label": "5829C-Édition de logiciels applicatifs",
      "info": "Édition de logiciels applicatifs"
    },
    "payment_deadline": {
      "id_payment_deadline": 3,
      "label": "30 jours fin de mois",
      "number_of_days": 30,
      "end_month": true,
      "day_number": null
    },
    "id_payment_deadline": 3,
    "payment_type_id": 13,
    "payment_type": {
      "payment_type_id": 13,
      "label": "Carte bleue",
      "code": "CB"
    }
  }
}
```

<details><summary>interface TypeScript pour la clé complementary_informations</summary>

```ts
interface ComplementaryInformations {
  id_info_compte_tiers: number;
  person_in_charge: string;
  address_number: string;
  indice_repetition: string;
  address: string;
  address_complement: string;
  postal_code: string;
  city: string;
  siren: string;
  name: string;
  contact_lastname: string;
  contact_firstname: string;
  function: string;
  tel: string;
  email: string;
  comment: string;
  profession: string;
  firstname: string;
  lastname: string;
  type_info_compte_tiers: number;
  iban_list: Iban[];
  way_type: WayType;
  amount_type_paid: AmountTypePaid;
  ape: Ape;
  id_payment_deadline: number;
  payment_deadline: PaymentDeadline;
  payment_type_id: number;
  payment_type: PaymentType;
}

interface Iban {
  id_iban_compte_tiers: number;
  iban: string;
  bic: string;
  etablissement: string;
  rum_date_signature?: string;
}

interface PaymentType {
  payment_type_id: number;
  label: string;
  code: string;
}

interface PaymentDeadline {
  id_payment_deadline: number;
  label: string;
  number_of_days: number;
  end_month: boolean;
  day_number: number | null;
}

interface Ape {
  id: number;
  value: string;
  label: string;
  info: string;
}

interface WayType {
  way_type_id: number;
  label: string;
}

interface AmountTypePaid {
  id_amount_type_paid: number;
  label: string;
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

---

⬅️ [README](../../../../README.md)
