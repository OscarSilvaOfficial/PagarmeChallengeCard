import { ExpressServer } from './infra/frameworks/web/ExpressServer'
import { test as TestController } from './adapters/controllers/test.controller'

const httpServer = new ExpressServer()
const controllers = [TestController];

httpServer.run(controllers.map((c: any) => c(httpServer)));