---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Récupérer la liste des centres de gestion

Ce guide va vous accompagner dans la récupération de la liste des centres de gestion.

Celle-ci est notamment utile lors du paramétrage du dossier fiscal d'une société.

## API

La route <https://api.myunisoft.fr/api/v1/society/gestion_center> permet de récupérer la liste des centres de gestion (`gestion_center`).

> [!IMPORTANT]
> 🔹 Accès cabinet : L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/society/gestion_center' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
[
  {
    "center_gestion_id": 1,
    "name": "C.G.A DE BIGORRE",
    "address_number": "38",
    "repetition_indice":"",
    "address": "LAMARTINE",
    "address_complement": "",
    "postal_code": "65000",
    "city": "TARBES",
    "siret": "31442032400035",
    "num_agrement": "",
    "road_type_id": 9
  },
  {
    "center_gestion_id": 2,
    "name": "C.I.G.A",
    "address_number": "4",
    "repetition_indice":"",
    "address": "GEORGES POMPIDOU-BP",
    "address_complement": "",
    "postal_code": "26060",
    "city": "CAEN",
    "siret": "30974294800040",
    "num_agrement": "",
    "road_type_id": 3
  },
  {
    "center_gestion_id": 4,
    "name": "TERRA GESTION VAULX LE PENIL",
    "address_number": "259",
    "repetition_indice":"",
    "address": "Pierre et Marie Curie",
    "address_complement": "",
    "postal_code": "77000",
    "city": "VAULX LE PENIL",
    "siret": "30889553100058",
    "num_agrement": "101770",
    "road_type_id": 9
  },
  // ...
]
```

</details>

<details class="details custom-block"><summary>Définition TypeScript d'un centre de gestion</summary>

```ts
interface ManagementCenter {
  center_gestion_id: number,
  name: string,
  address_number: string,
  repetition_indice:string,
  address: string,
  address_complement: string,
  postal_code: string,
  city: string,
  siret: string,
  num_agrement: string,
  road_type_id: number
}
```

</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
