import { IHttpServer } from "../../infra/frameworks/web/interfaces/http";

export const IndexController = (http: IHttpServer) => {
  
  @http.controller('/')
  class Controller {
    @http.get('/')
    test(@http.response() res: any) {
      res.send('Hello World');
    }
  }

  return Controller;
  
}