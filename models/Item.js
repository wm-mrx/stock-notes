"use strict";
const sequelize = require('sequelize');
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    code: { type: sequelize.STRING, allowNull: false },
    name: { type: sequelize.STRING, allowNull: false },
    categoryId: { type: sequelize.BIGINT, allowNull: false, field: 'category_id' },
    initialQuantity: { type: sequelize.BIGINT, allowNull: false, field: 'initial_quantity' }
};
exports.options = {
    freezeTableName: true,
    tableName: 'items',
    timestamps: false
};
//# sourceMappingURL=Item.js.map