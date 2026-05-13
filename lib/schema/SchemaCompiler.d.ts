import SchemaCompiler_MySQL from "knex/lib/dialects/mysql/schema/mysql-compiler";
export declare class SchemaCompiler extends SchemaCompiler_MySQL {
    constructor(client: any, builder: any);
    hasTable(tableName: string): void;
}
