export const auth = async (c, next) => {
  const token = c.req.header("Authorization")
  if (!token) return c.json({ error: "unauthorized" }, 401)
  return next()
}
