import * as sequelize from 'sequelize';
import {Instance} from './Instance';
import {Model} from './Model';
import * as Role from './Role';
import * as User from './User';
import * as Category from './Category';
import * as Unit from './Unit';
import * as Supplier from './Supplier';
import * as Customer from './Customer';
import * as Item from './Item';
import * as ItemQuantity from './ItemQuantity';
import * as ItemPrice from './ItemPrice';
import * as Order from './Order';
import * as Sale from './Sale';

export interface Models {
    Role: Model<Role.IRole>;
    User: Model<User.IUser>;
    Category: Model<Category.ICategory>;
    Unit: Model<Unit.IUnit>;
    Supplier: Model<Supplier.ISupplier>;
    Customer: Model<Customer.ICustomer>;
    Item: Model<Item.IItem>;
    ItemQuantity: Model<ItemQuantity.IItemQuantity>;
    ItemPrice: Model<ItemPrice.IItemPrice>;
    Order: Model<Order.IOrder>;
    Sale: Model<Sale.ISale>;
}

export var create = (sequelize: sequelize.Sequelize) => {
    var models: Models = {
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
    }

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
}

export function synchronize(models: Models, force: boolean) {
    var keys = Object.keys(models);

    keys.forEach(key => {
        models[key].sync(force);
    });
}

function define<T>(sequelize: sequelize.Sequelize, attributes: sequelize.DefineAttributes,
    options: sequelize.DefineOptions<Instance<T>>, name: string) {
    return sequelize.define<Instance<T>, T>(name, attributes, options);
}