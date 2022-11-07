/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["static.pprmint.art"],
    },
    i18n: {
        locales: ["en", "de"],
        defaultLocale: "en",
    },
    async redirects() {
        return [
            {
                source: "/mintcraft",
                destination: "/projects/mintcraft",
                permanent: true,
            },
        ];
    },
};
