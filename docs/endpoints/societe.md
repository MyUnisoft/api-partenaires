---
prev:
  text: 🐤 Introduction
  link: documentation.md
next:
  text: 🔑 Routes accessibles
  link: /endpoints/endpoints_accessibles.md
---

# 🔸 Usage API avec l'accès société

Lors de l'utilisation des endpoints avec un accès de type société il n'est pas nécessaire de renseigner l'id de la société car par défaut l'API partenaires ne vous autorise l'accès qu'au dossier concerné par la clé.

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/society/exercice' \
--header 'X-Third-Party-Secret: {{THIRD_PARTY_SECRET}}' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Il n'est donc pas possible de récupérer des informations en lien avec le cabinet ou d'autres sociétés/dossiers.
