import { ExpressServer } from './infra/frameworks/http/ExpressServer'
import { CardController } from './adapters/controllers/card.controller';

const httpServer = new ExpressServer()
const controllers = [CardController];
const app = httpServer.run(controllers.map((c: any) => c(httpServer)));


export { app }