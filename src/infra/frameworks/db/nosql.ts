import { INoSQLDB } from "./interfaces/nosql.interface";
import { connect, model, Schema } from 'mongoose';


class MongoDB implements INoSQLDB {

  private schema: Schema;
  private dbConnectionString: string
  private dbName: string
  private collection: any

  constructor(dbConnectionString: string, dbName: string, collectionName: string, schema: Schema) {
    this.dbConnectionString =  dbConnectionString;
    this.dbName = dbName;
    this.createConnection();
    this.schema = schema;
    this.collection = model(collectionName, this.schema);
  }

  async createConnection() {
    await connect(`${this.dbConnectionString}/${this.dbName}`);
  }

  all(filter: object | undefined = {}) {
    return this.collection.find(filter);
  }

  create(data: object) {}

  update(filter: object, data: object) {}

  delete(filter: object) {}

}

export { MongoDB };