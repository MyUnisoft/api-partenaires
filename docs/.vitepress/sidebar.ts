// Import Node.js Dependencies
import fs from "node:fs";
import { resolve } from "node:path";

interface scanDirOptions {
  collapsed?: boolean;
}

function scanDir(
  pathName: string,
  options: scanDirOptions = {}
) {
	return getMsg(
    resolve(__dirname, `../../${pathName}`),
    options
  );
}

function getMsg(
  path: string,
  options: scanDirOptions
) {
  const { collapsed = false } = options;

	let res = fs
    .readdirSync(path)
    .filter(item => String(item) !== '.DS_Store');
	if (!res) {
    console.warn('Empty dir');

    return;
  }

  return res
    .map((item) => {
      if (String(item).endsWith('.md')) {
        return {
          text: toTitle(item.split('.')[0]),
          link: resolve(path, item)
        };
      }
      else if(!item.includes("images") && !item.includes("specs")) {
        return {
          text: toTitle(item.split('.')[0]),
          items: getMsg(resolve(path, item), options),
          collapsed,
          collapsible: true
        };
      }
    })
    .map((item) => {
      if (item?.link) {
        item.link = translateDir(item.link);
      }

      return item;
    });
}

function translateDir(path: string): string {
	return path.replace(/\\/g, '/').split('docs')[1].split('.')[0];
}

function toTitle(text: string): string {
  const words = text.split(/-|_/);

  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default {
  "/": [
    {
      text: "🐤 Introduction",
      link: "/documentation.md"
    },
    {
      text: "🔐 Authentification",
      items: [
        {
          text: "Partenaire",
          link: "authentication/authentication.md"
        },
        {
          text: "Cabinet",
          link: "authentication/authentication_by_email.md"
        }
      ]
    },
    {
      text: "📚 Endpoints",
      items: [
        {
          text: "🔸 Accès société (dossier)",
          link: "endpoints/societe.md"
        },
        {
          text: "🔹 Accès cabinet",
          link: "endpoints/cabinet.md"
        },
        {
          text: "🔑 Routes accessibles",
          link: "endpoints/endpoints_accessibles.md"
        }
      ]
    },
    {
      text: "📌 Guides",
      items: [
        {
          text: 'Gestion des codes d\'erreurs',
          link: '/erreurs.md',
        },
        {
          text: 'Webhooks',
          link: '/webhooks.md',
        },
        {
          text: "API cabinets",
          items: [
            {
              text: `<b class="GET">GET</b> /society`,
              link: "accounting/society.md"
            },
            {
              text: `<b class="GET">GET</b> /society/accountingParameters`,
              link: "accounting/folder/accounting_parameters.md"
            },
            {
              text: `<b class="POST">POST</b> /society`,
              link: "accounting/firm/create_society.md"
            },
            {
              text: `<b class="GET">GET</b> /users_v2`,
              link: "accounting/firm/users.md"
            },
            {
              text: `<b class="GET">GET</b> /accounting/access`,
              link: "accounting/firm/dossier_accessible.md"
            },
            {
              text: `<b class="GET">GET</b> /society/filiale_associate`,
              link: "accounting/folder/filiale_associate.md"
            }
          ],
          collapsed: true
        },
        {
          text: "API comptabilités",
          // items: scanDir('docs/accounting/folder'),
          items: [
            {
              text: "▶️ Import",
              collapsed: true,
              items: [
                {
                  text: "JSON",
                  link: "accounting/folder/import/json.md"
                },
                {
                  text: "FEC",
                  link: "accounting/folder/import/fec.md"
                },
                {
                  text: "TRA+PJ",
                  link: "accounting/folder/import/tra.md"
                },
                {
                  text: "Factur-X",
                  link: "accounting/folder/import/facturx.md"
                }
              ]
            },
            {
              text: "◀️ Export",
              collapsed: true,
              items: [
                {
                  text: "JSON",
                  link: "accounting/folder/export/ecritures.md"
                },
                {
                  text: "FEC",
                  link: "accounting/folder/export/FEC.md"
                },
                {
                  text: "EDI",
                  link: "accounting/folder/export/EDI.md"
                }
              ]
            },
            {
              text: "Comptes",
              collapsed: true,
              items: []
            }
          ],
          collapsed: false,
          collapsable: true
        }
      ]
    }
  ],
  "/MAD/": [
    {
      text: "MAD",
      items: [
        {
          text: "💃 Introduction",
          link: "MAD/introduction.md"
        },
        {
          text: "📜 Spécification (v1.0.0)",
          collapsed: true,
          items: [
            {
              text: "Dossier de production",
              link: "MAD/specs/v1.0.0/accountingFolder.md"
            },
            {
              text: "Écriture et Mouvements",
              link: "MAD/specs/v1.0.0/entries.md"
            },
            {
              text: "Compte",
              link: "MAD/specs/v1.0.0/account.md"
            },
            {
              text: "Banque",
              link: "MAD/specs/v1.0.0/bank.md"
            },
            {
              text: "Exercice",
              link: "MAD/specs/v1.0.0/exercice.md"
            },
            {
              text: "Journal",
              link: "MAD/specs/v1.0.0/journal.md"
            },
            {
              text: "Analytique",
              link: "MAD/specs/v1.0.0/analytic.md"
            },
            {
              text: "Paiement",
              link: "MAD/specs/v1.0.0/payment.md"
            },
            {
              text: "Devise",
              link: "MAD/specs/v1.0.0/currency.md"
            },
            {
              text: "Adresse",
              link: "MAD/specs/v1.0.0/address.md"
            },
            {
              text: "Compte Simplifié",
              link: "MAD/specs/v1.0.0/simplifiedAccount.md"
            }
          ]
        },
        {
          text: "🌍 API",
          collapsed: true,
          items: [
            {
              text: "Export des comptes",
              link: "MAD/api/account.md"
            },
            {
              text: "Export des écritures et mouvements",
              link: "MAD/api/entries.md"
            },
            {
              text: "Export des exercices",
              link: "MAD/api/exercice.md"
            },
            {
              text: "Export des journaux",
              link: "MAD/api/journal.md"
            },
            {
              text: "Export des banques",
              link: "MAD/api/bank.md"
            },
            {
              text: "Export des méthodes de paiement",
              link: "MAD/api/payment.md"
            },
          ]
        }
      ]
    }
  ]
}
