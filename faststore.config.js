
module.exports = {
  seo: {
  "title": "X5Music - Instrumentos musicais e áudio profissional",
  "description": "revendemos produtos de qualidade reconhecida, com profissionais capacitados para atender o público em geral, empresas, e setor publico através de licitações e compras diretas. Oferecemos a você, a oportunidade de adquirir produtos de qualidade e com atendimento reconhecido dentre os melhores do segmento de instrumentos musicais e áudio profissional.",
  "titleTemplate": "%s | X5Music",
  "author": "XP Agência"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "x5music",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://x5music.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/acess%C3%B3rios",
    search: "/s?q=SATY",
    pdp: "/suporte-saty-sz-50-duplo-em-z-para-teclado/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/suporte-saty-sz-50-duplo-em-z-para-teclado/p",
      collection: "/acess%C3%B3rios",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/suporte-saty-sz-50-duplo-em-z-para-teclado/p",
      collection: "/acess%C3%B3rios",
      collection_filtered: "/acess%C3%B3rios/?category-1=acess%C3%B3rios&brand=SATY&facets=category-1%2Cbrand%27",
      search: "/s?q=SATY",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://x5music.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
