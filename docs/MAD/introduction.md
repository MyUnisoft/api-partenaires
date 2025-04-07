---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

# MAD

MyUnisoft Accounting Data (raccourci en **MAD**) est un format JSON hybride supportant aussi bien l'export que l'import de données comptables.

Lors de la conception de ce nouveau format, nos objectifs étaient multiples :

- Élaborer des API comptables dotées de contrats d'interfaces uniformes et versionnés, ce qui nous permettrait de mettre en place des cycles de vie et d'itérer de manière plus sereine sur les évolutions à venir.
- Répondre à de nouveaux besoins en intégrant des fonctionnalités et des informations qui manquaient dans nos API existantes.
- Améliorer les performances tout en garantissant la stabilité de nos infrastructures.
- Simplifier l'expérience d'intégration pour nos partenaires (respect des bonnes pratiques, schéma JSON etc).

Nos implémentations ont aussi la particularité d'avoir un support natif du format historique <a href="https://github.com/MyUnisoft/api-partenaires/blob/main/docs/MAD/TRA.pdf" target="_blank">Cegid TRA+PJ</a>.

> [!NOTE]
> Pour en découvrir plus sur nos choix techniques nous vous invitons à lire [Designing MyUnisoft Next-Gen Accounting APIs](https://dev.to/fraxken/designing-myunisoft-next-gen-accounting-apis-1mn)

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
- [Pièce/documents joints à une écriture et/ou mouvements](./specs/v1.0.0/attachment.md)
- [Commentaire](./specs/v1.0.0/comments.md)

### 💃 Les interfaces principales:
- [Cabinet](./specs/v1.0.0/accountingFirm.md)
- [Dossier de production (entreprise et/ou établissement)](./specs/v1.0.0/accountingFolder.md)
- [Écriture et Mouvements](./specs/v1.0.0/entries.md)
- [Exercice](./specs/v1.0.0/exercice.md)
- [Journal](./specs/v1.0.0/journal.md)
- [Compte](./specs/v1.0.0/account.md)
- [Axe et Section Analytique](./specs/v1.0.0/analytic.md)
- [Paiement](./specs/v1.0.0/payment.md)
- [Banque](./specs/v1.0.0/bank.md)
- [TVA](./specs/v1.0.0/vat.md)
- [Balance](./specs/v1.0.0/balance.md)
- [Associés](./specs/v1.0.0/associates.md)

## 🌍 API

Les différentes API sont disponibles sur notre [Postman en ligne](https://docs.api.myunisoft.fr/) dans le dossier racine intitulé **MAD**.

> [!IMPORTANT]
> Toutes nos API requièrent que vous fournissiez le numéro de version MAD. La dernière version disponible est actuellement `1.0.0`

- [Export complet (format JSON ou TRA)](./api/export-all.md)
- [Export du cabinet](./api/accountingFirm.md)
- [Export du dossier de production](./api/accountingFolder.md)
- [Export des comptes](./api/account.md)
- [Export des journaux](./api/journal.md)
- [Export des exercices](./api/exercice.md)
- [Export des axes et sections analytiques](./api/analytic.md)
- [Export des banques](./api/bank.md)
- [Export des méthodes de paiement](./api/payment.md)
- [Export des TVAs](./api/vat.md)
- [Export des balances de comptes](./api/balance.md)
- [Export des associés](./api/associates.md)
- [Export des commentaires](./api/comments.md)

---

MAD vous permet de récupérer les mouvements (lignes d'écriture) sous deux formes :

- Groupés par une entité/abstraction appelée [Écriture](https://www.compta-facile.com/qu-est-ce-qu-une-ecriture-comptable/).
- À plat (équivalent à un **FEC**, mais plus complet).

L'**écriture** garantit une liste de mouvements équilibrés sur plusieurs racines de comptes. Toutefois, cela peut poser problème si votre besoin est de filtrer des données selon des critères spécifiques, tels qu'une racine de compte (par exemple, 40 ou 41) ou par lettrage.

Les deux API offrent des fonctionnalités différentes et des options de filtrage distinctes.

- [Export des écritures (+ mouvements associés)](./api/entries.md)
- [Export des mouvements](./api/movements.md)
- [Récupérer une écriture et ses mouvements](./api/entry.md)

> [!IMPORTANT]
> Afin de limiter les extractions abusives de mouvements, nous avons volontairement restreint l'export à un exercice par requête API.
> Pour extraire l'intégralité des mouvements, nous vous recommandons d'itérer séquentiellement sur l'ensemble des exercices ou d'utiliser [l'API d'extraction d'un dossier de production au complet](./api/export-all.md).
