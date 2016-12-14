"use strict";
const sequelize = require('sequelize');
exports.attributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: sequelize.STRING, allowNull: false },
    userName: { type: sequelize.STRING, allowNull: false, field: 'user_name' },
    salt: { type: sequelize.STRING, allowNull: false },
    hash: { type: sequelize.STRING, allowNull: false },
    roleId: { type: sequelize.BIGINT, allowNull: false, field: 'role_id' },
};
exports.options = {
    freezeTableName: true,
    tableName: 'users',
    timestamps: false
};
//# sourceMappingURL=User.js.map