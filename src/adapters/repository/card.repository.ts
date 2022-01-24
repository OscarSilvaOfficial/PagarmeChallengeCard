import { IRepository } from "./interfaces/repository.interface";

class CardRepository implements IRepository {

  getById(id: string | number): Promise<any> {
    return new Promise(() => {})
  }

  getAll(): Promise<any[]> {
    return new Promise(() => {})
  }

  create(item: any): Promise<any> {
    return new Promise(() => {})
  }

  update(id: string | number, item: any): Promise<any> {
    return new Promise(() => {})
  }

  delete(id: string | number): Promise<void> {
    return new Promise(() => {})
  }

}

export { CardRepository }