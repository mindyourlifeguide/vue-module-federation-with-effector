const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const deps = require("./package.json").dependencies;

module.exports = {
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "app1",
        filename: "remoteEntryApp1.js",
        shared: {
          vue: {
            singleton: true,
            requiredVersion: deps.vue,
          },
          effector: {
            singleton: true,
            requiredVersion: deps.effector,
          },
          "effector-vue": {
            singleton: true,
            requiredVersion: deps["effector-vue"],
          },
          patronum: {
            singleton: true,
            requiredVersion: deps.patronum,
          },
          "@withease/factories": {
            singleton: true,
            requiredVersion: deps["@withease/factories"],
          },
          "@mvp/shared": {
            singleton: true,
            requiredVersion: deps["@mvp/shared"],
          },
        },
        exposes: {
          "./App1": "./src/App1.vue",
        },
      }),
    ],
  },
  devServer: {
    port: 3001,
  },
};
