import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface IItemQuantity {
    id: number;
    itemId: number;
    item?: any;
    unitId: number;
    unit?: any;
    quantity: number;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    itemId: { type: sequelize.BIGINT, allowNull: false, field: 'item_id' },
    unitId: { type: sequelize.BIGINT, allowNull: false, field: 'unit_id' },
    quantity: { type: sequelize.BIGINT, allowNull: false }
}

export var options: sequelize.DefineOptions<Instance<IItemQuantity>> = {
    freezeTableName: true,
    tableName: 'item_quantities',
    timestamps: false
}