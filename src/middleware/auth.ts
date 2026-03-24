export const auth = (req, next) => verify(req.token)
