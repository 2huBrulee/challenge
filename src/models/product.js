const product = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        name:{
            type: DataTypes.STRING,
        },
        unitPrice:{
            type: DataTypes.FLOAT,
        },
        description:{
            type: DataTypes.STRING,
        }
    });

    Product.associate = models => {
        Product.belongsToMany(models.Order, {
            through: {
                model: models.OrderProduct,
                unique: false
              },
              foreignKey: 'productId',
              constraints: false
        })
    }

    return Product;
}

export default product;