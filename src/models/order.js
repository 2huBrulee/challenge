const order = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        shippingCost:{
            type: DataTypes.FLOAT,
        },
        taxes:{
            type: DataTypes.FLOAT,
        },
        total:{
            type: DataTypes.FLOAT,
        }
    });

    Order.associate =  models => {
        Order.belongsToMany(models.Product,{
            through: {
                model: models.OrderProduct,
                unique: false
              },
              foreignKey: 'orderId',
              constraints: false
        })

    }

    return Order;
}

export default order;