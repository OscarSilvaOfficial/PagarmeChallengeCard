import { IHttpServer } from "./interfaces/http";
import { Response , Get, Controller, attachControllers } from '@decorators/express';

import express from "express";


export class ExpressServer implements IHttpServer {

  private app;

  constructor() {
    this.app = express();
  }

  controller(endpoint: string) {
    return Controller(endpoint)
  }

  get(endpoint: string) {
    return Get(endpoint);
  }

  get response() {
    return Response;
  }

  static run(controllers: any[]) {
    const PORT = process.env.PORT || 8081;
    const server = new ExpressServer().app;
    attachControllers(server, controllers);
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
    return server;
  }

}