import { INoSQLDB } from "../../../infra/frameworks/db/interfaces/nosql.interface";
import { ICardRepository } from "./interfaces/repository.interface";

class CardRepository implements ICardRepository {

  private db: INoSQLDB;

  constructor(db: INoSQLDB) {
    this.db = db;
  }

  getCard(number: string): Promise<any> {
    return new Promise(() => {})
  }

  getCards(): Promise<any[]> {
    return new Promise(() => {})
  }

  createCard(card: any): Promise<any> {
    return new Promise(() => {})
  }

  updateCard(number: string, card: any): Promise<any> {
    return new Promise(() => {})
  }

  deleteCard(number: string): Promise<void> {
    return new Promise(() => {})
  }

}

export { CardRepository }