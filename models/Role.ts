import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface IRole {
    id: number;
    name: string;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: sequelize.STRING, allowNull: false }
}

export var options: sequelize.DefineOptions<Instance<IRole>> = {
    freezeTableName: true,
    tableName: 'roles',
    timestamps: false
}