---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Archiver un dossier de production (société)

Cette page va vous accompagner dans l'opération d'archivage d'une société (dossier).

Dans MyUnisoft, il est possible avec un **profil administrateur** d'effectuer cette opération depuis : `Ecosystème` > `CRM` > `Entreprises`.

![Aperçu du menu écosystème CRM entreprise](../../images/ecosysteme_crm_entreprises.png)

Vous obtenez ainsi la liste des dossiers. Il suffit de cliquer sur la corbeille pour procéder à l'archivage du dossier.

![Aperçu de la liste des entreprises](../../images/liste_entreprises.png)

> [!IMPORTANT]
> Pour **désarchiver** un dossier, il est **obligatoire de contacter notre support technique** qui pourra effectuer l'opération.

## API

La route <https://api.myunisoft.fr/api/v1/society> permet d'archiver un dossier de production avec l'API partenaires.

```bash
curl --location --request DELETE 'https://api.myunisoft.fr/api/v1/society' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1;'
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** pour cibler le dossier que vous souhaitez archiver.

L'API, lorsque l'opération est accomplie avec succès, renverra un status code `200`  accompagné du retour JSON suivant :

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
{
    "code": "Success",
    "message": ""
}
```

</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
