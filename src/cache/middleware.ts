import { cacheKey } from "./keys"
export const cached = async (c, next) => {
  const key = cacheKey("todos", c.req.param("id"))
  // check cache, fallback to handler
  return next()
}
