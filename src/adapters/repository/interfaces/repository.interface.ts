interface IRepository {
  getById(id: string | number): Promise<any>;
  getAll(): Promise<any[]>;
  create(item: any): Promise<any>;
  update(id: string | number, item: any): Promise<any>;
  delete(id: string | number): Promise<void>;
}

export { IRepository };