---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Récupération des dossiers de révision et des modèles de dossier

Pour exécuter certaines requêtes, vous aurez besoin de renseigner en paramètre le `dossier_revision_id` ou l'`id_review_model`.

Ce guide va vous accompagner pour récupérer la liste des `dossiers de révision` et celle des `modèles de dossiers de révision` d'une société.

## Récupérer la liste des dossiers de révisions d'une société (dossier)

### API

La route https://api.myunisoft.fr/api/v1/dadp/dossier_revision_list permet de récupérer cette liste avec l'API partenaires.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/dadp/dossier_revision_list' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
{
  "dossier_revision_list": [
    {
      "type": {
        "id": 2,
        "code": "BIL",
        "label": "Bilan"
      },
      "closed": null,
      "end_date": "2024-12-31",
      "exercise": "N+1",
      "locked_by": null,
      "start_date": "2024-01-01",
      "id_period_1": null,
      "id_period_2": null,
      "visa_expert": {
        "right": "FULL",
        "validate_visa": false,
        "validate_visa_by": null,
        "unvalidate_visa_by": null,
        "validate_visa_date": null,
        "unvalidate_visa_date": null
      },
      "review_model": {
        "label": "Modèle Standard Myunisoft",
        "modified_by": "MyUniSoft",
        "id_review_model": 1,
        "last_modify_date": "2022-07-11T21:00:01"
      },
      "id_dossier_revision": 109913
    },
    // ...
  ]
}
```

</details>

La valeur de la propriété `id_dossier_revision` (de type number) est celle à récupérer.

## Récupérer la liste des modèles de dossiers de révisions d'une société (dossier)

### API

La route https://api.myunisoft.fr/api/v1/dadp/dossier_revision/models permet de récupérer cette liste avec l'API partenaires.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/dadp/dossier_revision/models' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
[
  {
    "code": "TEST",
    "close": false,
    "label": "Dossier de révision - test",
    "cree_par": "Antoine Dupont",
    "myun_model": false,
    "create_date": "2024-07-05T10:10:38.680461",
    "modifie_par": "Antoine Dupont",
    "id_pp_create": 100,
    "id_review_model": 10,
    "last_modify_date": "2024-07-22T17:05:24"
  }
  // ...
]
```

</details>

La valeur de la propriété `id_review_model` (de type number) est celle à récupérer.

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
