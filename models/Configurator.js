"use strict";
const Role = require('./Role');
const User = require('./User');
const Category = require('./Category');
const Unit = require('./Unit');
const Supplier = require('./Supplier');
const Customer = require('./Customer');
const Item = require('./Item');
const ItemQuantity = require('./ItemQuantity');
const ItemPrice = require('./ItemPrice');
const Order = require('./Order');
const Sale = require('./Sale');
exports.create = (sequelize) => {
    var models = {
        Role: define(sequelize, Role.attributes, Role.options, 'Role'),
        User: define(sequelize, User.attributes, User.options, 'User'),
        Category: define(sequelize, Category.attributes, Category.options, 'Category'),
        Unit: define(sequelize, Unit.attributes, Unit.options, 'Unit'),
        Supplier: define(sequelize, Supplier.attributes, Supplier.options, 'Supplier'),
        Customer: define(sequelize, Customer.attributes, Customer.options, 'Customer'),
        Item: define(sequelize, Item.attributes, Item.options, 'Item'),
        ItemQuantity: define(sequelize, ItemQuantity.attributes, ItemQuantity.options, 'ItemQuantity'),
        ItemPrice: define(sequelize, ItemPrice.attributes, ItemPrice.options, 'ItemPrice'),
        Order: define(sequelize, Order.attributes, Order.options, 'Order'),
        Sale: define(sequelize, Sale.attributes, Sale.options, 'Sale'),
    };
    models.User.belongsTo(models.Role, { as: 'role', foreignKey: 'roleId' });
    models.Item.belongsTo(models.Category, { as: 'category', foreignKey: 'categoryId' });
    models.ItemQuantity.belongsTo(models.Item, { as: 'item', foreignKey: 'itemId' });
    models.ItemQuantity.belongsTo(models.Unit, { as: 'unit', foreignKey: 'unitId' });
    models.ItemPrice.belongsTo(models.Item, { as: 'item', foreignKey: 'itemId' });
    models.ItemPrice.belongsTo(models.Unit, { as: 'unit', foreignKey: 'unitId' });
    models.Order.belongsTo(models.Item, { as: 'item', foreignKey: 'itemId' });
    models.Order.belongsTo(models.Supplier, { as: 'supplier', foreignKey: 'supplierId' });
    models.Sale.belongsTo(models.Item, { as: 'item', foreignKey: 'itemId' });
    models.Sale.belongsTo(models.Customer, { as: 'customer', foreignKey: 'customerId' });
    models.Sale.belongsTo(models.Unit, { as: 'unit', foreignKey: 'unitId' });
    return models;
};
function synchronize(models, force) {
    var keys = Object.keys(models);
    keys.forEach(key => {
        models[key].sync(force);
    });
}
exports.synchronize = synchronize;
function define(sequelize, attributes, options, name) {
    return sequelize.define(name, attributes, options);
}
//# sourceMappingURL=Configurator.js.map