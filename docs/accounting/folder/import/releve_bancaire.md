---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Importer un relevé bancaire (CFONB 120 / OFX)

Ce guide vous accompagne dans le dépôt d'un fichier de relevé bancaire (**CFONB 120** ou **OFX**) afin d'alimenter les mouvements bancaires d'un dossier.

## API

La route <https://api.myunisoft.fr/api/v1/releve_bancaire> permet de déposer le fichier de relevé bancaire. Le contenu du fichier est envoyé **brut** dans le corps de la requête (`application/octet-stream`) — pas de `multipart/form-data`, pas d'enveloppe JSON, pas de base64.

```bash
curl --location --request POST \
'https://api.myunisoft.fr/api/v1/releve_bancaire?filename=flux.ofx' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--header 'society-id: 1' \
--header 'Content-Type: application/octet-stream' \
--data-binary '@/C:/flux.ofx'
```

> [!IMPORTANT]
> L'en-tête **society-id** est obligatoire (id du dossier concerné). Une valeur vide ou la chaîne `undefined` est rejetée (erreur `GBL10`) : envoyez un id numérique.

## Paramètres (query string)

| clé | description | obligatoire |
| --- | --- | :---: |
| `filename` | nom du fichier d'origine (ex. `flux.ofx`). Détermine le format de lecture (voir ci-dessous) et sert de libellé au suivi d'import. | ✅ |
| `without_checking` | à `1`, force le ré-import d'un relevé **CFONB** déjà importé. | ❌ |

## Choix du format

Le format est déduit **uniquement de l'extension** présente dans `filename` — le contenu du corps n'est pas analysé pour le deviner :

| `filename` | Format attendu du corps |
| --- | --- |
| se termine par `.ofx` (insensible à la casse) | OFX |
| toute autre extension, ou `filename` absent | CFONB 120 |

> [!WARNING]
> Un fichier OFX envoyé avec `filename=releve.txt` sera lu comme du CFONB et l'appel échouera. Transmettez toujours le nom de fichier réel.

### Contraintes par format

**CFONB 120**
- Enregistrements de 120 caractères, types `01` (ancien solde), `04` (mouvement), `07` (nouveau solde) et `05` (libellé complémentaire).
- Les types `01`, `04` et `07` doivent porter une date valide au format `JJMMAA`.
- Un enregistrement non conforme interrompt tout l'import.

**OFX**
- Le fichier doit contenir une balise `<OFX>`, une balise `<CURDEF>` (devise) et au moins un bloc `<BANKACCTFROM>`.
- Balises exploitées : `<BANKID>`, `<BRANCHID>`, `<ACCTID>`, `<DTPOSTED>`, `<TRNAMT>`, `<NAME>`, `<FITID>`, `<MEMO>`.
- L'absence de `<CURDEF>` ou de `<BANKACCTFROM>` fait échouer l'import.

## Réponse

En cas de succès, l'API retourne un status code `200` :

```json
{
  "rows_number": 128
}
```

| clé | type | description |
| --- | --- | --- |
| `rows_number` | number | Nombre de mouvements effectivement intégrés. |

> [!NOTE]
> `rows_number` peut être inférieur au nombre de lignes du fichier : les mouvements de montant nul sont écartés, et les relevés CFONB déjà importés sont ignorés silencieusement (utilisez `without_checking=1` pour forcer le ré-import).

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
