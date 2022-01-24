import { ExpressServer } from './infra/frameworks/web/ExpressServer'
import { IndexController } from './adapters/controllers/index.controller'
import { CardController } from './adapters/controllers/card.controller';


const httpServer = new ExpressServer()
const controllers = [IndexController, CardController];
const app = httpServer.run(controllers.map((c: any) => c(httpServer)));


export { app }