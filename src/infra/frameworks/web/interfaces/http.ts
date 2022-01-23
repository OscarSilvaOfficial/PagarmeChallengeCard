export interface IHttpServer {
  
  app: any

  controller(endpoint: string): any 
  get(endpoint: string) : any 
  get response(): any

}