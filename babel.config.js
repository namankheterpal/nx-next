const babelConfig = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                    browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-export-namespace-from',
        'babel-plugin-ramda',
        [
            'babel-plugin-styled-components',
            { ssr: true, displayName: true, preprocess: false },
        ],
    ],
}

if (process.env.CYPRESS_COVERAGE === 'true') {
    babelConfig.plugins.push('babel-plugin-istanbul')
}

module.exports = babelConfig
