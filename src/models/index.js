import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.JAWSDB_URL,
    {
        dialect: 'mysql',
        define:{
            underscored: false,
        }
    },
);

const models = {
    Product: sequelize.import('./product.js'),
    Order: sequelize.import('./order.js'),
    OrderProduct: sequelize.import('./orderProduct.js'),
};

Object.keys(models).forEach(key=>{
    if('associate' in models[key]) {
        models[key].associate(models);
    }
})

export {sequelize};

export default models;