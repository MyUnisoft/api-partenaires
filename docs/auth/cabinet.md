# 🔹 Authentification avec accès cabinet

Il est préalablement nécessaire de récupérer un jeton Utilisateur pour pouvoir générer une clé sur l'API partenaires. Nous vous invitons à suivre [le guide suivant](./user.md) pour récupérer le jeton.

## Génération de la clé (API Token)

Il suffit de requêter la route **/api/v1/firm/token** en POST.

> ⚠️ Pensez à ajouter le User Token dans le header Authorization (Bearer token).

Si tout se passe comme  prévu vous devriez recevoir un payload comme suit avec un status code 200. 

```json
{
  "token": "{{JWT-TOKEN-HERE}}"
}
```

La clé token est un jeton JWT que vous allez devoir utiliser pour requêter les routes exposées par l’API. Nous parlerons “d’API Token” quand il est question de l’utilisation de celui-ci (A ne pas confondre avec le User token).

**Ce token a une durée de vie de 10 minutes**.
