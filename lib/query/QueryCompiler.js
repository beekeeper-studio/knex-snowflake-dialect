"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCompiler = void 0;
const mysql_querycompiler_1 = __importDefault(require("knex/lib/dialects/mysql/query/mysql-querycompiler"));
class QueryCompiler extends mysql_querycompiler_1.default {
    constructor(client, builder, formatter) {
        super(client, builder, formatter);
    }
    forUpdate() {
        // @ts-ignore
        this.client.logger.warn('table lock is not supported by snowflake dialect');
        return '';
    }
    forShare() {
        // @ts-ignore
        this.client.logger.warn('lock for share is not supported by snowflake dialect');
        return '';
    }
}
exports.QueryCompiler = QueryCompiler;
//# sourceMappingURL=QueryCompiler.js.map