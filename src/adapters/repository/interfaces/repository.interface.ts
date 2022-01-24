interface IRepository {
  getByNumber(number: string): Promise<any>;
  getAll(): Promise<any[]>;
  create(item: any): Promise<any>;
  update(number: string, item: any): Promise<any>;
  delete(number: string): Promise<void>;
}

export { IRepository };