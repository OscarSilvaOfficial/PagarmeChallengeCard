import { ExpressServer } from './infra/frameworks/web/express'

const test = new ExpressServer();

@test.controller('/e')
class TestController {
  @test.get('/')
  public test(req: any, res: any) {
    res.send('Hello World');
  }
}

ExpressServer.run([TestController]);