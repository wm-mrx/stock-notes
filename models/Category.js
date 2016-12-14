"use strict";
const sequelize = require('sequelize');
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    code: { type: sequelize.STRING, allowNull: false },
    name: { type: sequelize.STRING, allowNull: false }
};
exports.options = {
    freezeTableName: true,
    tableName: 'categories',
    timestamps: false
};
//# sourceMappingURL=Category.js.map