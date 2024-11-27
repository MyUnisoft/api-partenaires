// Import Node.js Dependencies
import fs from "node:fs";
import path from "node:path";

// Import Third-Party Dependencies
import { defineConfig } from "vitepress";

// Import Internal Dependencies
import sidebar from "./sidebar";

function getCarouselImageList() {
  const imagePaths = path.join(process.cwd(), "docs", "public");
  const filePaths = fs.readdirSync(imagePaths, { recursive: true }) as string[];
  const data = filePaths
    .filter((filePath) => filePath.includes(path.normalize("images/carousel/")))
    .map((filePath) => ({ path: filePath, name: path.parse(filePath).name }));

  return JSON.stringify(data)
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "API Partenaire",
  description: "Documentation technique",
  lang: "fr-FR",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "Table des matières",
    nav: [
      {
        text: "🏠 Accueil",
        link: "/"
      },
      {
        text: "📚 Documentation",
        link: "/documentation",
        activeMatch: "^((?:\/(?!MAD)).+)$"
      },
      {
        text: "⚡ MAD",
        link: "/MAD/introduction.md",
        activeMatch: "/MAD/"
      },
      { text: "Postman", link: "https://docs.api.myunisoft.fr/" },
    ],
    sidebar,
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/MyUnisoft/api-partenaires" },
      { icon: "linkedin", link: "https://www.linkedin.com/company/myunisoft" }
    ],
    logo: {
      light: "/images/logo/dark.png",
      dark: "/images/logo/white.svg"
    },
    editLink: {
      pattern: "https://github.com/MyUnisoft/api-partenaires/edit/main/docs/:path"
    }
  },
  markdown: {
    theme: {
      light: "github-light-default",
      dark: "monokai"
    }
  },
  vite: {
    assetsInclude: ["**/*.PNG"],
    define: {
      CAROUSEL_IMAGE_LIST: getCarouselImageList()
    }
  },
})
