/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
    i18n,
    eslint: {
        dirs: ["src"],
    },
    reactStrictMode: true,
    images: {
        domains: [
            "firebasestorage.googleapis.com",
            "lh3.googleusercontent.com",
            "example.com",
            "pbs.twimg.com",
            "graph.facebook.com",
            "images.unsplash.com",
            "avatars.githubusercontent.com",
        ],
    },
};
