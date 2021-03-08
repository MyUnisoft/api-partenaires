# 🔸 Authentification avec accès société

## 1. Authentification sur le service Auth MyUnisoft

Pour pouvoir créer un jeton (API Token) il est nécessaire de s'authentifier auprès de notre service authentification. Un compte vous sera créé au sein d'un schéma dédié aux tests avec nos différents partenaires.

### 1.1 Récupération du member_group_id
Pour pouvoir authentifier un compte il est préalablement nécessaire de connaître son ou ses groupes d’appartenances (ce qui correspond à la clé “**member_group_id**” dans les prochaines section du document).

Pour récupérer ces informations il suffit d’envoyer une requête HTTP GET sur la route suivante: **/api/group?mail=email-du-compte**

Le paramètre **email** doit être l'email du compte qui vous a été fourni pour vos tests.

### 1.2 Récupération d’un access_token sur le Service auth

La première étape consiste à s’authentifier sur le service d'authentification. Les routes de l’API partenaires commençant par /key demandent toutes un header Authorization avec un Bearer token (l'access token).

Nous parlerons de ce token comme étant le “User token”. La route (racine) pour la requête http est /api/auth/token.

Body (JSON) de la requête POST pour l’authentification:
```json
{
    "member_group_id": 80,
    "password": "{{password}}",
    "mail": "{{mail}}",
    "grant_type": "password"
}
```

Les champs “password” et “mail” doivent être complétés avec le compte qui vous a été fourni. La clé “member_group_id” doit être récupérée dans la section 1.1!

---

Vous devriez recevoir un status code 200 avec un JSON contenant la fameuse clé JWT “access_token”.
```json
{
  "expire_in": "2020-10-14 19:00:25",
  "access_token": "{{USER_TOKEN_HERE}}",
  "refresh_token": "{{REFRESH_TOKEN}}",
  "token_type": "bearer"
}
```

## 2. Création du jeton (API Token)

### 2.1 Récupération de l’id du partenaire (grantedFor)
Avant de pouvoir générer une clé (API Token) il est nécessaire de récupérer votre id partenaire à l’aide de la clé secrète x-third-party fourni par MyUnisoft.

L’id récupéré peut être différent selon l’environnement (production, staging et dev) et  il sera utilisé en tant que clé “grantedFor” pour la génération de l’API Token dans la prochaine section.

Pour récupérer l’id il vous faut requêter la route /api/v1/key/granted-for en POST avec le body JSON suivant:
```json
{
  "secret": "nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V"
}
```

> ⚠️ Pensez à ajouter le User Token dans le header Authorization (Bearer token).

---

Si tout se passe comme  prévu vous devriez recevoir un payload comme suit avec un status code 200 (le 1 dans le retour étant évidemment un exemple). 
```json
{
  "grantedFor": 1
}
```

--- 

À noter qu’il n’est pas forcément nécessaire d’envoyer l’intégralité du secret. Il est aussi possible d’envoyer uniquement la première section avant le tiret du six “-”.

Exemple: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V

### 2.2 Génération de la clé

Il suffit de requêter la route /api/v1/key/create en POST avec le body JSON suivant:
```json
{
  "grantedFor": 1,
  "target": 2
}
```

- grantedFor: l’id du partenaire auquel vous souhaitez avoir accès et qui sera lié à l’API Token. Récupéré dans la section précédente.
- target: l’id de la société qui sera lié à l’API token. Il est possible de récupérer l’id d’une société par le biais de l’application MyUnisoft (l’id sera présent dans l’URL).

> ⚠️ Pensez à ajouter le User Token dans le header Authorization (Bearer token).

Si tout se passe comme  prévu vous devriez recevoir un payload comme suit avec un status code 200. 
```json
{
  "id": "f75c3265-65f8-4417-9056-f285698eef5f",
  "target": 2,
  "grantedBy": 1,
  "grantedFor": 1,
  "value": "{{JWT-TOKEN-HERE}}"
}
```

La clé value est un JWT token que vous allez devoir utiliser pour requêter les routes exposées par l’API. Nous parlerons “d’API Token” quand il est question de l’utilisation de celui-ci (A ne pas confondre avec le User token de l’étape 1).

À noter qu’une fois votre API token généré il n’est plus nécessaire de refaire les étapes ci-dessus (sauf si le token a entre-temps expiré).

