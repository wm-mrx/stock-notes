"use strict";
class BaseController {
    constructor(modelName) {
        this.db = global['db'];
        this.models = global['models'];
        this.model = this.models[modelName];
        this.includes = [];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map