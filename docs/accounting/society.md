<span id="readme-top"></span>

# Récupérer les sociétés (dossiers)
Ce guide a pour objectif de vous aider dans la récupération des dossiers d'un cabinet (entités/schémas).

Le guide se divise en deux parties:
1. Récupération d'un dossier lié à un 🔸 accès société.
2. Récupération d'un ou plusieurs dossiers avec un 🔹 accès cabinet.

## 🔸 **Accès société**
Par définition l'accès société vous permet de récupérer les informations du dossier (société) lié à votre token uniquement.

La route `https://api.myunisoft.fr/api/v1/society` permet de récupérer les informations de cette société.

```bash
curl --location --request GET 'https://api.myunisoft.fr/api/v1/society' \
--header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}' \
--header 'Authorization: {{TOKEN}}'
```

<details>
  <summary markdown="span">Retour JSON de l'API</summary>

  ```json
  {
    "ape": {
        "id": 385,
        "label": "4618Z",
        "value": "Intermédiaires spécialisés dans le commerce d'autres produits spécifiques"
    },
    "register": null,
    "legal_form": {
        "id": 1,
        "label": "SARL",
        "code": "SARL"
    },
    "road_type": {
        "id": 43,
        "label": "Rond Point",
        "value": "Rond Point"
    },
    "owner_company": {
        "id": 394,
        "label": "CABINET TEST TOVO IV",
        "value": "CABINET TEST TOVO IV"
    },
    "bilan": null,
    "impot": null,
    "vat_regime": {
        "id": 8,
        "label": "Réel Normal Trimestrielle",
        "value": "T"
    },
    "coordonnee": null,
    "footer": null,
    "city": {
        "label": "PARIS 8E ARRONDISSEMENT",
        "value": "PARIS 8E ARRONDISSEMENT"
    },
    "gescom": {
        "label": "Evoliz Banana Split",
        "code": "EBAN",
        "nb_user_required": 0
    },
    "comment": "",
    "society_id": 2123,
    "name": "00001_TEST_DOSSIER_TAHINA",
    "siret": "50112156000013",
    "activity": "",
    "rof_tva": "",
    "rof_tdfc": "IS1",
    "rof_cfe": "",
    "rof_cvae": "",
    "address_number": "12",
    "id_accountant": 4654,
    "id_rm": 4479,
    "id_collab": null,
    "accountant": {
        "id_ex": 4654,
        "prenom": "Nicolas",
        "nom": "Hallaert"
    },
    "rm": {
        "id_ex": 4479,
        "prenom": "Quentin",
        "nom": "Lepateley"
    },
    "collab": null,
    "secured": false,
    "analytics": false,
    "enable_quantity": false,
    "folder_reference": "minhtestdaicacaaaaaaaaaaaa",
    "adherent_code": "",
    "formule_code": "BUSI",
    "safe_status": true,
    "logo": null,
    "address_bis": null,
    "street_name": "CHAMPS ELYSEES M  DASSAULT",
    "complement": "",
    "postal_code": "75008",
    "country": "FRANCE",
    "address": "12 Rond Point CHAMPS ELYSEES M  DASSAULT 75008 PARIS 8E ARRONDISSEMENT FRANCE",
    "id_centre_gestion": 0,
    "code_sheet_group": "ISBICN",
    "registration_date": "2007-11-17",
    "close_entries_VAT": false,
    "id_type_company": 1,
    "id_parent_society": 0,
    "secondary_establishments": null,
    "date_engage_letter": ""
  }
  ```
</details>

---

## 🔹 **Accès cabinet**
L'accès cabinet vous donne accès à l'intégralité des dossiers (sociétés) d'un cabinet.

Voici la liste des différents paramètres disponibles:
| PARAM | DESCRIPTION |
| --- | --- |
| sort | Permet de trier les dossiers selon le paramètre selectionné |
| siret | Accepte en argument le SIRET (14 caractères) de la société recherchée ou le SIREN (9 caractères). |
| q | Recherche les dossiers dont le nom contient la valeur passée |

