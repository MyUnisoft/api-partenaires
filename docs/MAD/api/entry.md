---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next:
  text: Écriture et Mouvements (Spec)
  link: MAD/specs/v1.0.0/entries.md
---

# Récupérer une écriture et ses mouvements

L'API d'export ci-dessous vous permettra de récupérer une écriture à partir d'un ID, qui peut être :

- L'identifiant de l'écriture MyUnisoft (**producerId**).
- Le numéro de la facture (**invoiceNumber**).
- L'identifiant du partenaire (**additionalProducerProperties.partnerMetadata.partnerId**).

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/mad/entry?id=1&version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string). 

| nom | description | obligatoire |
| --- | --- | :---: |
| version | version du format | ✔️ |
| id | producerId de l'écriture, numéro de la facture ou identifiant du partenaire | ✔️ |
| draft | Si présent, la recherche se limitera exclusivement aux écritures en attente de validation | ❌ |
| comment | Ajoute les commentaires liés à l'écriture | ❌ | ❌ |

> [!IMPORTANT]
> 🔹 Accès cabinet 
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/entries.md).

> [!IMPORTANT]
> Le retour de l'API correspond à l'écriture (ce n'est pas un tableau).
> En cas d'absence de correspondance (aucun résultat trouvé), l'API renverra un `statusCode` avec pour valeur `404`.

## 💬 Consulter les écritures sur l'interface MyUnisoft

Voir [Export des écritures et mouvements](./entries.md#💬-consulter-les-ecritures-sur-l-interface-myunisoft)
