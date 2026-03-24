export const validate = (schema) => async (c, next) => {
  const body = await c.req.json()
  if (!body.title) return c.json({ error: "title required" }, 400)
  return next()
}
