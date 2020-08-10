import React from 'react'
import { bem } from '@/utils'
import { scope } from './style.less'
const getCls = bem(scope)
interface IMessageDetailProps {
  className: string,
}
class MessageDetail extends React.PureComponent<IMessageDetailProps> {
  render() {
    const {className} = this.props
    return (
      <div className={`${getCls('')} ${className}`}>
        <div className={getCls('content')}>
          <div className={getCls('header')}></div>
          <div className={getCls('list')}></div>
          <div className={getCls('input')}></div>
        </div>
        <div className={getCls('tools')}></div>
      </div>
    )
  }
}
export default MessageDetail