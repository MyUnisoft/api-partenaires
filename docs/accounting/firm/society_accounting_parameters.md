---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Mise à jour des paramètres comptable d'un dossier de production

Le dossier de production possède un ensemble de paramétrages comptables éditable par le CRM et l'onglet `Comptabilité`.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/society/accountingParameters' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Ce endpoint retournera un JSON semblabe à celui-ci

```json
{
  // Section: Type de comptabilité
  "comptability_type_id": 1,
  "comptability_type": {
    "id": 1,
    "label": "Engagement",
    "code": "ENGA"
  },

  // Section: Type de dossier
  "mission_type_id": 1,
  "mission_type": {
    "id": 1,
    "label": "Tenue",
    "code": "TENU"
  },

  // Section: Comptes d'attentes
  "customer_waiting_account": "",
  "accounting_firm_waiting_account": "",

  // Identifiant du plan comptable étalon
  "accounting_plan_id": -100,
  "accounting_plan": {
    "id": -100,
    "label": "Etalon MYUNISOFT"
  },

  // Section: Paramètrage des comptes
  // Nombre maximum de caractères des comptes de tiers
  "max_car_third_p_account": 10,
  // Nombre maximum de caractères des autres comptes
  "max_car_general_account": 6,
  "auto_complete_account": true,

  // Section: Lettrage
  "account_income_lettering": {
    "id": 220880,
    "label": "758000 - PRODUITS DIV.GESTION"
  },
  "account_expense_lettering": {
    "id": 220805,
    "label": "658000 - CHARGES DIV.GEST.COU"
  },
  "diary_lettering": {
    "id": 5330,
    "label": "60 - JOURNAL OD LETTRAGE"
  },
  // Montant de l'écart maximum (en valeur absolue)
  "maximum_difference_amount": 0.9,

  // Section: OCR
  "enable_create_account_ocr": true,
  "account_purchases": {
    "id": 220739,
    "label": "607000"
  },
  "account_sales": {
    "id": 220850,
    "label": "707000"
  },
  "account_expense_report": {
    "id": 220773,
    "label": "625600"
  },
  "diary_purchases_id": 5320,
  "diary_purchases": {
    "id": 5320,
    "label": "01 - JOURNAL D'ACHATS"
  },
  "diary_sales_id": 5321,
  "diary_sales": {
    "id": 5321,
    "label": "02 - JOURNAL DE VENTES"
  },
  "expense_report_id": 5323,
  "expense_report": {
    "id": 5323,
    "label": "09 - JOURNAL NDF"
  },

  // Section: Immobilisations
  "annual_depreciation_period": 360,
  "diary_dotation_id": 5326,
  "diary_dotation": {
    "id": 5326,
    "label": "20 - JOURNAL D' OD"
  },

  // Section: Paramétrage des automatisations
  "enable_autolettering": true,
  "enable_RB_autoentries": true,

  // Section: Rapprochement
  "bank_reconciliation_state": true,

  // Section: Délais et modes de règlement
  // Identifiant Créancier Sepa
  "ics": "",
  // Clients
  "customer_payment_deadline_id": 3,
  "customer_payment_deadline": {
    "id": 3,
    "label": "30 jours fin de mois",
    "number_of_days": 30,
    "end_month": true,
    "day_number": null
  },
  "customer_reglement_type_id": 84779,
  "customer_reglement_type": {
    "id": 84779,
    "label": "Carte bleue"
  },
  // Fournisseurs
  "provider_payment_deadline_id": 2,
  "provider_payment_deadline": {
    "id": 2,
    "label": "45 jours net",
    "number_of_days": 45,
    "end_month": false,
    "day_number": null
  },
  "provider_reglement_type_id": 84783,
  "provider_reglement_type": {
    "id": 84783,
    "label": "Prélèvement"
  },

  // Section: Emprunts
  // Compte intérêts courus non échus(court terme)
  "short_account_interest_id": 11788187,
  "short_account_interest": {
    "id": 11788187,
    "label": "519800000000"
  },
  // Compte intérêts courus non échus(long terme)
  "account_interest_id": 22645572,
  "account_interest": {
    "id": 22645572,
    "label": "168800000000"
  },
  // Journal de comptabilisation des ICNE
  "diary_interest_id": 314004,
  "diary_interest": {
    "id": 314004,
    "label": "20 - JOURNAL D' OD"
  },

  // Section: Situations intermédiaires
  "diary_situation_id": null,

  // Section: Clients Douteux
  "account_prov_depreciation": null,
  "account_dotation_prov": null,
  "account_reprise_prov": null,
  "account_irrecoverable_debts": null,
  "account_irrecoverable_vat": null,
  "account_vat_regularize": null,
  "account_purchases_provider": null,
  "account_sales_customer": null,

  // Gestion des portefeuilles du dossier
  "wallets": [
    {
      "id": 1,
      "label": "TOUTES"
    }
  ]
}
```

## Mise à jour des paramètres

La mise à jour se fait avec la même route en `POST`. Le JSON attendu est celui retourné par le `GET` : récupérez les paramètres, modifiez les clés souhaitées puis renvoyez l'objet complet.

> [!WARNING]
> Le header `society-id` est requis avec un accès 🔹Cabinet.

```bash
$ curl --location --request POST 'https://api.myunisoft.fr/api/v1/society/accountingParameters' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    ...
    "enable_autolettering": false,
    ...
}'
```

## Lettrage automatique

La clé JSON correspondante est `enable_autolettering` (section `Paramétrage des automatisations`) :

- `true` : le lettrage automatique est activé sur le dossier
- `false` : le lettrage automatique est désactivé sur le dossier

Ce paramètre s'applique à l'ensemble du dossier. Le paramétrage du lettrage compte par compte n'est pas disponible via l'API.

## Type de Comptabilité

La clé JSON correspondante est `comptability_type_id` :

- **Comptabilité d'engagement** : `id 1`
- **Comptabilité de trésorerie** : `id 2`

## Type de Dossier

La clé JSON correspondante est `mission_type_id` :

- **Dossier en tenue** : `id 1`
- **Dossier en révision** : `id 2`

## Plan Comptable Étalon

Utilisez la clé `accounting_plan_id` pour définir le plan comptable étalon par défaut à utiliser.

Pour plus de détails ou pour récupérer les paramètres : [Récupérer le paramétrage des plans comptables étalons](./pcg_etalon.md)

## Portefeuilles

Le tableau avec la clé `wallets` permet d'assigner les portefeuilles d'appartenance du dossier.
Si besoin de récupérer l'intégralité des portefeuilles merci de consulter le guide [suivant](wallets.md).
