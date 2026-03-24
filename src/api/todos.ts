import { Hono } from "hono"
const app = new Hono()
app.get("/todos", (c) => c.json([]))
app.post("/todos", (c) => c.json({ ok: true }))
export default app
