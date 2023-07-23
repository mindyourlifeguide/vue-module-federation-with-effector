const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:9001/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "chat",
        filename: "remoteEntry.js",
        library: { type: "var", name: "chat" },
        exposes: {
          "./ChatWeb": "./src/App.vue",
        },
      }),
    ],
  },
  devServer: {
    port: 9001,
  },
};
