# Récupérer les routes accessibles

![](../images/key_info.PNG)

Il faut savoir que les routes accessibles sont définies selon votre type d'accès (🔹 Cabinet ou 🔸 Société).

Il est possible de récupérer les routes liées à votre accès en appelant la route `https://api.myunisoft.fr/api/v1/key/info` avec la méthode **GET**:

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/key/info' \
--header 'Authorization: Bearer {{ TOKEN }}' \
--header 'X-Third-Party-Secret: {{ X-Third-Party-Secret }}' \
```

Le retour JSON est de type **Routes** (définition sous l'exemple).

```json
// Exemple de retour.

[
  {
    "path": "/api/v1/society/exercice",
    "method": "get"
  },
  {
    "path": "/api/v1/society",
    "method": "get"
  },
  {
    "path": "/api/v1/account",
    "method": "get"
  },
  {
    "path": "/api/v1/diary",
    "method": "get"
  },
  {
    "path": "/api/v1/TRA/partial",
    "method": "post"
  },
  {
    "path": "/api/v1/test",
    "method": "get"
  }
]
```

```typescript
// Définition.

interface Route {
  path: `/api/v1/${string}`;
  method: 'get' | 'post' | 'put' | 'delete';
}

type Routes = Route[];
```
