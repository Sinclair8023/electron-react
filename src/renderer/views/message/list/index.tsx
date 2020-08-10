import React from 'react'
import { IChat } from '@/types/message'
import { List, Avatar, Badge } from 'antd'
interface IMessageListProps {
  data: IChat[],
  actived: string,
  className: string,
}
class MessageList extends React.PureComponent<IMessageListProps> {
  renderItem = (item: IChat) => {
    const { id, avatar, name, unreadCount, lastMessage } = item
    return (
      <List.Item key={id}>
        <List.Item.Meta
          avatar={
            <Badge count={unreadCount}>
              <Avatar size={44} src={avatar} />
            </Badge>
          }
          title={name}
          description={lastMessage.content}
        />
      </List.Item>
    )
  }
  render() {
    const { data, className } = this.props
    return (
      <List
        className={className}
        itemLayout="horizontal"
        dataSource={data}
        bordered
        renderItem={this.renderItem}
      />
    )
  }
}
export default MessageList