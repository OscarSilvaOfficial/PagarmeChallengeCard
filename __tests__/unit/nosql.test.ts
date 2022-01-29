import { MongoDB } from '../../src/infra/frameworks/db/nosql'

describe("Test noSQL Implementation", () => {

  const mongo = new MongoDB('mongodb://localhost:27017', 'pagarme', 'transactions');

  it("Test get all", async () => {
    const all = mongo.all()
    console.log(all)
    // expect(result.statusCode).toEqual(200);
  });
});