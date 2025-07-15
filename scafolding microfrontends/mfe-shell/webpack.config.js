const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  cache: false,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
    followSymlinks: true,
  },
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Procesar archivos .scss
        use: [
          'style-loader', // Inyecta CSS al DOM
          'css-loader', // Procesa CSS
          'sass-loader', // Compila SCSS a CSS
        ],
      },
    ],
  },
  output: {
    // you could use 'auto', but 'auto' does not work with ie11, it's better to use relative url anyway.
    publicPath: '/',
    clean: true,
    pathinfo: false,
    filename: '[name].[contenthash].js',
    path: path.join(process.cwd(), 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/public': path.resolve(__dirname, 'public'),
    },
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: 'mfe_shell',
      filename: 'remoteEntry.js',
      remotes: {
        mfe_header:
          'mfe_header@http://localhost:3001/mfe-header/remoteEntry.js',
        mfe_cart: 'mfe_cart@http://localhost:3002/mfe-cart/remoteEntry.js',
        mfe_login: 'mfe_login@http://localhost:3003/mfe-login/remoteEntry.js',
        mfe_locations:
          'mfe_locations@http://localhost:3004/mfe-locations/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '18.3.1' },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '18.3.1',
        },
        'react-router-dom': {
          singleton: true,
          eager: true,
          requiredVersion: '6.28.0',
        },
        'gowid-shared-context': { singleton: true, eager: true },
      },
    }),
  ],
};
