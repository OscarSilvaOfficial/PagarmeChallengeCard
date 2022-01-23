import { ExpressServer } from './infra/frameworks/web/ExpressServer'
import { IndexController } from './adapters/controllers/index.controller'

const httpServer = new ExpressServer()
const controllers = [IndexController];
const app = httpServer.run(controllers.map((c: any) => c(httpServer)));

export { app }