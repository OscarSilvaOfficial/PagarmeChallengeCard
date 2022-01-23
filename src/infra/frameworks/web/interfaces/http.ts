export interface IHttpServer {
  
  readonly app: any

  controller(endpoint: string): any 
  get(endpoint: string) : any
  run(controllers: Array<any>) : any 
  get response(): any

}