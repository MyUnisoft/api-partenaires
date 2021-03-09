# Gestion des retours erreurs 💥

## API Partenaires
Chaque erreur est accompagnée d’un code unique et d’un message essayant de vous guider au mieux dans la résolution de l’erreur. La propriété “**details**” servira si besoin à nos équipes à tracer et identifier la source du problème en interne.

```json
{
    "error": {
        "code": "ERR-INTERNAL",
        "message": "Internal Server Error",
        "details": {
            "url": "https://app.myunisoft.fr/api/v1/key/create",
            "method": "POST",
            "requestedAt": "09 Mar 2021, 21:09:24",
            "correlationId": "09347205-7de2-4efe-aa68-f0f24a378029"
        }
    }
}
```

La propriété message est en ce qui la concerne vouée à évoluer à travers le temps. **Nous vous recommandons de ne pas l’utiliser comme référentiel pour automatiser une gestion d’erreur au sein de vos implémentations**.

L’API n’a pour le moment aucune gestion d’un **retour de multiple** “erreurs” mais il n’est pas exclu que cela soit le cas dans le futur. Tout retour HTTP n’ayant pas un statut code en 2xx retournera donc forcément un JSON avec une propriété racine “error”.

> ⚠️ Attention nous ne parlons pas des erreurs qui sont retournées sur les routes qui ne sont que des passerelles vers d’autres API internes.⚠️

# Codes d'erreur

Les codes d’erreurs (unique) sont les suivants;
- **ERR-ANY**
- **ERR-HTTP**
- **ERR-INVALID-AUTH-HEADER** (l’en-tête http “Authorization” doit être préfixé du mot clé Bearer).
- **ERR-INVALID-JWT** (Le jeton Utilisateur ou API n’est pas valide).
- **ERR-INVALID-USER-JWT**
- **ERR-INVALID-API-JWT**
- **ERR-USER-TOKEN-NOT-FOUND** (le token n’existe pas ou est expiré).
- **ERR-API-TOKEN-NOT-FOUND** (le token n’existe pas ou est révoqué).
- **ERR-SECRET-NOT-CONFIGURED**
- **ERR-SECRET-HEADER-NOT-SET** (l’en-tête X-Third-Party-Secret est manquante).
- **ERR-INVALID-SECRET** (l’en-tête X-Third-Party-Secret n’est pas valide).
- **ERR-MISSING-RULE**
- **ERR-FORBIDDEN-ROUTE** (vous n’avez pas les droits d’accès pour la route).
- **ERR-SOCIETY-DOESNT-EXIST** (la société cible n’existe pas).
- **ERR-THIRD-PARTY-DOESNT-EXIST** (le groupe/schéma cible n’existe pas).
- **ERR-USER-DOESNT-EXIST** (l’utilisateur n’existe pas… n’arrive jamais sauf si le JWT est signé par un autre acteur que le Service auth MyUnisoft).
- **ERR-USER-UNEXPECTED-TYPE** (l’utilisateur générant la clé n’a pas les droits nécessaires sur le schéma).
- **ERR-API-TOKEN-GENERATION-FAILED** (la génération du token a échoué… merci de prendre contact avec nous si cela se produit).

## Proxy

> PROCHAINEMENT
