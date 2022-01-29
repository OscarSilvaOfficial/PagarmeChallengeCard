import { INoSQLDB } from "./interfaces/nosql.interface";
import { connect } from 'mongoose';


class MongoDB implements INoSQLDB {

  private db: any;

  constructor(dbConnectionString: string, dbName: string) {
    this.db = connect(`${dbConnectionString}/${dbName}`);
  }

}

export { MongoDB };