import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("todo: the most important app ever written"));

export default {
  port: 3000,
  fetch: app.fetch,
};
