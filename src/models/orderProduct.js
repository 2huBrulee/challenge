const orderProduct = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define('orderProduct', {
        orderId:{
            type: DataTypes.INTEGER,
        },
        productId:{
            type: DataTypes.INTEGER,
        },
        quantity:{
            type: DataTypes.INTEGER,
        }
    });

    return OrderProduct;
}

export default orderProduct;