const HtmlWebPackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
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
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        ],
        exclude: /[\\/]node_modules[\\/]/,
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
      name: 'mfe_header',
      filename: 'mfe-header/remoteEntry.js',
      exposes: {
        './Header': './src/App.tsx', // Asegúrate de que esta ruta es correcta
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
        'gowid-shared-context': { singleton: true, eager: true }, // Consumir el contexto compartido
      },
    }),
  ],
};
