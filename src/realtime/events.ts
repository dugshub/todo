export type Event =
  | { type: "todo:created"; todo: Todo }
  | { type: "todo:updated"; todo: Todo }
  | { type: "todo:deleted"; id: string }
