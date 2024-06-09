---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Guide Webhooks

> [!CAUTION]  
> Les webhooks ne sont pas disponibles pour les **clients MyUnisoft** possédant l'offre API cabinet. Cependant, cette restriction ne **concerne pas nos partenaires** bénéficiant d'un accès de niveau cabinet.

## Introduction
L’objectif de ce guide est de simplifier la mise en place de nouveaux webhooks pour les partenaires.

- [Why & How We came up with Webhooks?](https://www.linkedin.com/pulse/why-how-we-came-up-webhooks-nicolas-hallaert) (Article technique)

## Qu’est-ce qu’un webhook ?

Un webhook est une simple requête HTTP <kbd>POST</kbd> contenant le strict minimum d’informations, envoyée suite à la propagation d’un ou plusieurs “**évènement**” au sein de MyUnisoft. 

Le webhook peut être configuré pour être associé à un ou plusieurs dossiers de production (**accountingFolderId**) ou à l'intégralité du tenant (schéma), de manière à ne réagir qu’aux évènements se produisant dans ces dossiers spécifiques.

En résumé, le webhook contient les informations des différents évènements propagés auxquels vous avez souscrit.

## Pré-requis

Préalablement à la mise en place du webhook par nos services, il est nécessaire de :

- Obtenir des accès à notre API avec la clé secrète `X-Third-Party`.
- Définir avec les équipes techniques MyUnisoft la [liste des évènements](https://github.com/MyUnisoft/events/blob/main/docs/events.md) auxquels vous souhaitez souscrire.
- Mettre en place un **point d’API** (ou **route**) que MyUnisoft utilisera pour informer de la propagation des évènements prédéfinis.

[Ici](https://github.com/MyUnisoft/events/tree/main/example/fastify), vous trouverez un exemple d'API basé sur le framework **Fastify de Node.js**.

> [!NOTE]
> Il est possible d'utiliser nos API webhooks pour vous abonner directement aux évènements. Cela permet à un développeur d'utiliser des outils comme [ngrok](https://ngrok.com/) pour tester les webhooks localement.

## Exemple de réponse

Notre service enverra un JSON similaire à celui ci-dessous. Noter qu'**une** requête HTTP peut contenir **plusieurs** webhooks (évènements).

```json
{
  "webhooks": [
    {
      "name": "connector",
      "operation": "CREATE",
      "scope": {
        "schemaId": 1,
        "firmId": 1,
        "firmSIRET": "83966500700010",
        "accountingFolderId": 409,
        "accountingFolderRef": "MYU01",
        "accountingFolderSIRET": "84014327500039"
      },
      "data": {
        "id": 1,
        "code": "JFAC"
      },
      "webhookId": "83c22567-fd2f-4a50-abbb-48aedefdcfa5",
      "createdAt": 1678457043533
    }
  ]
}
```

Vous ne recevrez que les évènements et opérations que vous aurez demandé.

> [!IMPORTANT]
> Les interfaces des “**webhooks**” et “**évènements**” disponibles sont spécifiés en [Typescript](https://github.com/MyUnisoft/events/blob/main/docs/events.md) ou en [JSON-Schema](https://github.com/MyUnisoft/events/tree/main/docs/json-schema/events).

## Anatomie d'un évènement MyUnisoft

### Scope (champ d'action)

Chaque “**évènements**” est constitué d’un “**scope**” (comme défini ci-dessous) permettant d’identifier l’origine de l’évènement et donc de faire le lien avec vos données.

| Nom de la clé | Requis | Description |
| --- | :---: | --- |
| schemaId | ✅ | Un schéma est un cabinet ou un groupement de cabinet (Il faut l’imaginer comme une abstraction permettant d’isoler nos clients entre eux). |
| firmId | ❌ | Le terme de firm (ou encore cabinet) représente un client signé sur le plan commercial et technique. |
| firmSIRET | ❌ | SIRET ou SIREN du cabinet lié au dossier |
| accountingFolderId | ❌ | Le terme accountingFolder (ou encore dossier) représente une entreprise cliente d’un cabinet. |
| accountingFolderRef | ❌ | Référence interne du dossier |
| accountingFolderSIRET | ❌ | SIRET ou SIREN de l'entreprise (dossier) |
| persPhysiqueId | ❌ | Le terme persPhysique représente un utilisateur rattaché au schéma. |

À noter qu'il est possible de récupérer le `schemaId` d'une clé JWT avec la route [key/info?mode=extended](https://github.com/MyUnisoft/api-partenaires/blob/main/docs/endpoints/endpoints_accessibles.md#r%C3%A9cup%C3%A9ration-des-informations-du-token-et-des-routes-accessibles). Vous pouvez donc potentiellement persister l'ID en question pour simplifier l'identification du webhook reçu.

> [!NOTE]
> Dans MyUnisoft, un dossier de production bien configuré possédera toujours un numéro SIREN/SIRET. Cependant, lors de sa création, cette information n'est pas obligatoire.

### Operation

Chaque évènement se distingue par l'opération qui lui est attribuée. Voici les types d'opérations possibles:

- CREATE
- UPDATE
- DELETE
- VOID

> [!IMPORTANT]
> La [documentation des évènements](https://github.com/MyUnisoft/events/blob/main/docs/events.md) vous précise les opérations disponibles pour chaque évènement.

### Data

Chaque évènement possède son propre contrat d'interface, avec des données relativement minimales permettant l'identification et la récupération des ressources via nos APIs.

## API

Les routes pour créer, supprimer et mettre à jour des souscriptions aux webhooks sont disponibles dans notre collection Postman (dossier racine `Webhook`), accessible via la navigation en haut à droite.

```http
POST /api/v1/webhook HTTP/1.1
Host: api.myunisoft.fr
Content-Length: 119

{
    "postUrl": "https://xxx.eu.ngrok.io/api/v1/webhooks",
    "onEvents": ["document"]
}
```

Vous pouvez souscrire à un ou plusieurs évènements à la fois. Cependant, il n'est pas possible de souscrire à une opération précise ; le filtrage relève de votre responsabilité.

## Comment déclencher mon évènement ?

[Ici](https://myunisoft.atlassian.net/wiki/external/YjM0ZTdlYzNjNzc5NGNjZjgwNjFhMjc2YmVkZTc1ZTU) vous retrouverez les différents workflows au sein de l'interface MyUnisoft afin d'activer lesdits évènements.

## Détails d’implementation

### Validation de la requête

> [!WARNING]
> Pour des mesures de sécurité, il est impératif de valider les en-têtes HTTP **date** et **signature** avant de traiter les requêtes qui font suites aux webhooks. Si l’une des deux en-têtes ne peut être validé, alors la requête doit être rejetée.
> 
> [The importance of verifying webhook signatures (SNYK)](https://snyk.io/blog/verifying-webhook-signatures/)

- L’en-tête <kdb>signature</kdb> est un hash utilisant l’algorithme de chiffrement **SHA256**. Il est généré à partir du <kdb>corps</kdb> de la requête joint à l’en-tête HTTP date, signé avec votre clé secrète `X-Third-Party`.

- La date représente le moment de l’envoi par MyUnisoft. Pour valider cette en-tête, il est essentiel que cette date ne soit pas trop ancienne, afin d'éviter les “[Replay attacks](https://hookdeck.com/webhooks/guides/webhook-security-vulnerabilities-guide#man-in-the-middle-attack)” (répétitions de requêtes).

#### Explication pour une implémentation

Lors de la réception de la requête HTTP vous aurez les deux en-têtes suivants disponibles;

```http
POST {{postUrl}} HTTP/1.1
date: 1677163797597
signature: 5c25dcda347d2a278f1fea783c56b18d702d2bcf68b6161fac28dfb33de5751d
```

Il vous suffira donc de générer un HASH avec l’algorithme SHA256 en utilisant:
- La valeur de l’en-tête HTTP date
- Vôtre clé secrète X-Third-Party (fournit par MyUnisoft).

```
localSignature := crypto.hmac(
  xThirdPartySecret,
  JSON.Stringify(body) + date, 
  “SHA256” // ALGORITHM
);
```

La signature générée doit être équivalente à la signature fournie par MyUnisoft. Si la signature ne correspond pas il est nécessaire de rejeter la requête HTTP.

### Niveau d'abstraction d'un webhook

Vous pouvez créer et gérer des webhooks à plusieurs niveaux d'abstractions:

1. un webhook pour l'intégralité des schémas/tenants.
2. un webhook par cabinet/groupement de cabinet (ce que nous appelons <kbd>schema</kbd> ou <kbd>tenant</kbd> chez MyUnisoft).
3. un webhook par dossier de production (entreprise).

Quelle différence technique entre ses différents niveaux demanderez-vous!

#### Webhook global

Le défi technique du choix entre **un** ou **deux** réside dans l'identification d'un client (entreprise) avec le minimum de persistance au sein de votre infrastructure. Cela permet une implémentation sans gestion du cycle de vie des souscriptions de webhooks, ce qui simplifie grandement votre implémentation et sa maintenance.

Le scope d'un évènement contiendra des informations telles que `accountingFolderSIRET` et `accountingFolderRef` pour vous aider à identifier l'entreprise concernée.

> [!NOTE]
> Nous travaillons encore à l'ajout d'informations et outils pour simplifier l'identification (tout feedback est donc la bienvenue).

#### Webhook unitaire

La difficulté du choix **trois** réside dans la gestion de la persistance et du cycle de vie des souscriptions. Bien que très flexible et permettant une identification efficace, ce modèle sera de loin le plus coûteux à développer et à maintenir.
