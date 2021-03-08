# Introduction ✨
L’API Partenaires permet à des logiciels partenaires ainsi que des cabinets membres de récupérer et d'envoyer de l'information depuis/vers MyUnisoft.

L’authentification du partenaire/cabinet est principalement basé sur:
- une clé **x-third-party** fournie par MyUnisoft (demande auprès de [c.mandrilly@myunisoft.fr](c.mandrilly@myunisoft.fr)).
- une clé [JWT](https://jwt.io/) (**API Token**) pour chaque cabinet et/ou société.

Ces deux clés sont nécessaires pour pouvoir utiliser les routes définies sur [https://docs.api.myunisoft.fr/](https://docs.api.myunisoft.fr/)

# Equipe 👥

| Prénom - Nom | Rôle(s) | Email |
| --- | --- | --- |
| Cyril Mandrilly | CTO | [c.mandrilly@myunisoft.fr](c.mandrilly@myunisoft.fr) |
| Thomas Gentilhomme | Lead Développeur API | [gentilhomme.thomas@gmail.com](gentilhomme.thomas@gmail.com) |
| Alexandre Malaj | Développeur API | [alexandre.malaj@gmail.com](alexandre.malaj@gmail.com) |
| Léon Souvannavong | Lead dev back-end (**a consulter pour la partie métier**) | [l.souvannavong@myunisoft.fr](l.souvannavong@myunisoft.fr) |

# Scope 🔬
Notre API partenaires permet deux types distincts d'accès:

- 🔸 Un accès restreint par **société** (dossier).
- 🔹 [**bêta-test**] Un accès à l'intégralité des sociétés d'un **cabinet**.

L'accès limité par société est le modèle le plus courant car il permet d'interconnecter nos solutions de manière permanente par le biais d'un jeton n'ayant aucune date d'expiration (il peut être néanmoins révoqué par le gestionnaire du dossier ou par nos équipes techniques). C'est un modèle qui est aussi très flexible car nous n'avons pas à intervenir dans ce processus de connexion.

À l'inverse un accès **cabinet** delivera un jeton ayant une durée de vie très courte pour garantir une meilleure sécurité des données appartenant au cabinet.

# Prérequis 👀

Les éléments et informations que le partenaire doit nous fournir (mail a [c.mandrilly@myunisoft.fr](c.mandrilly@myunisoft.fr) ou slack si déjà invité.).

<details><summary>🔸 Accès société</summary>
<br />

Ces éléments permettront de créer le connecteur sur l’application MyUnisoft et de vous envoyer les infos techniques: 

- nom partenaire.
- description courte partenaire (3 lignes 25 char max).
- description longue.
- logo partenaire (png, hauteur 50px).
- texte complémentaire (par exemple ou coller la clé sur votre interface ou lien vers une doc/vidéo d’utilisation avec myunisoft)
- nom, prénom, email pour un accès à myunisoft.
- nom, prénom, email pour une invitation slack.

</details>

<details><summary>🔹 Accès cabinet</summary>
<br />

PAS ENCORE DISPONIBLE.

</details>
<br />

Les éléments que nous renvoyons au partenaire une fois les éléments ci-dessus en notre possession:

- Clé **x-third-party** de production (C’est une clé secrète unique entre vous et nous qui sera nécessaire pour requêter l’API).
- Lien vers la documentation postman ([https://docs.api.myunisoft.fr/#intro](https://docs.api.myunisoft.fr/#intro)).

# Liens (URL) de nos API 🌍

- API Partenaires > [https://app.myunisoft.fr/api/v1](https://app.myunisoft.fr/api/v1)
- Service Auth > [https://app.myunisoft.fr/api/auth/token](https://app.myunisoft.fr/api/auth/token)

# Authentification 🔐

Les sous-documentations suivantes vous guideront dans le flow d'authentification nécessaire selon le type d'accès que vous avez souhaité.

- [🔸 Accès société](./docs/auth/societe.md)
- [🔹 Accès cabinet](./docs/auth/cabinet)

> ⚠️ Dans le cadre **d'un accès société** l'authentification n'est nécessaire **que pour la phase de développement** du connecteur, notre équipe développera un composant front-end qui permettra au gestionnaire du dossier (comptables et autres) de générer le jeton lui-même pour ensuite le renseigner dans votre interface produit.

# Utilisation d’une route exposée par l’API 🚀

Lors de l’utilisation d’une route exposée il est nécessaire d’avoir l’**API Token** dans l'en-tête HTTP **Authorization** (et surtout pas le User token délivré par le Service d'authentification MyUnisoft). Il est aussi important de noter qu'il s'agit d'un "Bearer token".

Il est aussi nécessaire d’ajouter une en-tête HTTP “**X-Third-Party-Secret**” contenant la clé secrète du partenaire lié à l’API Token. Ce secret vous sera communiqué par l’équipe technique MyUnisoft.

Toutes les routes sont exposées directement à la racine api/v1. Pour plus d'informations nous vous invitons à consulter les sous-documentations suivantes:

- [🔸 Accès société](./docs/endpoints/societe.md)
- [🔹 Accès cabinet](./docs/endpoints/cabinet)

> 👀 À noter qu’il est nécessaire que l’API Token vous donne l’autorisation d’accès à la route exposée (**droits et configurations à discuter avec l’équipe MyUnisoft**).

## Rate-limit des routes exposées

Le proxy limite le nombre de requêtes par Clé/API Token (et non par IP), il envoie quelques en-têtes supplémentaires avec la requête:

- **X-Rate-Limit-Remaining** (le nombre de requêtes restantes dans la période).
- **X-Rate-Limit-Reset** (timestamp correspondant au moment où la période sera réinitialisée).
- **X-Rate-Limit-Total** (le nombre total de requêtes pour une période).

La limite par **défaut est de 100 requêtes par minute**.

## Récupération des routes accessibles

> ⚠️ Pour le moment uniquement possible avec un **🔸 accès société**.

Il est possible de récupérer la liste des routes (endpoints http) auxquelles vous avez accès **grâce à votre API Token** (Ce qui peut aussi vous permettre de vérifier la validité du token). La route GET **/api/v1/key/info** permet de récupérer la liste des routes ainsi que la méthode HTTP nécessaire (get, post, put ..).

Attention car la route nécessite que l'en-tête HTTP Authorization soit l’API Token et non pas le User Token.
