---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Récupérer la prochaine valeur de lettrage d'un compte

Dans MyUnisoft, pour vous permettre de lettrer des mouvements comptables par le biais de l'API, vous devrez renseigner entre autres la propriété **lettering**.
La valeur de cette propriété est automatiquement calculée via le endpoint `/next_lettering`.

Ce guide va vous accompagner pour vous peremettre de récupérer la prochaine valeur de lettrage d'un compte en exploitant ce endpoint.

## API

La route https://api.myunisoft.fr/api/v1/account/next_lettering permet d'obtenir la prochaine valeur de lettrage d'un compte avec l'API partenaires.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/account/next_lettering?account_id=24208754&partial=false' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

Il sera nécessaire de renseigner les paramères de requête suivants : 

| paramètre | decription |
| --- | --- |
| `account_id` | l'identifiant du compte relatif aux lignes d'écritures que vous souhaitez lettrer.<br> Pour récupérer le liste des comptes du dossier [Récupérer la liste des comptes du dossier](../../../MAD/api/account.md) |
| `partial` | ce paramètre permet de spécifier si vous souhaitez un lettrage complet `partial = false` (lorsque la balance "débit/crédit" des écritures est soldée), ou un lettrage partiel `partial = true` (lorsque la balance "débit/crédit" des écritures n'est pas soldée. Exemple : une facture réglée par échéancier) |

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
{
    "next_lettering": "AAA"
}
```

</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
