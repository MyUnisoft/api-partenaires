# Endpoints d'accès sociétés

Lors de l'utilisation des endpoints par le biais d'un API Token ayant un accès de type société il n'est pas nécessaire de renseigner l'id de la société car par défaut l'API partenaires ne vous autorise l'accès qu'au dossier concerné par la clé.

Il ne vous est pas possible de récupérer des informations en lien avec le cabinet ou d'autres sociétés/dossiers.

Les routes sont documentés sur le [postman](https://docs.api.myunisoft.fr/#intro) en ligne.

## Restriction

Les routes `/pers_physique` et `/users` ne sont utilisables qu'avec un accès de type cabinet.