import { Layout } from 'antd';
import { Link } from 'gatsby';
import React from 'react';

const logo = require('../img/brandicon.svg');
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
        <Header style={{backgroundColor:'transparent', padding: 0, margin: '0 auto'}}>
      <div className="navbar">
      <Link to="/">
      <img alt="" style={{
        width: '120px',
        height: '31px',
        margin: '16px 24px 16px 0',
        float: 'left'
      }} src={logo} />
      </Link>
     
      </div>
    </Header>
      </div>
    )
  }
}

export default Navbar
