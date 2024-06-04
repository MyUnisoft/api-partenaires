interface HttpTextOptions {
  method: "GET" | "POST" | "PUT" | "DEL" | "PATCH";
  endpoint: string;
  description?: string;
}

function httpText(
  options: HttpTextOptions
) {
  const top = `<b class="${options.method}">${options.method}</b> ${options.endpoint}`;

  return typeof options.description === "string" ?
    `${top}<br><span class="http_description">${options.description}<span>` : top;
}

export default {
  "/": [
    {
      text: "Introduction",
      link: "/documentation.md"
    },
    {
      text: "🔐 Authentification",
      items: [
        {
          text: "Partenaire",
          link: "/authentication/partenaire.md"
        },
        {
          text: "Cabinet",
          link: "/authentication/cabinet.md"
        }
      ]
    },
    {
      text: "💡 A savoir",
      items: [
        {
          text: "🔸 Usage API avec l'accès société",
          link: "/endpoints/societe.md"
        },
        {
          text: "🔹 Usage API avec l'accès cabinet",
          link: "/endpoints/cabinet.md"
        },
        {
          text: "Routes accessibles",
          link: "/endpoints/keyinfo.md"
        },
        {
          text: "Rate Limiting",
          link: "/ratelimit.md"
        },
        {
          text: "Gestion des codes d'erreurs",
          link: "/erreurs.md",
        },
      ]
    },
    {
      text: "📌 Guides",
      items: [
        {
          text: "Webhooks",
          link: "/webhooks.md",
        },
        {
          text: "API cabinets",
          items: [
            {
              text: httpText({
                method: "GET",
                endpoint: "/society",
                description: "Récupérer les sociétés"
              }),
              link: "/accounting/society.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/society/accountingParameters",
                description: "Récupérer les paramètres comptabilité d'une société"
              }),
              link: "/accounting/firm/accounting_parameters.md"
            },
            {
              text: httpText({
                method: "POST",
                endpoint: "/society",
                description: "Création et mise à jour d'une société"
              }),
              link: "/accounting/firm/create_society.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/users_v2",
                description: "Récupérer les personne physiques"
              }),
              link: "/accounting/firm/users.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/accounting/access",
                description: "Liste des dossiers accessibles pour un utilisateur"
              }),
              link: "/accounting/firm/dossier_accessible.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/society/filiale_associate",
                description: "Récupérer les filiales associés à une entreprise"
              }),
              link: "/accounting/firm/filiale_associate.md"
            }
          ],
          collapsed: true
        },
        {
          text: "API comptabilités",
          items: [
            {
              text: "Import",
              collapsed: true,
              items: [
                {
                  text: "JSON",
                  link: "/accounting/folder/import/json.md"
                },
                {
                  text: "FEC",
                  link: "/accounting/folder/import/fec.md"
                },
                {
                  text: "TRA+PJ",
                  link: "/accounting/folder/import/tra.md"
                },
                {
                  text: "Factur-X",
                  link: "/accounting/folder/import/facturx.md"
                }
              ]
            },
            {
              text: "Export",
              collapsed: true,
              items: [
                {
                  text: "JSON",
                  link: "/accounting/folder/export/ecritures.md"
                },
                {
                  text: "FEC",
                  link: "/accounting/folder/export/FEC.md"
                },
                {
                  text: "EDI",
                  link: "/accounting/folder/export/EDI.md"
                }
              ]
            }
          ],
          collapsed: false,
          collapsable: true
        },
        {
          text: "⏩ Liste complète des guides",
          link: "/documentation.md#📌-documentation"
        },
      ]
    }
  ],
  "/MAD/": [
    {
      text: "MyUnisoft Accounting Data",
      items: [
        {
          text: "💃 Introduction",
          link: "/MAD/introduction"
        },
        {
          text: "📜 Spécification (v1.0.0)",
          collapsed: true,
          items: [
            {
              text: "Dossier de production",
              link: "/MAD/specs/v1.0.0/accountingFolder"
            },
            {
              text: "Écriture et Mouvements",
              link: "/MAD/specs/v1.0.0/entries"
            },
            {
              text: "Compte",
              link: "/MAD/specs/v1.0.0/account"
            },
            {
              text: "Banque",
              link: "/MAD/specs/v1.0.0/bank"
            },
            {
              text: "Exercice",
              link: "/MAD/specs/v1.0.0/exercice"
            },
            {
              text: "Journal",
              link: "/MAD/specs/v1.0.0/journal"
            },
            {
              text: "Analytique",
              link: "/MAD/specs/v1.0.0/analytic"
            },
            {
              text: "Paiement",
              link: "/MAD/specs/v1.0.0/payment"
            },
            {
              text: "Pièce/documents joints",
              link: "/MAD/specs/v1.0.0/attachment"
            },
            {
              text: "Devise",
              link: "/MAD/specs/v1.0.0/currency"
            },
            {
              text: "Adresse",
              link: "/MAD/specs/v1.0.0/address"
            },
            {
              text: "Compte Simplifié",
              link: "/MAD/specs/v1.0.0/simplifiedAccount"
            }
          ]
        },
        {
          text: "🌍 API",
          collapsable: true,
          collapsed: false,
          items: [
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/entries",
                description: "Ecritures et mouvements"
              }),
              link: "/MAD/api/entries.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/entry?id=X",
                description: "Récupérer une écriture par ID"
              }),
              link: "/MAD/api/entry.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/accountingFolder",
                description: "Dossier de production / Entreprise"
              }),
              link: "/MAD/api/accountingFolder.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/account"
              }),
              link: "/MAD/api/account.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/exercices"
              }),
              link: "/MAD/api/exercice.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/journals"
              }),
              link: "/MAD/api/journal.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/banks"
              }),
              link: "/MAD/api/bank.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/payments",
                description: "Méthodes de paiement"
              }),
              link: "/MAD/api/payment.md"
            },
            {
              text: httpText({
                method: "GET",
                endpoint: "/mad/analytics",
                description: "Axes et sections analytiques"
              }),
              link: "/MAD/api/analytic.md"
            }
          ]
        }
      ]
    }
  ]
}
