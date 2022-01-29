import { IHttpServer } from "./interfaces/http";
import { Response, Get, Controller, attachControllers } from '@decorators/express';
import express from "express";



export class ExpressServer implements IHttpServer {

  readonly app;

  constructor() {
    this.app = express();
  }

  controller(endpoint: string) {
    return Controller(endpoint);
  }

  get(endpoint: string) {
    return Get(endpoint);
  }

  response() {
    return Response();
  }

  run(controllers: any[]) {
    const PORT = process.env.PORT || 8081;
    attachControllers(this.app, controllers);
    this.app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    return this.app;
  }

}
