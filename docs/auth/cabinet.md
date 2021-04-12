# 🔹 Authentification avec accès cabinet

Notre service authentification possède un endpoint spécifique qui permet la génération d'un API Token spécialement conçu pour une utilisation avec accès cabinet. La durée de vie du token est de dix minutes.

## Génération de la clé (API Token)

La route (racine) pour la requête http est POST **/api/authenticate/firm**. Le body (JSON) de la requête pour l’authentification:
```json
{
    "mail": "{{mail}}",
    "password": "{{password}}"
}
```

Les champs “**password**” et “**mail**” doivent être complétés avec le compte qui vous a été fourni.

---

Vous devriez recevoir un status code `200` avec un JSON contenant la clé API Token.
```json
{
    "api_token": "{{API_TOKEN}}",
    "expiresIn": ""
}
```