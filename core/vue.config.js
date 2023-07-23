const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  publicPath: 'http://localhost:9000/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'core',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'core' },
        exposes: {
          './Button': './src/components/Button',
          './Section': './src/components/Section',
          './counter':'./src/models/model.ts'
        },
      }),
    ],
  },
  devServer: {
    port: 9000,
  },
};
