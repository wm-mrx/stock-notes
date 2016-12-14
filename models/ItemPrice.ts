import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface IItemPrice {
    id: number;
    itemId: number;
    item?: any;
    unitId: number;
    unit?: any;
    price: number;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    itemId: { type: sequelize.BIGINT, allowNull: false, field: 'item_id' },
    unitId: { type: sequelize.BIGINT, allowNull: false, field: 'unit_id' },
    price: { type: sequelize.DECIMAL, allowNull: false }
}

export var options: sequelize.DefineOptions<Instance<IItemPrice>> = {
    freezeTableName: true,
    tableName: 'item_prices',
    timestamps: false
}