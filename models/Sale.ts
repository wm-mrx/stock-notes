﻿import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface ISale {
    id: number;
    itemId: number;
    unitId: number
    customerId: number;
    quantity: number;
    price: number;
    notes?: string;
    createdDate: Date;
    createdBy: number;
    updatedDate: Date;
    updatedBy: number;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    itemId: { type: sequelize.BIGINT, allowNull: false, field: 'item_id' },
    unitId: { type: sequelize.INTEGER, allowNull: false, field: 'unit_id' },
    customerId: { type: sequelize.BIGINT, allowNull: false, field: 'customer_id' },
    quantity: { type: sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    price: { type: sequelize.DECIMAL, allowNull: false, defaultValue: 0 },
    notes: { type: sequelize.STRING, allowNull: true },
    createdDate: { type: sequelize.DATE, allowNull: false, field: 'created_date' },
    createdById: { type: sequelize.BIGINT, allowNull: false, field: 'created_by_id' },
    updatedDate: { type: sequelize.DATE, allowNull: false, defaultValue: Date.now, field: 'updated_date' },
    updatedById: { type: sequelize.BIGINT, allowNull: false, field: 'updated_by_id' }
}

export var options: sequelize.DefineOptions<Instance<ISale>> = {
    freezeTableName: true,
    tableName: 'sales',
    timestamps: false
}