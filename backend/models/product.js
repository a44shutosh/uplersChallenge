const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Product = sequelize.define('Product', {
        dataCategory: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recordCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fields: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Product;
};
