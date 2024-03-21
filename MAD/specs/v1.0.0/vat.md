<span id="readme-top"></span>

# TVA

Dans MyUnisoft les paramètres de TVA peuvent être récupérés dans `Paramètres` > `Tenue` > `Plan comptable` > `Liste TVA`.

![](../../../docs/images/liste_tva.PNG)

> [!TIP]
> Développeur ? Débutant en comptabilité ? Nous vous recommandons les ressources suivantes:
> - [TVA collectée et TVA déductible](https://intia.fr/fr/ressources/lexique/tva-collectee-et-tva-deductible/)

## Exemple

```json
{
  "producerId": "571274",
  "customerReferenceCode": "07",
  "rate": 2.1,
  "account": {
    "deductible": {
      "producerId": "11788138",
      "number": "44566000",
      "name": "TVA DEDUCT.S/ACHATS"
    },
    "collected": {
      "producerId": "11788145",
      "number": "44571400",
      "name": "TVA COLLECTEE"
    }
  },
  "type": "Op Imposables DOM ",
  "exigibility": "Débit (facturation)",
  "additionalProducerProperties": {
    "typeCode": "OPOIMDOM",
    "exigibilityCode": "DEB"
  }
}
```

Les taux possibiles sont: 0%, 0.90%, 1.05%, 1.75%., 2.10%, 5.5%, 8.5%, 10% et 20%

### Note sur la construction d'un label TVA

Les TVA sur MyUnisoft ne sont pas labellisés (ce qui peut être problématique dans certaines interconnexions). Si vous avez ce besoin il vous sera nécessaire de construire le label vous-même.

Nous vous recommandons de conserver le "**code**" ce qui vous permettra de visuellement faire le lien avec ce qui est présent dans My Unisoft.

### Types

| id | label |
| --- | --- |
| 1 | Bien et services |
| 2 | Immobilisation |
| 3 | Auto-liquidation |
| 4 | Non soumis / Exclu |
| 6 | Autres opérations imposables basées sur le CA (02/A2) |
| 7 | Autoliquidation SSBAT (02) |
| 8 | Livraison soi-même (02) |
| 9 | Autoliquidation intra S (2A/A3) |
| 10 | Autoliquidation import (2B) |
| 11 | Autoliquidation intra B (03/B2) |
| 12 | Export (04/E1) |
| 13 | Autres opérations non imposables (05/E2) |
| 14 | OP non imposables ventes à distances taxables état membre (5A/E3) |
| 15 | Livraisons intra (06/F2) |
| 16 | OP non imposables ventes B ou S par assujetti non établi en France  (7A/F7) |
| 17 | OP non imposables en franchise de Taxe (07/F6) |
| 18 | Autres opérations imposables basées sur les charges (02/A2) |
| 19 | Livraisons d'électricité (6A/F3) |
| 20 | Tva sur marge |
| 21 | Autoliquidation Importation (A4) |
| 22 | Autoliquidation Pétro (2D/B1) |
| 23 | Autoliquidation sortie de régime (A5) |
| 24 | OP non taxée importations (E4) |
| 25 | OP non taxée sortie de régime (E5) |
| 26 | OP non taxée importations  hors pétro sous régime susp (E6) |
| 27 | OP non taxée Acquisition intra (F1) |
| 28 | OP non taxée Importations pétro sous régime susp (F5) |

### Exigibilité

| id | label |
| --- | --- |
| 1 | Débit (facturation) |
| 2 | Encaissement / Décaissement |
| 3 | Mixte |


## Interfaces

<details open>
<summary>TypeScript</summary>

```ts
interface Vat {
  producerId: string;
  customerReferenceCode: string;
  rate: number;
  account: {
    deductible: Required<SimplifiedAccount> | null;
    collected: Required<SimplifiedAccount> | null;
  } | null;
  type: string
  exigibility: string;
  additionalProducerProperties: {
    typeCode: string;
    exigibilityCode: string;
  }
}
```
</details>

<details>
<summary>JSON Schema</summary>

TBC
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

---

⬅️ [Introduction MAD](../../introduction.md)
