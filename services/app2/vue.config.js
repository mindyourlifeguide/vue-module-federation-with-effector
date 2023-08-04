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
        name: "app2",
        filename: "remoteEntryApp2.js",
        remotes: {
          app1: "app1@http://localhost:3001/remoteEntryApp1.js",
        },
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
          "./App2": "./src/App2.vue",
          "./UserName": "./src/UserName/index.vue",
        },
      }),
    ],
  },
  devServer: {
    port: 3002,
  },
};
