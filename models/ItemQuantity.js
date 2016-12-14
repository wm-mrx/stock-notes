"use strict";
const sequelize = require('sequelize');
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    itemId: { type: sequelize.BIGINT, allowNull: false, field: 'item_id' },
    unitId: { type: sequelize.BIGINT, allowNull: false, field: 'unit_id' },
    quantity: { type: sequelize.BIGINT, allowNull: false }
};
exports.options = {
    freezeTableName: true,
    tableName: 'item_quantities',
    timestamps: false
};
//# sourceMappingURL=ItemQuantity.js.map