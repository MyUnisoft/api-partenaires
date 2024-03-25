---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# 🚥 Rate limiting des routes exposées

L'API limite le nombre de requêtes par API Token, quelques en-têtes supplémentaires sont envoyés dans la réponse HTTP:

- <kbd>X-Rate-Limit-Remaining</kbd> (le nombre de requêtes restantes dans la période).
- <kbd>X-Rate-Limit-Reset</kbd> (timestamp correspondant au moment où la période sera réinitialisée).
- <kbd>X-Rate-Limit-Total</kbd> (le nombre total de requêtes pour une période).

La limite par **défaut est de 20 requêtes par tranche de 10 secondes**. Certains endpoints d'import ou d'export lourd peuvent comptabiliser plusieurs utilisations d'un coup pour sécuriser les usages abusifs pouvant amener à une dégradation des performances de notre plateforme.

Lorsque la limite est dépassé l'API retournera une erreur `ERR-TOO-MANY-REQUEST` avec un statusCode HTTP égal à <kbd>429</kbd>.