## Récupérer tous les dossiers (sociétés)
La route `https://api.myunisoft.fr/api/v1/society` permet de récupérer les informations de ces dossiers.

```bash
curl --location --request GET 'https://api.myunisoft.fr/api/v1/society' \
--header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}' \
--header 'Authorization: {{TOKEN}}'
```

<details>
  <summary markdown="span">Retour JSON de l'API</summary>

  ```json
  {
    "row_numbers": 6,
    "pages_number": null,
    "society_array": [
      {
        "ape": "6201Z",
        "city": "ARDILLIERES",
        "name": "3A2ID",
        "step": "",
        "insee": "17018",
        "siret": "838006955",
        "status": "",
        "address": "6 Rue DU RUISSEAU 17290 ARDILLIERES FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": true,
        "analytics": false,
        "member_id": 2,
        "road_type": "Rue",
        "complement": null,
        "coordonnee": [],
        "society_id": 60,
        "address_bis": null,
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "17290",
        "safe_status": true,
        "street_name": "DU RUISSEAU",
        "address_number": "6",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "6920Z",
        "city": "PARIS 20E ARRONDISSEMENT",
        "name": "XG EXPERTISE",
        "step": "",
        "insee": null,
        "siret": "501674212",
        "status": "",
        "address": "36 Rue ETIENNE MAREY 75020 PARIS 20E ARRONDISSEMENT FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": false,
        "analytics": false,
        "member_id": 2,
        "road_type": "Rue",
        "complement": null,
        "coordonnee": [],
        "society_id": 9,
        "address_bis": null,
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "75020",
        "safe_status": true,
        "street_name": "ETIENNE MAREY",
        "address_number": "36",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "4321A",
        "city": "FERDRUPT",
        "name": "MANGEL ELECTRICITE",
        "step": "",
        "insee": "88170",
        "siret": "49401289100011",
        "status": "",
        "address": "22 B DE XONRUPT  88360 FERDRUPT FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": false,
        "analytics": true,
        "member_id": 1,
        "road_type": null,
        "complement": "",
        "coordonnee": [],
        "society_id": 5,
        "address_bis": "B",
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "88360",
        "safe_status": true,
        "street_name": "DE XONRUPT",
        "address_number": "22",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "4776Z",
        "city": "SAINTE-GENEVIEVE-DES-BOIS",
        "name": "AMOUR DE FLEURS",
        "step": "",
        "insee": "91549",
        "siret": "794251157",
        "status": "",
        "address": "152  Avenue GABRIEL PERI  91700 SAINTE-GENEVIEVE-DES-BOIS France",
        "capital": 0,
        "country": "France",
        "secured": true,
        "analytics": false,
        "member_id": 1,
        "road_type": "Avenue",
        "complement": "",
        "coordonnee": [],
        "society_id": 4,
        "address_bis": "",
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "91700",
        "safe_status": true,
        "street_name": "GABRIEL PERI",
        "address_number": "152",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": null,
        "city": "",
        "name": "Evoliz démonstration",
        "step": "",
        "insee": null,
        "siret": null,
        "status": "",
        "address": " France",
        "capital": 0,
        "country": "France",
        "secured": false,
        "analytics": true,
        "member_id": 1,
        "road_type": null,
        "complement": null,
        "coordonnee": [],
        "society_id": 2,
        "address_bis": null,
        "companyType": "",
        "mail_liasse": null,
        "postal_code": null,
        "safe_status": true,
        "street_name": null,
        "address_number": null,
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "6201Z",
        "city": "LA GARDE",
        "name": "TEST OGA",
        "step": "",
        "insee": "83062",
        "siret": "52251323300018",
        "status": "",
        "address": "176 Avenue JOSPEH LOUIS LAMBOT 83130 LA GARDE FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": false,
        "analytics": true,
        "member_id": 1,
        "road_type": "Avenue",
        "complement": null,
        "coordonnee": [],
        "society_id": 1,
        "address_bis": null,
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "83130",
        "safe_status": true,
        "street_name": "JOSPEH LOUIS LAMBOT",
        "address_number": "176",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      }
    ]
  }
  ```
