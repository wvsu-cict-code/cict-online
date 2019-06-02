import React from 'react'
import { Layout, Menu, Breadcrumb, Icon, Badge } from 'antd';
import { Link, navigate } from 'gatsby'
import logo from '../img/brandicon.svg'

const { Header, Content } = Layout;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }


  render() {
    return (
      <Header style={{backgroundColor:'#fff', padding: 0}}>
      <Link to="/">
      <img style={{
        width: '120px',
        height: '31px',
        margin: '16px 24px 16px 0',
        float: 'left'
      }} src={logo} />
      </Link>
      <Menu
        theme="light"
        mode="horizontal"
        // defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px'}}
      >
        <Menu.Item key="1" onClick={()=>navigate('blog')}><Icon type="notification" /><Badge dot>Updates </Badge></Menu.Item>
      </Menu>
    </Header>
    )
  }
}

export default Navbar
