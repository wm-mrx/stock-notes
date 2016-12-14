import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';

export interface ICustomer {
    id: number;
    code: string;
    name: string;
    address: string;
    contact: string;
    email: string;
}

export var attributes: sequelize.DefineAttributes = {
    id: { type: sequelize.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true },
    code: { type: sequelize.STRING, allowNull: false },
    name: { type: sequelize.STRING, allowNull: false },
    address: { type: sequelize.STRING, allowNull: true },
    contact: { type: sequelize.STRING, allowNull: true },
    email: { type: sequelize.STRING, allowNull: false }
}

export var options: sequelize.DefineOptions<Instance<ICustomer>> = {
    freezeTableName: true,
    tableName: 'customers',
    timestamps: false
}