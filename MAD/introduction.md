# MAD

> [!WARNING] 
> Le format est encore au stade expérimental (des changements sont à prévoir)

MyUnisoft Accounting Data (raccourci en **MAD**) est un format JSON hybride supportant aussi bien l'export que l'import de données comptables.

Lors de la création de ce nouveau format, nos objectifs étaient variés;

- Produire des API comptables avec des contrats d'interfaces uniformes et versionnés (Nous permettant de mettre en place des cycles de vies et d'itérer plus sereinement sur des évolutions).
- Répondre à de nouveaux usages en intégrant des fonctionnalités et informations manquantes dans nos API actuelles.
- Améliorer les performances tout en garantissant la santé de nos infrastructures.
- Simplifier l'expérience d'intégration pour nos partenaires (respect des bonnes pratiques, schéma JSON etc).

Nos implémentations ont aussi la particularité d'avoir un support natif du format historique [Cegid TRA+PJ](./specs/FormatTRA.pdf).

## 📜 Schéma

Lors de vos développements, pour de l'import, il vous sera aussi possible de valider vos structures à l'aide de nos schémas JSON. ​Un schéma est un ensemble de règles permettant d'annoter et de valider une donnée au format JSON (Similaire aux schémas XML). Il existe des outils en ligne comme [JSON Schema Validator](https://www.jsonschemavalidator.net/) qui vous permettront d’expérimenter en temps réel la validation d’une structure JSON.​

- [Schéma JSON complet (V1.0.0)](./specs/v1.0.0/schema.json)

## 📑 Spécification

Un export complet d'un dossier de production vous renverra un JSON correspondant à l'interface ci-dessous:
```ts
interface MAD {
  metadata: {
    version: string;
    createdAt: number;
    producer: "MyUnisoft";
    additionalFreeProperties: Record<string, any>;
  };
  data: {
    accountingFolder: AccountingFolder;
    payments: Payment[];
    banks: Bank[];
    journals: Journal[];
    accounts: Account[];
    exercices: Exercice[];
    analytics: AnalyticalAxe[];
    entries: Entry[];
  };
}
```

Chaque interface / type présent au sein de la propriété `data` est définie ci-dessous;

### 👯 Les interfaces communes:
Ces interfaces et types sont régulièrement présents dans les différentes structures principales.

- [Adresse](./specs/v1.0.0/address.md)
- [Devise](./specs/v1.0.0/currency.md)
- [Compte Simplifié](./specs/v1.0.0/simplifiedAccount.md)

### 💃 Les interfaces principales:
- [Dossier de production (entreprise et/ou établissement)](./specs/v1.0.0/accountingFolder.md)
- [Écriture et Mouvements](./specs/v1.0.0/entries.md)
- [Exercice](./specs/v1.0.0/exercice.md)
- [Journal](./specs/v1.0.0/journal.md)
- [Compte](./specs/v1.0.0/account.md)
- [Axe et Section Analytique](./specs/v1.0.0/analytic.md)
- [Paiement](./specs/v1.0.0/payment.md)
- [Banque](./specs/v1.0.0/bank.md)

## 🌍 API

Les différentes API sont disponibles sur notre [postman en ligne](https://docs.api.myunisoft.fr/) au sein du dossier racine MAD.

> [!IMPORTANT]
> Toutes nos API vous demanderont de fournir le numéro de version MAD. La dernière version est actuellement `1.0.0`.

- [Export des écritures et mouvements](./api/entries.md)

---

⬅️ [README](../README.md)
