const { pick } = require("lodash");

const { dj, Musicalgenre, DjMusicalgenre } = require("../models");
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
    return await dj.create(data);
  },

  updateDj: async (name, data) => {
    // Your code here
    return dj.update(data, {where: {name}} );

    // return await dj.update({where: name, data});
  },

  deleteDj: async (name) => {
    // Your code here
    return await dj.destroy({where: {name}});
  },
};

module.exports = djsController;
