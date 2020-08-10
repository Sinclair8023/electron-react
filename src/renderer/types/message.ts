export interface IMessage<T> {
  id: string,
  type: 'text' | 'file',
  content: T,
  from: string,
  to: string,
  time: string,
}
export interface IChat {
  type: 'self' | 'robot' | 'p2p' | 'group',
  avatar: string,
  id: string,
  name: string,
  unreadCount: number,
  lastMessage: IMessage<any>,
}
export interface IMessageModel {
  list: IChat[],
  actived?: string,
}