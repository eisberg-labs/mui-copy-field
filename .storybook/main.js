let config = {
    stories: [
        {
            directory: '../src',
            titlePrefix: 'Demo',
        },
    ],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        '@storybook/addon-storyshots',
        '@storybook/addon-a11y',
    ],
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgenTypescriptOptions: {
            propFilter: function (prop) { return ['label', 'disabled'].includes(prop.name); },
        },
    },
    core: {
        builder: 'webpack4',
        channelOptions: { allowFunction: false, maxDepth: 10 },
    },
    features: {
        postcss: false,
        // modernInlineRender: true,
        storyStoreV7: !((_c = (_b = (_a = global.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.match) === null || _c === void 0 ? void 0 : _c.call(_b, 'jsdom')),
        buildStoriesJson: true,
        babelModeV7: true,
        warnOnLegacyHierarchySeparator: false,
    },
    framework: '@storybook/react',
};
module.exports = config;
