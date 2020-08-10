import React from 'react';
import { Avatar, Button, DatePicker } from 'antd';
import { NavLink } from 'dva/router'
import { MessageOutlined } from '@ant-design/icons';
import { bem } from '@/utils'
import { scope } from './style.less'
const getCls = bem(scope)
class layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={scope}>
        <div className={getCls('nav')}>
          <Avatar className={getCls('avatar')} size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div className={getCls('menu')}>
            <NavLink to="/message">
              <MessageOutlined />
            </NavLink>
          </div>
        </div>
        <div className={getCls('content')}>
          {children}
        </div>
      </div>
    )
  }
}
export default layout