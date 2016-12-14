"use strict";
const sequelize = require('sequelize');
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    code: { type: sequelize.STRING, allowNull: false },
    itemId: { type: sequelize.BIGINT, allowNull: false, field: 'item_id' },
    supplierId: { type: sequelize.BIGINT, allowNull: false, field: 'supplier_id' },
    quantity: { type: sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    price: { type: sequelize.DECIMAL, allowNull: false, defaultValue: 0 },
    notes: { type: sequelize.STRING, allowNull: true },
    received: { type: sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    receivedDate: { type: sequelize.DATE, allowNull: true, field: 'received_date' },
    createdDate: { type: sequelize.DATE, allowNull: false, field: 'created_date' },
    createdById: { type: sequelize.BIGINT, allowNull: false, field: 'created_by_id' },
    updatedDate: { type: sequelize.DATE, allowNull: false, defaultValue: Date.now, field: 'updated_date' },
    updatedById: { type: sequelize.BIGINT, allowNull: false, field: 'updated_by_id' }
};
exports.options = {
    freezeTableName: true,
    tableName: 'orders',
    timestamps: false
};
//# sourceMappingURL=Order.js.map