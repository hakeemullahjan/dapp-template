/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require("ts-jest");
const { ESLINT_MODES } = require("@craco/craco");
const { compilerOptions } = require("./tsconfig.path.json");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        resolve: {
          ...webpackConfig.resolve,
          fallback: {
            http: require.resolve("stream-http"),
            crypto: require.resolve("crypto-browserify"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify"),
            buffer: require.resolve("buffer"),
            stream: require.resolve("stream-browserify"),
            assert: require.resolve("assert"),
            url: require.resolve("url"),
          },
          alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@redux": path.resolve(__dirname, "src/redux"),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@api": path.resolve(__dirname, "src/api"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@contracts": path.resolve(__dirname, "src/contracts"),
          },
        },
        plugins: [
          ...webpackConfig.plugins,
          new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
          }),
          new webpack.ProvidePlugin({
            process: "process/browser.js",
          }),
        ],
      };
    },
  },
  jest: {
    configure: {
      preset: "ts-jest",
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/src/",
      }),
    },
  },
  eslint: {
    mode: ESLINT_MODES.file,
  },
};
