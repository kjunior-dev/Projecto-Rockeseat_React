"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
    return (0, path_1.dirname)(require.resolve((0, path_1.join)(value, "package.json")));
}
var config = {
    stories: [
        "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
    ],
    addons: [
        getAbsolutePath("@storybook/addon-onboarding"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@chromatic-com/storybook"),
        getAbsolutePath("@storybook/addon-interactions"),
    ],
    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {},
    },
};
exports.default = config;
//# sourceMappingURL=main.js.map