interface INoSQLDB {
  all(filter: object): any;
  create(data: object): any;
  update(filter: object, data: object): any;
  delete(filter: object): any;
}

export { INoSQLDB };