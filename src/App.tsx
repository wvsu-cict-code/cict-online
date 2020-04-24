import { Link, navigate, Redirect, Router } from '@reach/router';
import { Layout, Menu } from 'antd';

import React, { Component } from 'react';
import { addPrefetchExcludes, Root } from 'react-static';
import './app.less';
import BrandIcon from './assets/brand.svg';

let netlifyIdentity:any;
if (typeof document !== 'undefined') {
  netlifyIdentity = require('netlify-identity-widget')
}


const { Header, Footer, Content } = Layout;


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const netlifyAuth: any = {
  isAuthenticated: false,
  user: null,
  authenticate(callback: any) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', (user:any) => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback: any) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};


const AuthButton = (
  () =>
    netlifyAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button
          onClick={() => {
            netlifyAuth.signout(() => navigate("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in. <a href="login">Login</a></p>
      )
);

// function PrivateRoute() {
//   return (
//     <div>Private</div>
//   )
// }

const Public: any = () => (
  <div>
    <div>
      <Layout className="layout">
        <Header>
          <div className="home-header">
            <Link to="/"><div className="brand-icon" style={{ backgroundImage: `url(${BrandIcon})` }} /></Link>
            <Menu style={{ float: 'right' }} mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>CICT Online ©2020 by CICTzens</Footer>
      </Layout>
    </div>
    <AuthButton />
  </div>
);

const Dashboard: any = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

class Login extends Component<any, any> {
  state = { redirectToReferrer: false };

  login = () => {
    netlifyAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}


function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Public path="/" />
            <Dashboard path="/dashboard" />
            <Login path="/login" />
            {/* <PrivateRoute path="/protected" component={Protected} /> */}
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
