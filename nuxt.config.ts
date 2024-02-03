// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "admin-lte/dist/css/adminlte.min.css",
    // Add any other styles you need
  ],

  script: [
    { src: "admin-lte/plugins/jquery/jquery.min.js", body: true },
    {
      src: "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js",
      body: true,
    },
    { src: "admin-lte/dist/js/adminlte.min.js", body: true },
    // Add any other scripts you need
  ],

  buildModules: ["@nuxt/image", "@nuxtjs/fontawesome"],
  modules: ["@nuxt/image"],
  fontawesome: {
    component: "i", // Use <i> tag for FontAwesome icons
    icons: {
      solid: ["faHome", "faHeart"], // include only solid icons
    },
  },
});
