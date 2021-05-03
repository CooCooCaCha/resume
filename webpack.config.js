const HtmlWebpackPlugin = require("html-webpack-plugin");
const { renderPDF } = require("./src/renderer");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "William's Resume",
      template: "./src/index.html",
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("PDFRenderer", async () => {
          await renderPDF();
          console.log("RENDERED PDF");

          if (process.env.ONCE) {
            process.exit(0);
          }
        });
      },
    },
  ],
  devServer: {
    publicPath: "/",
    onListening: (server) => {
      const port = server.listeningApp.address().port;
      console.log("Listening on port:", port);
    },
  },
};
