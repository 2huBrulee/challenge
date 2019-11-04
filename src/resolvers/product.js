export default {
    Query: {
      products: async (parent, args, { models }) => {
        return await models.Product.findAll();
      },
      product: async (parent, { id }, { models }) => {
        return await models.Product.findByPk(id);
      },
    },
  /*
    Product: {
      messages: (user, args, { models }) => {
        return Object.values(models.messages).filter(
          message => message.userId === user.id,
        );
      },
    },*/
  };