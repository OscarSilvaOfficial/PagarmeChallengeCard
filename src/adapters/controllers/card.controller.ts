import { IHttpServer } from "../../infra/frameworks/web/interfaces/http";

export const CardController = (http: IHttpServer) => {
  
  @http.controller('/cards')
  class Controller {

    @http.get('/')
    test(@http.response() res: any) {
      res.send('Hello World');
    }
    
  }

  return Controller;
  
}