</details>

### Plusieurs options sont disponibles:

<details>
  <summary>appliquer un filtre sur le nom des dossiers.</summary>
  
  | PARAM | DESCRIPTION |
  | --- | --- |
  | q | Recherche les dossiers dont le nom contient la valeur passée |

  ```bash
  curl --location --request GET 'https://api.myunisoft.fr/api/v1/society?q=MyUni' \
  --header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}' \
  --header 'Authorization: {{TOKEN}}' \
  ```

  ```json
  {
    "row_numbers": 3,
    "pages_number": null,
    "society_array": [
      {
        "ape": "6920Z",
        "city": "PARIS 20E ARRONDISSEMENT",
        "name": "MyUnisoft",
        "step": "",
        "insee": null,
        "siret": "501674212",
        "status": "",
        "address": "36 Rue ETIENNE MAREY 75020 PARIS 20E ARRONDISSEMENT FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": false,
        "analytics": false,
        "member_id": 2,
        "road_type": "Rue",
        "complement": null,
        "coordonnee": [],
        "society_id": 9,
        "address_bis": null,
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "75020",
        "safe_status": true,
        "street_name": "ETIENNE MAREY",
        "address_number": "36",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "4321A",
        "city": "FERDRUPT",
        "name": "MyUniforme",
        "step": "",
        "insee": "88170",
        "siret": "49401289100011",
        "status": "",
        "address": "22 B DE XONRUPT  88360 FERDRUPT FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": false,
        "analytics": true,
        "member_id": 1,
        "road_type": null,
        "complement": "",
        "coordonnee": [],
        "society_id": 5,
        "address_bis": "B",
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "88360",
        "safe_status": true,
        "street_name": "DE XONRUPT",
        "address_number": "22",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "4776Z",
        "city": "SAINTE-GENEVIEVE-DES-BOIS",
        "name": "MyUnicode",
        "step": "",
        "insee": "91549",
        "siret": "794251157",
        "status": "",
        "address": "152  Avenue GABRIEL PERI  91700 SAINTE-GENEVIEVE-DES-BOIS France",
        "capital": 0,
        "country": "France",
        "secured": true,
        "analytics": false,
        "member_id": 1,
        "road_type": "Avenue",
        "complement": "",
        "coordonnee": [],
        "society_id": 4,
        "address_bis": "",
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "91700",
        "safe_status": true,
        "street_name": "GABRIEL PERI",
        "address_number": "152",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      }
    ]
  }
  ```
</details>

