import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "API Partenaire",
  description: "Documentation technique",
  lang: 'fr-FR',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: "Table des matières",
    nav: [
      { text: '🏠 Accueil', link: '/' },
      {
        text: '📚 Documentation',
        link: '/documentation',
        activeMatch: '/[authentication|endpoints|accounting]/'
      },
      {
        text: 'MAD',
        link: '/MAD/introduction.md',
        activeMatch: "/MAD/"
      },
      { text: 'Postman', link: 'https://docs.api.myunisoft.fr/' },
    ],
    sidebar,
    search: {
      provider: "local"
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MyUnisoft/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/myunisoft' }
    ],
    logo: {
      light: "https://res.cloudinary.com/postman/image/upload/t_team_logo_pubdoc/v1/team/e4951fd8010295ee229518551a558e0d74e9faf4c6ba3000b65cc04fad62789a",
      dark: "/images/logo/white.svg"
    }
  },
  base: "/api-partenaires/",
  vite: {
    assetsInclude: ["**/*.PNG"]
  },
})
