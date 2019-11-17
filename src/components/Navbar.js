import { Badge, Icon, Layout, Menu } from 'antd';
import { Link, navigate } from 'gatsby';
import React from 'react';
import logo from '../img/brandicon.svg';

const { Header } = Layout;

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
      <div className="navbar-container">
        <Header style={{backgroundColor:'#fff', padding: 0, margin: '0 auto'}}>
      <div className="navbar">
      <Link to="/">
      <img alt="" style={{
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
      </div>
    </Header>
      </div>
    )
  }
}

export default Navbar
