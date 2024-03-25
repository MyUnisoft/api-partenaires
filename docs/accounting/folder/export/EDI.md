# Récupérer la déclaration EDI d'un exercice comptable

Documentation (Guide) sur la récupération d'un fichier de déclaration EDI.

> [!WARNING]
> L'accès à cet endpoint n'est pas automatique (si vous en avez besoin, merci de demander aux équipes MyUnisoft de vous autoriser l'accès).

## API

```
curl --location --request GET 'https://api.myunisoft.fr/api/v1/accounting/export/edi?exerciceId={{exerciceId}}' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

La route prend deux arguments dont un optionnel pour l'accès société:
- **exerciceId** (l'id de l'exercice sur lequel vous souhaitez récupérer le fichier EDI).
- **accountingFolderId** (l'id du dossier de production/la société). N'est pas obligatoire avec 🔸 Accès par société.

> [!NOTE]
> Pour récupérer l'id d'un exercice, nous vous invitons à consulter le guide [Récupérer les exercices d'un dossier de production](../exercices.md)

l'API retourne le fichier directement sous la forme d'un stream.

## Gestion des erreurs

Il est possible que l'API tombe en erreur pour plusieurs raisons, la plus fréquente est l'impossibilité de récupérer le fichier EDI. Dans ce cas-là l'API retournera l'erreur suivante avec un statusCode 404:

```json
{
    "error": {
        "code": "ERR-EDI-FILE-NOT-FOUND",
        "message": "No edi file found on accounting folder 56 for exercice 98",
        "details": {}
    }
}
```

Il existe aussi deux autres erreurs possibles (avec statusCode 400);

- `ACCOUNTING-FOLDER-NOT-FOUND` (L'id du dossier de production ne correspond à rien sur MyUnisoft).
- `MISSING-ACCOUNTING-FOLDER-ID` (L'id du dossier de production est manquant, possible dans le cadre d'un 🔹 Accès cabinet)
