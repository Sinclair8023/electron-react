import React from 'react'
import { connect } from 'dva'
import { IMessageModel } from '@/types/message'
import { bem } from '@/utils'
import List from './list'
import Chat from './Chat'
import { scope } from './style.less'
const getCls = bem(scope)
@connect(state => {
  return state.message
})
class Message extends React.PureComponent<IMessageModel> {
  render() {
    const { list, actived } = this.props
    return (<div className={scope}>
      <List className={getCls('list')} data={list} actived={actived}/>
      <Chat className={getCls('chat')} />
    </div>)
  }
}
export default Message