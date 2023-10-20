# Endpoints d'accès cabinet

> [!IMPORTANT]
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

- <kbd>/api/v1/society</kbd> (liste des sociétés/dossiers du cabinet).
- <kbd>/api/v1/users_v2</kbd> (liste des comptes utilisateurs du cabinet).
- <kbd>/api/v1/pers_physique</kbd> (liste des personnes physiques gérées par cabinet).

Les routes sont documentés sur le [postman en ligne](https://docs.api.myunisoft.fr/#intro).

> [!WARNING]
> Les routes sur le postman n'indiquent pas la nécessité d'avoir l'en-tête **society-id**.

## Route society
La route `/api/v1/society` peut recevoir le header **society-id** ce qui permet de récupérer les informations uniquement pour la société en question.

---

⬅️ [README](../../README.md)
