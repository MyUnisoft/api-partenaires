---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# Création d'une entrée comptable avec le format Factur-X

Documentation sur la création d’une entrée comptable au format Factur-X.
​
Les routes HTTP concernées;

- <https://api.myunisoft.fr/api/v1/invoice>

## Introduction

Factur-X est un standard franco-allemand de facture électronique mixte (PDF pour les utilisateurs et données XML pour un traitement automatisé), première implémentation de la Norme Sémantique Européenne EN 16931 publiée par la Commission Européenne le 16 octobre 2017. Factur-x est le même standard que ZUGFeRD 2.1.

Factur-X est en même temps une facture lisible sous format PDF, contenant toutes les informations utiles à son traitement, notamment en cas d’écart de rapprochement avec les commandes ou les réceptions, et des données de facture présentées sous forme de fichier structuré, complet ou pas, permettant aux systèmes d’information de procéder à une intégration et un rapprochement automatisé.

L’objectif premier de Factur-X est de permettre aux fournisseurs, émetteurs de factures de créer des factures à valeur ajoutée, contenant un maximum d’informations sous forme structurée, suivant leur capacité à les produire sous cette forme, et de laisser les clients destinataires libres d’utiliser ou pas les données et / ou la presentation lisible, en fonction de leurs besoins et de leur maturité en matière d’automatisation de traitement.

## API

```bash
curl --location \
--request POST 'https://app.myunisoft.fr/api/v1/invoice?invoice_type_id=1&ocr_type_id=6&name=CHORUS0000003&extension=pdf' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Content-Type: application/octet-stream' \
--header 'Authorization: {{API_TOKEN}}' \
--data-binary '@/F:/Code/MyUnisoft/impex/tmp/EBP/CHORUS00000034 20210122 143504.pdf'
```

La route prend plusieurs arguments :

- **invoice_type_id** (Required 1 = Achat / 2 = Note de frais / 3 = Vente / 4 = Avoir)
- **ocr_type_id** 6 Pour Factur-X.
- **name** (le nom du fichier qui est attaché avec la requête).
- **extension** pdf.
