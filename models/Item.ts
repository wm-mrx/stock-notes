import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface IItem {
    id: number;
    code: string;
    name: string;
    categoryId: number;
    category?: any;
    initialQuantity: number;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    code: { type: sequelize.STRING, allowNull: false },
    name: { type: sequelize.STRING, allowNull: false },
    categoryId: { type: sequelize.BIGINT, allowNull: false, field: 'category_id' },
    initialQuantity: { type: sequelize.BIGINT, allowNull: false, field: 'initial_quantity' }
}

export var options: sequelize.DefineOptions<Instance<IItem>> = {
    freezeTableName: true,
    tableName: 'items',
    timestamps: false
}