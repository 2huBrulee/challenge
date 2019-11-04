export default {
    Query: {
      products: async (parent, args, { models }) => {
        return await models.Product.findAll();
      },
      product: async (parent, { id }, { models }) => {
        return await models.Product.findByPk(id);
      },
    },
  };