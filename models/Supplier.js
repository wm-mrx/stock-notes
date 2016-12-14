"use strict";
const sequelize = require('sequelize');
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    code: { type: sequelize.STRING, allowNull: false },
    name: { type: sequelize.STRING, allowNull: false },
    address: { type: sequelize.STRING, allowNull: true },
    contact: { type: sequelize.STRING, allowNull: true },
    email: { type: sequelize.STRING, allowNull: false }
};
exports.options = {
    freezeTableName: true,
    tableName: 'suppliers',
    timestamps: false
};
//# sourceMappingURL=Supplier.js.map