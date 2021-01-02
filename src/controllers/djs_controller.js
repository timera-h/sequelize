const { pick, includes } = require("lodash");

const { dj, Musicalgenre, DjMusicalgenre, Club } = require("../models");
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
    const djs = await dj.create(data)
    return djs ;
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
