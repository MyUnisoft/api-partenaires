# Gérer l'analytique d'une société (dossier)

Ce guide a pour objectif de vous aider à gérer l'analytique d'un dossier MyUnisoft par API.

Dans MyUnisoft la configuration de l'analytique s'effectue à partir de: `Paramètres` > `Tenue` > `Analytique`.

> ⚠️ Note: par défaut l'analytique n'est pas activée.

![](./images/analytique.PNG)

L'intégralité des routes présentées dans ce guide est disponible sur le postman en ligne (dossier **Analytic**). Les interfaces TypeScript peuvent être consultées en ligne [ici](https://myunisoft.github.io/tsd/modules/Windev.Analytique.html).

## Ubiquitous language

| Terme | Description |
| --- | --- |
| Axe | Un axe est une **analyse spécifique** de la comptabilité. L’axe est proposé en général sur les comptes 6 et 7 (voire 2).<br>Ils permettent de catégoriser les écritures afin de pouvoir les suivre et les analyser. Ils peuvent par exemple indiquer de quel projet, département, établissement provient une écriture. <br> Chaque axe possède au minimum une section “**ATTENTE**” qui sera la valeur sélectionnée/assignée par défaut. |
| Section | Les **sections** correspondent à un sous-élément de l’axe. C’est sur les sections que les répartitions sont faites.<br> Chaque section est affiliée à un compte (ou plus précisément à une classe de comptes). |
| Clé de répartition | Permets de spécifier les règles de répartition (**ventilation**) pour les sections d’un **Axe**. Ces règles seront utilisées par le back-end pour automatiquement ventiler les écritures. |
| Ventilation | La ventilation comptable est une technique utilisée en comptabilité, permettant de répartir les entrées ou les sorties de fonds sur un nombre de sections donné. <br> La ventilation comptable permet la `répartition` de **charges** et de **produits**.<br>[Qu’est-ce que la ventilation comptable ?](https://debitoor.fr/termes-comptables/ventilation-comptable) |
| Charges & Produits | Corresponds aux comptes de classe **6** et **7** du plan comptable général. |

Lien bonus: [Comptabilité analytique : définition, rôle et exemple de calculs de coûts](https://www.compta-facile.com/comptabilite-analytique-definition-utilite-calcul-de-couts/)

## Axes

La route `https://api.myunisoft.fr/api/v1/axes` permet de récupérer l'intégralité des axes pour un dossier.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/axes' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Lors d'un retour positif vous devriez avoir un JSON identique à celui ci-dessous:
```json
[
  {
    "id_axe": 41,
    "code": "ANA002",
    "label": "REGIONS",
    "id_societe": 3,
    "id_section_default": 66
  },
  {
    "id_axe": 39,
    "code": "ANA001",
    "label": "PAYS",
    "id_societe": 3,
    "id_section_default": 72
  },
  {
    "id_axe": 45,
    "code": "code001",
    "label": "EQUIPE",
    "id_societe": 3,
    "id_section_default": 74
  },
  {
    "id_axe": 47,
    "code": "code0023",
    "label": "RACE",
    "id_societe": 3,
    "id_section_default": 82
  }
]
```

> Il est possible de récupérer un axe précis par l'id, exemple avec l'id 41: https://api.myunisoft.fr/api/v1/axes/41

## Sections

La route `https://api.myunisoft.fr/api/v1/axes/{{id_axe}}/sections` permet de récupérer l'intégralité des sections pour un axe identifié.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/{{id_axe}}/sections' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Lors d'un retour positif vous devriez avoir un JSON identique à celui ci-dessous:
```json
[
  {
    "id_section_analytique": 1,
    "code": "TEAM",
    "label": "Section TEAM",
    "id_axe": 41,
    "account": "601000",
    "closed": false,
    "isdefault": false
  }
]
```

Voici une interface TypeScript qui décrit une section:
```ts
export interface Section {
  id_section_analytique: number;
  code: string;
  label: string;
  id_axe: number;
  account: string;
  closed: boolean;
  isdefault: boolean;
}
```

Il est possible de récupérer une section par son id (mais aussi de récupérer la section par défaut).

- `https://api.myunisoft.fr/api/v1/sections/{{id_section}}`
- `https://api.myunisoft.fr/api/v1/axes/{{id_axe}}/defaultsection`

## Clés de répartition
Par défaut sans configuration le back-end utilisera le numéro du compte pour effectuer la répartition correctement (ou sur la section "en attente" si le compte ne correspond à aucune section).

Néanmoins il est possible de configurer la répartition directement au sein de l'interface MyUnisoft:
![](./images/analytique_cle_repartition.PNG)

La route `https://api.myunisoft.fr/api/v1/axes/{{id_axe}}/repartition_keys` permet de récupérer l'intégralité des clés de répartitions pour un axe identifié.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/{{id_axe}}/repartition_keys' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Lors d'un retour positif vous devriez avoir un JSON identique à celui ci-dessous:
```json
[
  {
    "id_axe": 3744,
    "id_repartion_key": 50,
    "condition": "61",
    "key": "CLE_BUG"
  }
]
```

> Il est possible de récupérer une clé de répartition avec l'id de l'axe + l'id de clé: `https://api.myunisoft.fr/api/v1/axes/{{id_axe}}/repartition_keys/{{id_repartition_key}}`

### Taux de répartitions par section

L'API vous permet de récupérer les taux des répartitions par section à l'aide de l'id de la clé de répartition.

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/repartition_keys/{{id_repartition_key}}/repartition' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

La route retournera un tableau d'objet défini par l'interface TypeScript suivante;
```ts
interface RateOfRepartitionKey {
  id_section_from_key: number;
  id_section: number;
  id_repartition_key: number;
  rate: number;
}
```

> 📢 Cela correspond à la partie droite de l'image un peu plus haut.

---

## Import d'écritures avec analytique
Les formats supportant l'analytique chez MyUnisoft sont:
- TRA + PJ
- JSON (voir la clé `analytique` sur chaque ligne de l'écriture).

À noter que pour le format JSON il est possible de récupérer la répartition directement par API:

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/repartitions?account=601000&value=1000' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

L'API prend le numéro du compte (**account**) ainsi que la valeur (le **montant**) a ventilé. Si vous voulez mieux comprendre comment l'endpoint fonctionne nous vous invitons à lire le chapitre sur la gestion des clés de répartitions.

La route retournera un tableau défini par l'interface TypeScript `AnalyticRepartition`.

```ts
interface AnalyticRepartition {
  id_axe: number;
  code: string;
  label: string;
  repartition: RepartitionInfo[];
}

interface RepartitionInfo {
  id_section: number;
  code: string;
  label: string;
  rate: number;
  amount: number;
}
```

Le JSON retourné sera à utiliser pour la création d'une écriture au format JSON. Voir le guide [Création d'une entrée comptable avec le format JSON](./entry_json.md) pour plus d'informations.

## Export des écritures avec analytique
À ce jour nous n'avons pas encore d'endpoint qui supporte un export de toutes les écritures + les répartitions analytique. Nos équipes travaillent à l'ajout des répartitions sur POST /entries.

Il est néanmoins possible (mais **fortement déconseillé** ⚠️) de récupérer la répartition à l'aide de l'id de la ligne d'écriture (le mouvement).

```bash
$ curl --location --request GET 'https://api.myunisoft.fr/api/v1/analytics/line_entries/{{id_line_entry}}/repartitions' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

Le retour sera là aussi identique à la définition `AnalyticRepartition` présent dans le chapitre précédent.
