export const cacheKey = (resource: string, id: string) =>
  `todo:${resource}:${id}`
