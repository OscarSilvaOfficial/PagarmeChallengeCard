interface INoSQLDB {
  all(filter: object): Promise<any>;
  create(data: object): Promise<any>;
  update(filter: object, data: object): Promise<any>;
  delete(filter: object): Promise<any>;
}

export { INoSQLDB };