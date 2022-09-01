/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["media.pprmint.art"],
    },
    i18n: {
        locales: ["en", "de"],
        defaultLocale: "en",
    },
};
