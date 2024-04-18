const path = require('path');

module.exports = {
  entry: './src/index.js', // Chemin de votre fichier d'entrée principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Dossier de sortie
    filename: 'main.js' // Nom du fichier de sortie
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Appliquer babel-loader uniquement aux fichiers .js
        exclude: /node_modules/, // Ne pas appliquer babel-loader aux fichiers dans node_modules
          loader: 'babel-loader', // Utiliser babel-loader pour transpiler le code
          
        }
      
    ]
  }
};
