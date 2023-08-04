const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        remotes: {
          app1: "app1@http://localhost:3001/remoteEntryApp1.js",
          app2: "app2@http://localhost:3002/remoteEntryApp2.js",
        },
      }),
    ],
  },
  devServer: {
    open: true,
    port: 3000,
  },
};
