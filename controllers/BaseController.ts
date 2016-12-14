import * as sequelize from 'sequelize';
import {Instance} from '../models/Instance';
import {Model} from '../models/Model';
import {Models} from '../models/Configurator';

export default class BaseController<T>{
    db: sequelize.Sequelize;
    models: Models;
    model: Model<T>;
    includes: sequelize.IncludeOptions[];

    constructor(modelName) {
        this.db = global['db'];
        this.models = global['models'];
        this.model = this.models[modelName];
        this.includes = [];
    }
}