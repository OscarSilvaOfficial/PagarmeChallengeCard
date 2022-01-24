import { IRepository } from "./interfaces/repository.interface";

class CardRepository implements IRepository {

  getByNumber(number: string): Promise<any> {
    return new Promise(() => {})
  }

  getAll(): Promise<any[]> {
    return new Promise(() => {})
  }

  create(item: any): Promise<any> {
    return new Promise(() => {})
  }

  update(number: string, item: any): Promise<any> {
    return new Promise(() => {})
  }

  delete(number: string): Promise<void> {
    return new Promise(() => {})
  }

}

export { CardRepository }