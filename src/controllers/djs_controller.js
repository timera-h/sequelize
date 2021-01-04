const { pick } = require("lodash");

const { dj, Musicalgenre, DjMusicalgenre} = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    // Your code here
    return await dj.findAll();
  },

  getDj: async (name) => {
    // Your code here

    return await dj.findOne({ where: {name}});
  },

  addDj: async (data) => {
    // Your code here
    const allGenres = await Musicalgenre.findAll();
    const musical_genres = data.musical_genres;
    const djs = await dj.create(data);
    musical_genres.forEach(async genre => {
      allGenres.forEach(async dbGenre => {
        if (dbGenre.dataValues.name === genre) await djs.addMusicalgenre(dbGenre);
      });
    });
    return dj.findOne({
      where: {id: djs.id},
      include: Musicalgenre
    });
  },

  updateDj: async (name, data) => {
    // Your code here
    return dj.update(data, {where: {name}} );
  },

  deleteDj: async (name) => {
    // Your code here
    return await dj.destroy({where: {name}});
  },
};

module.exports = djsController;
