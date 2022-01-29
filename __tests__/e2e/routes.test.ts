import request from "supertest";
import { app } from "../../src/main";

const client = request(app);

describe("GET / - a simple api endpoint", () => {
  it("Hello API Request", async () => {
    const result = await client.get("/cards");
    expect(result.statusCode).toEqual(200);
  });
});