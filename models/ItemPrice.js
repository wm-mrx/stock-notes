"use strict";
const sequelize = require('sequelize');
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    itemId: { type: sequelize.BIGINT, allowNull: false, field: 'item_id' },
    unitId: { type: sequelize.BIGINT, allowNull: false, field: 'unit_id' },
    price: { type: sequelize.DECIMAL, allowNull: false }
};
exports.options = {
    freezeTableName: true,
    tableName: 'item_prices',
    timestamps: false
};
//# sourceMappingURL=ItemPrice.js.map