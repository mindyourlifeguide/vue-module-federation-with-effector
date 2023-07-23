const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:8080/",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          user: "user@http://localhost:9000/remoteEntry.js",
          chat: "chat@http://localhost:9001/remoteEntry.js",
        },
      }),
    ],
  },
};
