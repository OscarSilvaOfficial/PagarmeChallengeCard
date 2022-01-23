import { IHttpServer } from "../../infra/frameworks/web/interfaces/http";

export const test = (http: IHttpServer) => {
  
  @http.controller('/')
  class TestController {
    @http.get('/')
    test(@http.response() res: any) {
      console.log('test');
      res.send('Hello World');
    }
  }

  return TestController;
  
}