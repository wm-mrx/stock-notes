import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface IUser {
    id: number;
    name: string;
    userName: string;
    salt: string;
    hash: string;
    roleId: number;
    role?: any;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: sequelize.STRING, allowNull: false },
    userName: { type: sequelize.STRING, allowNull: false, field: 'user_name' },
    salt: { type: sequelize.STRING, allowNull: false },
    hash: { type: sequelize.STRING, allowNull: false },
    roleId: { type: sequelize.BIGINT, allowNull: false, field: 'role_id' },
}

export var options: sequelize.DefineOptions<Instance<IUser>> = {
    freezeTableName: true,
    tableName: 'users',
    timestamps: false
}