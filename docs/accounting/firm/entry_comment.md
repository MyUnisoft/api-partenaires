---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Ajouter, modifier, supprimer un commentaire à une écriture comptable

## Ajout d'un commentaire à une écriture comptable

Dans MyUnisoft, les écritures comptables sont composées de plusieurs élèments dont les **commentaires**.

Pour ajouter un commentaire à une écriture comptable, vous pouvez utiliser la route : `https://api.myunisoft.fr/api/v1/entry/comment`.

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** obligatoire.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/entry/comment' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--data '{
  "location": "ENTRIES",
  "entry_id": 27436252,
  "comment": "Génial !"
}'
```

### Paramètres d'ajout d'un commentaire

La route attend un body JSON contenant les propriétés suivantes :

| LABEL | TYPE | REQUIS | DESCRIPTION |
|:---------------:|:---------------:|:---------------:|---------------|
| location | "ENTRIES" | ✔️ | cible le type parent auquel le commentaire est rattaché |
| entry_id | number | ✔️ | L'id de l'écriture auquel le commentaire est rattaché<br>Pour récupérer les écritures d'un dossier comptable vous pouvez utiliser MAD [Get entries](../../MAD/api/entries.md) |
| comment | string | ✔️ | Le commentaire que vous souhaitez ajouter |

<details class="details custom-block"><summary>Interface TypeScript Commentaire</summary>

```ts
export interface Commentaire {
  location: string;
  entry_id: number;
  comment: string;
}
```

</details>

Une fois la requête exécutée avec succès, l'API vous retournera une réponse au format JSON :

<details class="details custom-block">
  <summary markdown="span">Retour JSON de l'API</summary>

```json
[
  {
      "id": 21909,
      "body": "Génial !",
      "date": "2020-04-27T12:29:25",
      "name": "Léon S",
      "origin": null,
      "history": [],
      "initials": "LS",
      "trigram": "LSO",
      "avatarImgSrc": "<link>"
  }
]
```

</details>

## Modification d'un commentaire d'une écriture comptable

Pour modifier le commentaire d'une écriture comptable, vous pouvez utiliser la route : `https://api.myunisoft.fr/api/v1/entry/comment/:comment_id`.

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** obligatoire pour les accès cabinet.

```bash
curl --location --request PUT 'https://app.myunisoft.fr/api/v1/entry/comment/21909' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--data '{
    "comment": "Génial Modifié !",
    "entry_id": 27436252,
    "location" : "ENTRIES"
}'
```

### Paramètres de mise à jour d'un commentaire

La route attend dans le chemin une valeur pour la variable `comment_id` qui correspond à l'`id` du commentaire que vous souhaitez modifier. Pour récupérer cet `id` vous pouvez utiliser l'api MAD et son endpoint [GET comments](../../MAD/api/comments.md).

Vous devez également fournir un body JSON contenant les propriétés suivantes avec les nouvelles valeurs :

| LABEL | TYPE | REQUIS | DESCRIPTION |
|:---------------:|:---------------:|:---------------:|---------------|
| location | "ENTRIES" | ✔️ | cible le `type parent` auquel le commentaire est rattaché |
| entry_id | number | ✔️ | L'id de l'écriture auquel le commentaire est rattaché<br>Pour récupérer les écritures d'un dossier comptable vous pouvez utiliser MAD [Get entries](../../MAD/api/entries.md) |
| comment | string | ✔️ | Le nouveau commentaire destiné à remplacer l'actuel |

<details class="details custom-block"><summary>Interface TypeScript Commentaire</summary>

```ts
export interface Commentaire {
  location: string;
  entry_id: number;
  comment: string;
}
```

</details>

Une fois la requête exécutée avec succès, l'API vous retournera une réponse au format JSON :

<details class="details custom-block">
  <summary markdown="span">Retour JSON de l'API</summary>

```json
[
  {
      "id": 21910,
      "body": "Génial Modifié !",
      "date": "2025-05-20T09:33:46",
      "name": "Léon S",
      "origin": null,
      "history": [
          {
              "id": 21909,
              "body": "Génial !",
              "date": "2020-04-27T12:29:25",
              "name": "Léon S",
              "origin": null,
              "trigram": "LSO",
              "initials": "LS",
              "avatarImgSrc": "<link>"
          }
      ],
      "trigram": "LSO",
      "initials": "LS",
      "avatarImgSrc": "<link>"
  }
]
```

</details>

## Suppression d'un commentaire d'une écriture comptable

Pour supprimer le commentaire d'une écriture comptable, vous pouvez utiliser la route : `https://api.myunisoft.fr/api/v1/entry/comment/:comment_id`.

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** obligatoire pour les accès cabinet.

```bash
curl --location --request DELETE 'https://app.myunisoft.fr/api/v1/entry/comment/21909' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

### Paramètres de suppression d'un commentaire

La route attend dans le chemin une valeur pour la variable `comment_id` qui correspond à l'`id` du commentaire que vous souhaitez modifier. Pour récupérer cet `id` vous pouvez utiliser l'api MAD et son endpoint [GET comments](../../MAD/api/comments.md).

Une fois la **requête exécutée avec succès**, l'API vous retournera en réponse un **booléen** `true`.
