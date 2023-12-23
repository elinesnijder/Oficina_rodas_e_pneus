// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oficina Rodas & Pneus, LDA.',
  tagline: 'Até acreditas em deus',
  favicon: 'img/LOGO.png',

  url: 'https://github.com',
  baseUrl: '/Oficina_rodas_e_pneus/',

  organizationName: 'elinesnijder', 
  projectName: 'Oficina_rodas_e_pneus', 
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Social card.png',
      navbar: {
        title: 'Rodas & Pneus',
        logo: {
          alt: 'Logo Oficina',
          src: 'img/LOGO.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Serviços',
          },
          {to: '/blog', label: 'A Nossa Equipa', position: 'left'},
          {to: '/docs/intro', label: 'Contactos', position: 'right'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Serviços',
            items: [
              {
                label: 'Oficina',
                to: '/docs/category/oficina',
              },
              {
                label: 'Financiamento',
                to: '/docs/tutorial-extras/manage-docs-versions',
              },
              {
                label: 'Seguro',
                to: '/docs/tutorial-extras/translate-your-site',
              },
            ],
          },
          {
            title: 'Morada',
            items: [
              {
                html: `<p> Rua Praceta Maria José Pinheiro <br> 2234-360 Faro, Portugal </p>`,
              },
            ],
          },
          {
            items: [
              {
                html: `<a target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                      <img src="img/Socialcard.png" alt="Social" width="450" height="200" />
                    </a>`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;