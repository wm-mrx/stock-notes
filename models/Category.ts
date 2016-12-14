import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface ICategory {
    id: number;
    code: string;
    name: string;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    code: { type: sequelize.STRING, allowNull: false },
    name: { type: sequelize.STRING, allowNull: false}
}

export var options: sequelize.DefineOptions<Instance<ICategory>> = {
    freezeTableName: true,
    tableName: 'categories',
    timestamps: false
}