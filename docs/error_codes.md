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
