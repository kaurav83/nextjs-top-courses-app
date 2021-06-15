module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)|x7$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
};