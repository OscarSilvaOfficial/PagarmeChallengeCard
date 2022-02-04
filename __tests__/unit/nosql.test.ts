import { MongoDB } from '../../src/infra/frameworks/db/nosql'
import { Schema, ObjectId } from 'mongoose'

interface ITransaction {
  value: Number,
  description: String,
  from_document: String,
  to_document: String,
}

describe("Test noSQL Implementation", () => {

  const dbUrl = "mongodb://localhost:27017";
  const dbName = 'pagarme'
  const collection_name = 'transactions'

  const schema = new Schema<ITransaction>({
    value: Number,
    description: String,
    from_document: String,
    to_document: String,
  })

  const mongo = new MongoDB(dbUrl, dbName, collection_name, schema);

  it("Test get specific document", async () => {
    const filter = { _id: "61ea08174ae4f3a985e71c25" }
    const all = await mongo.all(filter).then((res: any) => res);
    expect(all.length).toBe(1);
  });
});