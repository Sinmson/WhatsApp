export enum ChatMessageStatus {
  sent = "SENT", // rectangle with clock
  delivered = "DELIVERED", // one tick
  received = "RECEIVED", // two ticks
  read = "READ", // two blue ticks
  failed = "FAILED", // red triangle
  deleted = "DELETED" // this message was deleted
}