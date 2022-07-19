# Endpoints d'accès cabinet

> Suivez [ce guide](./endpoints_accessibles.md) pour récupérer les routes disponibles.
Les routes sont documentées sur le [postman](https://docs.api.myunisoft.fr/#intro) en ligne.

Pour toutes les endpoints liées aux informations sur une société particulière, vous devez renseigner en plus l’en-tête HTTP “**society-id**”.

```bash
curl --location --request GET 'https://app.myunisoft.fr/api/v1/society/exercice' \
--header 'X-Third-Party-Secret: {{THIRD_PARTY_SECRET}}' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

## Endpoints pour récupérer des informations sur le cabinet

Les endpoints suivants ne nécessitent pas l'en-tête **society-id**:

- /api/v1/society (liste des sociétés/dossiers du cabinet).
- /api/v1/users_v2 (liste des comptes utilisateurs du cabinet).
- /api/v1/pers_physique (liste des personnes physiques gérées par cabinet).

Les routes sont documentés sur le [postman en ligne](https://docs.api.myunisoft.fr/#intro).

> **Warning**: Attention car les routes sur le postman n'indique pas la nécessité d'avoir l'en-tête **society-id**.

## Route society
La route `/api/v1/society` peut recevoir le header **society-id** ce qui permet de récupérer les informations uniquement pour la société en question.

---

⬅️ [README](../../README.md)
