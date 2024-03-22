# Export des journaux

```bash
curl --location --request GET 'https://api.myunisoft.fr/api/v1/mad/journals?version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string). 

| nom | description | obligatoire |
| --- | --- | --- |
| version | version du format | ✔️ |

> [!IMPORTANT]
> 🔹 Accès cabinet 
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/journal.md).

## 💬 Gérer les journaux sur l'interface MyUnisoft

La liste des journaux est accessible par le biais du menu: `Paramètres` > `Tenue` > `Journaux`.

![](../../docs/images/liste_journaux.PNG)

---

⬅️ [Introduction MAD](../introduction.md)
