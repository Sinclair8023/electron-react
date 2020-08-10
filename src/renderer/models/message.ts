import { IMessageModel } from '@/types/message'
import avatar from '@/assets/yay.jpg'
const defaultState: IMessageModel = {
  list: [
    {
      type: 'p2p',
      avatar: avatar,
      id: '1',
      name: '卡卡罗特',
      unreadCount: 10,
      lastMessage: {
        id: '1',
        type: 'text',
        content: 'hello',
        from: '2',
        to: '1',
        time: '11:06',
      },
    },
    {
      type: 'p2p',
      avatar: avatar,
      id: '2',
      name: '川普',
      unreadCount: 10,
      lastMessage: {
        id: '1',
        type: 'text',
        content: 'I am a really smart guy',
        from: '2',
        to: '1',
        time: '11:06',
      },
    },
  ]
}
export default {
  namespace: 'message',
  state: defaultState,
  effects: {
    *send( { payload}, { put, call }) {

    },
  },
  reducers: {
    
  },
  subscriptions: {
    setup({ history, dispatch }) {

    }
  }
}