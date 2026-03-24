const subscribers = new Map<string, Set<WebSocket>>()
export const subscribe = (topic: string, ws: WebSocket) => {
  if (!subscribers.has(topic)) subscribers.set(topic, new Set())
  subscribers.get(topic)!.add(ws)
}
