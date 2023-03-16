# Guide Webhooks

> **Warning** les webhooks ne sont pas disponibles pour l'offre API cabinet.

## Introduction
L’objectif de ce guide est de simplifier la mise en place de nouveaux webhooks pour les partenaires.

## Qu’est-ce qu’un webhook ?

Un webhook est une simple requête HTTP <kbd>POST</kbd> contenant le strict minimum d’informations suite à la propagation d’un ou plusieurs “**évènement**” au sein de MyUnisoft. 

Il (le webhook) peut être scopé à un ou plusieurs dossiers de productions (**accountingFolderId**) afin de ne réagir qu’aux évènements prenant place au sein desdits dossiers de productions.

En somme, le webhook contient les informations des différents évènements propragés.

## Pré-requis

Préalablement à la mise en place du  webhook par nos services, il est nécessaire de :

- Avoir des accès à notre API avec la clé secrète `X-Third-Party`.
- Définir avec les équipes techniques MyUnisoft la liste des évènements auxquels vous souhaitez souscrire.
- Mettre en place un **point d’API** (ou encore **route**) que MyUnisoft exploitera afin d’informer de la propagation des évènements prédéfini. [Ici](https://github.com/MyUnisoft/events/tree/main/example/fastify), vous trouverez un exemple basé sur le framework **Fastify de Node.js**.

> **Note** Il est possible d’utiliser nos API webhooks pour souscrire vous-même (ce qui permet à un développeur d’utiliser des outils comme [ngrok](https://ngrok.com/)).

## Exemple de réponse

Notre service enverra un JSON similaire à celui ci-dessous. Noter qu'**une** requête HTTP peut contenir **plusieurs** webhooks (évènements).

```json
{
  "webhooks": [
    {
      "name": "connector",
      "operation": "CREATE",
      "scope": {
        "schemaId": 1
      },
      "data": {
        "id": 1,
        "code": "JFAC"
      },
      "webhookId": 1,
      "createdAt": 1678457043533
    }
  ]
}
```

Vous ne recevrez que les évènements et opérations que vous aurez demandé.

> **Note** Les interfaces des “**webhooks**” et “**évènements**” disponibles sont spécifiés en [Typescript](https://github.com/MyUnisoft/events/blob/main/docs/events.md) ou en [JSON-Schema](https://github.com/MyUnisoft/events/tree/main/docs/json-schema/events).

## Qu’est-ce qu’un évènement ?

### Scope (champ d'action)

Chaque “**évènements**” est constitué d’un “**scope**” (comme défini ci-dessous) permettant d’identifier l’origine de l’évènement et donc de faire le lien avec vos données.

| Nom de la clé | Requis | Description |
| --- | --- | --- |
| schemaId | ✅ | Un schéma est un cabinet ou un groupement de cabinet (Il faut l’imaginer comme une abstraction permettant d’isoler nos clients entre eux). |
| firmid | ❌ | Le terme de firm (ou encore cabinet) représente un client signé sur le plan commercial et technique. |
| accountingFolderId | ❌ | Le terme accountingFolder (ou encore dossier) représente une entreprise cliente d’un cabinet. |
| persPhysiqueId | ❌ | Le terme persPhysique représente un utilisateur rattaché au schéma. |

## Détails d’implementation

### Validation de la requête

> **Warning** Pour des mesures de sécurité, il est impératif de valider les en-têtes HTTP **date** et **signature** avant de traiter les requêtes qui font suites aux webhooks. Si l’une des deux en-têtes ne peut être validé, alors la requête doit être rejetée.

- L’en-tête <kdb>signature</kdb> est un hash utilisant l’algorithme de chiffrement **SHA256**. Il est généré à partir du <kdb>body</kdb> joint à l’en-tête HTTP date, signé avec votre clé secrète `X-Third-Party`. Afin de valider cette entête, il faut que ce dernier colle avec un sha256 généré par vos soins en reprenant donc le body ainsi que la date, signé de votre secret.

- La date représente le moment de l’envoi par MyUnisoft. Afin de valider cette entête, il ne faut pas que cette date soit trop vieille. Ceci permet d'éviter les “**Replay attacks**” (replications de requêtes).

#### Explication pour une implémentation

Lors de la réception de la requête HTTP vous aurez les deux en-têtes suivants disponibles;

```
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
  JSON.Stringify({ body, date }), 
  “SHA256” // ALGORITHM
);
```

La signature générée doit être équivalente à la signature fournie par MyUnisoft. Si la signature ne correspond pas il est nécessaire de rejeter la requête HTTP.
