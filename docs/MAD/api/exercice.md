---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next:
  text: Exercice (Spec)
  link: MAD/specs/v1.0.0/exercice.md
---

# Export des exercices

```bash
curl --location \
--request GET 'https://api.myunisoft.fr/api/v1/mad/exercices?version=1.0.0' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json'
```

## 🔧 Paramètres de la requête

Le paramétrage de la route se fait exclusivement par le biais des [querystrings](https://en.wikipedia.org/wiki/Query_string).

| nom | description | obligatoire |
| --- | --- | :---: |
| version | version du format | ✔️ |

> [!IMPORTANT]
> 🔹 Accès cabinet
> L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production (la société concernée par la demande d'extraction).

## 🔬 Réponse

Le JSON renvoyé correspondra à la [spécification suivante](../specs/v1.0.0/exercice.md).

## 💬 Gérer les exercices sur l'interface MyUnisoft

Les exercices peuvent être gérés par le biais du CRM dans le menu: `Ecosystème` > `CRM` > `Entreprise`.

> [!NOTE]
> Il vous sera nécessaire de sélectionner le dossier de production en amont (ou pendant la procédure).

---

1 - <kbd>Entreprises</kbd> doit être sélectionné dans la liste:

![Aperçu ddu menu de sélection des entreprises](../../images/crm_list_entreprises.PNG)

---

2 - Choisir l'onglet <kbd>Exercices</kbd>

<img src="../../images/exercices.PNG" width="800">
