---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Balance

## Introduction

La balance d'un compte est le calcul de tous les montants des lignes d'écriture lié au compte.  
- Le calcul est fait en soustrayant l'ensemble des crédits à l'ensemble des débits : `SUM(le.debit - le.credit)` ('le' étant chaque lignes d'écritures)  
- Seul les journaux de type `OD_EXC` (OD Extracomptable) ne sont pas prit en compte dans ce calcul

```json
[
  {
    "number": "129000000000",
    "name": "RESULTAT EX. PERTES",
    "balance": 6260482.6,
  },
  {
    "number": "131000000000",
    "name": "SUBVENTIONS D EQUIPEMENT",
    "balance": -10000,
  }
  ...
]
```

## Interfaces

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
interface SimplifiedAccount {
  number: string;
  name: string;
}

interface Balance extends SimplifiedAccount {
  balance: number;
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
