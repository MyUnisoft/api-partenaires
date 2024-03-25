---
prev:
  text: 🐤 Introduction
  link: documentation.md
next:
  text: Authentification
  link: /authentication/authentication
---

<span id="readme-top"></span>

# Comment changer de système d'authentification (Cabinet).

> [!IMPORTANT] 
> Ce document est à destination des partenaires avec accès cabinet uniquement.

[L'ancien système d'authentification](cabinet.md) avec accès cabinet se base sur la combinaison d'un **mail** et d'un **mot de passe**.

Aujourd'hui, il est désormais possible de générer un token directement depuis la page [Connecteurs](https://app.myunisoft.fr/tab/collab/connectors) de [MyUnisoft](https://app.myunisoft.fr/).

-  [🔹 Authentification](partenaire.md)

## Pourquoi changer?

Tout d'abord il y a souvent une confusion chez les clients entre les comptes utilisateurs et les comptes API.

Mais surtout, l'ancien système exige plusieurs étapes qui ralentissent le processus d'apparaillage:

- Faire la demande de création de compte auprès de MyUnisoft (ce qui peut prendre plusieurs jours).

- Transmettre les informations aux clients.

- Que le client transmet à son tour ces informations au partenaire.

Une fois ces étapes passées, le partenaire peut utiliser ces informations pour se connecter en requêtant la route **POST /api/authenticate/firm** ce qui va lui retourner un token de type Cabinet/firm.

Tandis que le nouveau système d'authentification permet aux clients de générer ce token en 3 clics et de le fournir au partenaire afin de permettre à ce dernier de consommer notre API directement sans passer par l'étape de connexion via la route **POST /api/authenticate/firm**.

## Comment changer?

1. Prévenir l'équipe technique responsable de l'api partenaires à l'adresse **partners.tech@myunisoft.fr** (nous pourrons organiser un rendez-vous si vous avez besoin d'information supplémentaire).

2. Faire vos modifications techniques.

3. Prévenir l'équipe technique responsable de l'api partenaires que vous êtes définitivement prêt à changer de système avec la date et l'heure à laquelle vous souhaitez opérer le changement. De notre coté l'opération ne dure pas plus d'une minute.
