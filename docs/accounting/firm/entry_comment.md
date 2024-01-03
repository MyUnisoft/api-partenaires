# Ajout d'un commentaire à une écriture comptable.

Dans MyUnisoft, les écritures comptables sont composées de plusieurs élèments dont les **commentaires**.

Pour ajouter ou modifier un commentaire à une écriture comptable, vous pouvez utiliser la route: `https://api.myunisoft.fr/api/v1/entry/comment`.

## Paramètres

| LABEL | TYPE | REQUIS |
|:---------------:|:---------------:|:---------------:|
| location | "ENTRIES" | ✔️ |
| society_id | number | ✔️ |
| entry_id | number | ✔️ |
| comment | string | ✔️ |

## Exemple

```bash
curl --location 'https://api.myunisoft.fr/api/v1/entry/comment' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json' \
--data '{
	"location": "ENTRIES",
  "society_id":1531,
  "entry_id": 27436252,
  "comment": "Génial !"
}'
```

<details>
  <summary markdown="span">Retour JSON de l'API</summary>

  ```json
  [
    {
        "id": 21909,
        "body": "Génial !",
        "date": "2020-04-27T12:29:25",
        "name": "Léon S",
        "history": [],
        "initials": "LS",
        "avatarImgSrc": "<link>"
    }
  ]
  ```
</details>
