const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:9000/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "user",
        filename: "remoteEntry.js",
        library: { type: "var", name: "user" },
        exposes: {
          "./UserWeb": "./src/App.vue",
        },
      }),
    ],
  },
  devServer: {
    port: 9000,
  },
};
