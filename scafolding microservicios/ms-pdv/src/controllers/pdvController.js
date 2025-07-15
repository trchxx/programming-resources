import Pdv from '../models/Pdv.js';

// Crear un pdv
export const createPdv = async (req, res) => {
    try {
        const { name, description } = req.body;
        const pdv = await Pdv.create({ name, description });
        res.status(201).json(pdv);
      } catch (error) {
        res.status(500).json({ message: 'Error al crear el pdv', error });
      }
}

export const getAllPdvs = async (req, res) => {
  console.log("llego aqui al getallpdvs");
  res.status(200).json({a: 'hola'});
    // try {
    //     const pdv = await Pdv.findAll();
    //     res.status(200).json(pdv);
    //   } catch (error) {
    //     res.status(500).json({ message: 'Error al obtener los pdvs', error });
    //   }
}

// // Crear un artículo
// exports.createArticle = async (req, res) => {
//   try {
//     const { name, description, price, stock } = req.body;
//     const article = await Article.create({ name, description, price, stock });
//     res.status(201).json(article);
//   } catch (error) {
//     res.status(500).json({ message: 'Error al crear el artículo', error });
//   }
// };

// Obtener todos los artículos
// exports.getArticles = async (req, res) => {
//   try {
//     const articles = await Article.findAll();
//     res.status(200).json(articles);
//   } catch (error) {
//     res.status(500).json({ message: 'Error al obtener los artículos', error });
//   }
// };

// // Obtener un artículo por ID
// exports.getArticleById = async (req, res) => {
//   try {
//     const article = await Article.findByPk(req.params.id);
//     if (!article) {
//       return res.status(404).json({ message: 'Artículo no encontrado' });
//     }
//     res.status(200).json(article);
//   } catch (error) {
//     res.status(500).json({ message: 'Error al obtener el artículo', error });
//   }
// };

// // Actualizar un artículo
// exports.updateArticle = async (req, res) => {
//   try {
//     const { name, description, price, stock } = req.body;
//     const article = await Article.findByPk(req.params.id);
//     if (!article) {
//       return res.status(404).json({ message: 'Artículo no encontrado' });
//     }
//     article.name = name;
//     article.description = description;
//     article.price = price;
//     article.stock = stock;
//     await article.save();
//     res.status(200).json(article);
//   } catch (error) {
//     res.status(500).json({ message: 'Error al actualizar el artículo', error });
//   }
// };

// // Eliminar un artículo
// exports.deleteArticle = async (req, res) => {
//   try {
//     const article = await Article.findByPk(req.params.id);
//     if (!article) {
//       return res.status(404).json({ message: 'Artículo no encontrado' });
//     }
//     await article.destroy();
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ message: 'Error al eliminar el artículo', error });
//   }
// };