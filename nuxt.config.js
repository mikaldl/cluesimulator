const pkg = require("./package")

module.exports = {
    mode: "universal",

    /*
    ** Manifest settings
    */
    manifest: {
        "name": "Runescape treasure trail simulator",
        "prefer_related_applications": false,
        "short_name": "clue-simulator",
        "background_color": "#2c2c2c",
        "theme_color": "#2c2c2c",
        "icons": [
            {
                "src": "/android-chrome-192x192.png",
                "type": "image/png",
                "sizes": "192x192"
            },
            {
                "src": "/android-chrome-512x512.png",
                "type": "image/png",
                "sizes": "512x512"
            }
        ],
        "description": pkg.description,
        "display": "standalone"
    },

    /*
    ** Headers of the page
    */
    head: {
        title: "Master clue Simulator",
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"},
            {hid: "description", name: "description", content: pkg.description},
            {name: "theme-color", content: "#2c2c2c"}
        ],
        link: [
            {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
            {rel: "icon", type: "image/png", href: "/favicon-16x16", sizes: "16x16"},
            {rel: "icon", type: "image/png", href: "/favicon-32x32", sizes: "32x32"},
            {rel: "icon", type: "image/png", href: "/logo", sizes: "512x512"},
            {rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180"},
            {rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5"}
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: false,

    /*
    ** Global CSS
    */
    css: [
        "~/assets/css/tailwind.css",
        "~/assets/scss/modules/_typography.scss",
    ],

    plugins: [
        {src: "~/plugins/vue-static", ssr: false},
        {src: "~/plugins/pretty-checkbox", srr: false},
        {src: "~/plugins/v-tooltip", srr: false}
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/pwa",
        "@nuxtjs/workbox",
        "nuxt-fontawesome"
    ],

    fontawesome: {
        imports: [
            {
                set: "@fortawesome/free-solid-svg-icons",
                icons: ["fas"]
            }
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        vendor: ["axios"],
    }
}
