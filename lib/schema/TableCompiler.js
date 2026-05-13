"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCompiler = void 0;
const mysql_tablecompiler_1 = __importDefault(require("knex/lib/dialects/mysql/schema/mysql-tablecompiler"));
class TableCompiler extends mysql_tablecompiler_1.default {
    constructor(client, builder) {
        super(client, builder);
    }
    index(columns, indexName, indexType) {
        // @ts-ignore
        this.client.logger.warn('Snowflake does not support the creation of indexes.');
    }
    ;
    dropIndex(columns, indexName) {
        // @ts-ignore
        this.client.logger.warn('Snowflake does not support the deletion of indexes.');
    }
    ;
}
exports.TableCompiler = TableCompiler;
//# sourceMappingURL=TableCompiler.js.map