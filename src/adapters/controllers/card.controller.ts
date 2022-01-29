import { IHttpServer } from "../../infra/frameworks/http/interfaces/http";
import { ICardRepository } from "../repository/card/interfaces/repository.interface";
import { CardRepository } from '../repository/card/card.repository'
import { INoSQLDB } from "../../infra/frameworks/db/interfaces/nosql.interface";

export const CardController = (http: IHttpServer, db: INoSQLDB) => {
  
  @http.controller('/cards')
  class Controller {

    private repository: ICardRepository

    constructor() {
      this.repository = new CardRepository(db);
    }

    @http.get('/')
    test(@http.response() res: any) {
      res.send('Hello World');
    }
    
  }

  return Controller;
  
}