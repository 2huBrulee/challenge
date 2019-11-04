export default {
  Mutation: {
    createOrder: async (parent, { products }, { models }) => {
      const totalPrice = await products.reduce(async (sum, product) => {
        const partialSum = await models.Product.findByPk(product.id).then(
          prod => prod.unitPrice * product.quantity
        );
        return await sum + partialSum;
      }, 0);

      return await models.Order.create({
        shippingCost: totalPrice,
        taxes: totalPrice,
        total: totalPrice
      }).then(async order => {
        products.forEach(async product => {
          await order.addProduct(product.id, {
            through: { quantity: product.quantity }
          });
        });
        return order.id;
      });
    }
  },
};
