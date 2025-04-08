---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Récupérer la liste des établissements d'une société

Ce guide va vous permettre de récupérer la liste des établissements d'une société.

Dans MyUnisoft, pour accéder à la liste des établissements d'un dossier, vous devez consulter l'onglet `Etablissements` en passant par le module CRM : `Ecosystème` > `CRM` > `Entreprises`.

![](../../images/ecosysteme_crm_entreprises.png)

Sélectionnez le dossier de production pour lequel vous souhaitez consulter la liste des établissements.

![](../../images/liste_entreprises.png)

Vous obtenez les différents onglets de l'entreprise interrogée. Cliquez sur `Etablissements` pour accéder à celui-ci.

![](../../images/modif_etab.png)

## API

La route https://api.myunisoft.fr/api/v1/society permet de procéder à cette même opération via l'API partenaire.

> [!IMPORTANT]
> 🔹 Accès cabinet : L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/society?mode=1' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1'
--header 'Authorization: Bearer {{API_TOKEN}}'
```

L'API retournera un JSON contenant les informations d'une société. Parmi elles, la propriété `secondary_establishments` contiendra un tableau d'objets des différents établissements.

<details class="details custom-block"><summary>Exemple Partiel de retour JSON de l'API</summary>

```json
{
  "society_id": 30210,
  "name": "Société Test",
  "siret": "53051415700029",
  "rof_tva": "TVA1",
  "rof_tdfc": "IS1",
  "rof_cfe": "CFE1",
  "my_data_rh": false,
  "rof_cvae": "CVAE1",
  // ...
  "secondary_establishments": [
    {
      "city": "Marseille",
      "name": "Etablissement 1",
      "siret": "530514157",
      "country": "FRANCE",
      "road_type": "Montée",
      "society_id": 41056,
      "address_bis": null,
      "postal_code": "13008",
      "street_name": "du soleil",
      "address_comp": "B",
      "closing_date": "2023-08-10",
      "address_number": "8"
    }
  ]
}
```

</details>

<details class="details custom-block"><summary>Définition TypeScript Etablissement</summary>

```ts
interface Etablissement {
  city: string,
  name: string,
  siret: string,
  country: string,
  road_type: string,
  society_id: number,
  address_bis: string,
  postal_code: string,
  street_name: string,
  address_comp: string,
  closing_date: string,
  address_number: string
}
```

</details>