<details>
  <summary>trier les dossiers.</summary>
  
  | PARAM | DESCRIPTION |
  | --- | --- |
  | sort | Permet de trier les dossiers selon le paramètre selectionné |

  Liste des paramètres:
  - name
  - city
  - ape
  - siret
  - status
  - step
  - folder_reference

  Directions:
  - asc (croissant)
  - desc (décroissant)

  ```bash
  curl --location --request GET 'https://api.myunisoft.fr/api/v1/society?sort={"column":"name","direction":"asc"}' \
  --header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}' \
  --header 'Authorization: {{TOKEN}}' \
  ```

  ```json
  {
    "row_numbers": 3,
    "pages_number": null,
    "society_array": [
      {
        "ape": "6920Z",
        "city": "PARIS 20E ARRONDISSEMENT",
        "name": "AAA",
        "step": "",
        "insee": null,
        "siret": "501674212",
        "status": "",
        "address": "36 Rue ETIENNE MAREY 75020 PARIS 20E ARRONDISSEMENT FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": false,
        "analytics": false,
        "member_id": 2,
        "road_type": "Rue",
        "complement": null,
        "coordonnee": [],
        "society_id": 9,
        "address_bis": null,
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "75020",
        "safe_status": true,
        "street_name": "ETIENNE MAREY",
        "address_number": "36",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "4321A",
        "city": "FERDRUPT",
        "name": "BBB",
        "step": "",
        "insee": "88170",
        "siret": "49401289100011",
        "status": "",
        "address": "22 B DE XONRUPT  88360 FERDRUPT FRANCE",
        "capital": 0,
        "country": "FRANCE",
        "secured": false,
        "analytics": true,
        "member_id": 1,
        "road_type": null,
        "complement": "",
        "coordonnee": [],
        "society_id": 5,
        "address_bis": "B",
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "88360",
        "safe_status": true,
        "street_name": "DE XONRUPT",
        "address_number": "22",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      },
      {
        "ape": "4776Z",
        "city": "SAINTE-GENEVIEVE-DES-BOIS",
        "name": "CCC",
        "step": "",
        "insee": "91549",
        "siret": "794251157",
        "status": "",
        "address": "152  Avenue GABRIEL PERI  91700 SAINTE-GENEVIEVE-DES-BOIS France",
        "capital": 0,
        "country": "France",
        "secured": true,
        "analytics": false,
        "member_id": 1,
        "road_type": "Avenue",
        "complement": "",
        "coordonnee": [],
        "society_id": 4,
        "address_bis": "",
        "companyType": "",
        "mail_liasse": null,
        "postal_code": "91700",
        "safe_status": true,
        "street_name": "GABRIEL PERI",
        "address_number": "152",
        "enable_quantity": false,
        "id_type_company": 1,
        "folder_reference": null
      }
    ]
  }
  ```
</details>

<br>

## Récupérer un dossier (société)

Il est possible de récupérer les informations d'un dossier spécifique grâce:
<details>
  <summary>à son identifiant.</summary>

  **Récupération par ID**

  Ajoutez le header `society-id` ayant pour valeur l'ID du dossier voulu.
  ```bash
  curl --location --request GET 'https://api.myunisoft.fr/api/v1/society' \
  --header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}' \
  --header 'Authorization: {{TOKEN}}' \
  --header 'society-id: 2123'
  ```

  > Le retour JSON de l'API a la même structure que le retour JSON avec accès société.
</details>

<details>
  <summary>au SIRET / SIREN.</summary>

  **Récupération par SIRET / SIREN**

  Ajoutez le paramètre `siret` ayant pour valeur [le SIRET ou le SIREN](https://www.economie.gouv.fr/entreprises/numeros-siren-siret) de la société recherchée à la ["query string"](https://en.wikipedia.org/wiki/Query_string).

  | PARAM | DESCRIPTION |
  | --- | --- |
  | siret | Accepte en argument le SIRET (14 caractères) de la société recherchée ou le SIREN (9 caractères). |

  ```bash
  curl --location --request GET 'https://api.myunisoft.fr/api/v1/society?siret=50112156000013' \
  --header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}' \
  --header 'Authorization: {{TOKEN}}'
  ```

  > Le retour JSON de l'API a la même structure que le retour JSON avec accès société.
</details>

## Identifier un dossier (une société) par référence

> [!NOTE]
> 🔹 Uniquement possible avec un accès cabinet

Il est possible de rechercher/identifier un dossier de production par sa référence et de récupérer le nom, Siret et id de la société.

```bash
curl --location --request GET 'https://api.myunisoft.fr/api/v1/society/search?reference=ABC' \
--header 'X-Third-Party-Secret: {{X-Third-Party-Secret}}' \
--header 'Authorization: {{TOKEN}}'
```

La route retournera un JSON semblable à celui-ci

```json
{
  "name": "Test Agz",
  "siret": "849457791",
  "society_id": 58
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
