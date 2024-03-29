---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Mise à jour de la liste de contacts d'un compte client ou fournisseur

Il existe une API spécialement conçu pour la mise à jour de la liste des contacts pour les comptes fournisseurs et clients. Cet API a été créer pour répondre à une limitation de PUT account qui ne permet pas de mise à jour partielle.

```bash
$ curl --location --request PUT 'https://api.myunisoft.fr/api/v1/account/contact' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Le body de la requête HTTP (`account_id` doit correspondre au compte à mettre à jour)

```json
{
  "account_id": 18786343,
  "contact_list": [
    {
      "tel1": "0655547180",
      "tel2": "",
      "email": "john.doe@unknown.com",
      "lastname": "Doe",
      "firstname": "John",
      "function": "CEO",
      "id_contact_compte_tiers": 1
    }
  ]   
}
```

> [!IMPORTANT]
> La propriété `id_contact_compte_tiers` peut être omise (cela aura pour effet de créer un nouveau contact). À noter que les Ids qui ne sont pas envoyés seront eux aussi supprimés.

> [!CAUTION]
> Vous devez donc envoyer l'intégralité des contacts à chaque mise à jour.

