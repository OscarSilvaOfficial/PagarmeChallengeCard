import request from "supertest";
import { app } from "../../src/main";

describe("GET / - a simple api endpoint", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/");
    expect(result.statusCode).toEqual(200);
  });
});