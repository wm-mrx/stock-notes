import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface IUnit {
    id: number;
    name: string;
    notation: string;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    name: { type: sequelize.STRING, allowNull: false },
    notation: { type: sequelize.STRING, allowNull: false}
}

export var options: sequelize.DefineOptions<Instance<IUnit>> = {
    freezeTableName: true,
    tableName: 'units',
    timestamps: false
}