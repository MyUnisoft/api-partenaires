# Node.js implémentation
Exemple d'implémentation en Node.js avec le nouveau wrapper http Node.js undici.

## Requirements
[Node.js](https://nodejs.org/en/) version 14 et supérieure sont nécessaires pour mener à bien ce projet. **Nous ne fournissons pas de support** pour les versions précédentes.

## Getting Started

```bash
$ npm ci
$ npm start
```

## Env
L'exemple utilise le package dotenv pour charger plusieurs variables d'environnement (sur le système ou dans un fichier racine .env).

```
user_token=""
x_third_party_secret=""
society_id="1"
api_token=""
```

Si vous n'avez pas encore d'API Token le code s'occupera d'en générer un la première fois.
