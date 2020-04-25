import { Link, Redirect, Router } from '@reach/router';
import { Button, Layout, Menu, Row, Col } from 'antd';
import SEO from 'components/SEO';
import React, { Component } from 'react';
import { addPrefetchExcludes, Root } from 'react-static';
import './app.less';
import BrandIcon from './assets/brand.svg';
import ICTGraphics from './assets/ict.svg';

let netlifyIdentity: any;
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
    netlifyIdentity.on('login', (user: any) => {
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


// const AuthButton = (
//   () =>
//     netlifyAuth.isAuthenticated ? (
//       <p>
//         Welcome!{' '}
//         <button
//           onClick={() => {
//             netlifyAuth.signout(() => navigate("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//         <p>You are not logged in. <a href="login">Login</a></p>
//       )
// );

// function PrivateRoute() {
//   return (
//     <div>Private</div>
//   )
// }

const Public: any = () => (
  <div>
    <div>
      <SEO
        title="WVSU CICT - Home"
        description="Official website of the College of ICT."
        url="https://cict.wvsu.edu.ph/"
      />
      <Layout className="layout">
        <div className="border-1 border-gray-200">
          <Header className="w-full">
            <div className="container mx-auto">
              <Link to="/"><div className="brand-icon" style={{ backgroundImage: `url(${BrandIcon})` }} /></Link>
              <Menu mode="horizontal" defaultSelectedKeys={['1']} className="float-right block lg-hidden" >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Programs</Menu.Item>
                <Button type="primary">Apply to CICT</Button>
              </Menu>
            </div>
          </Header>
        </div>
        <Content className="bg-white p-0">
          <div>
            <div className="w-full">
              <div className="billboard">
                <div className="container mx-auto billboard-greeting">
                  <Row>
                    <Col span={12}>
                      <div className="grid py-32">
                        <span>Your Future with Technology</span>
                        <span className="billboard-header">Hello World!</span>
                        <span className="font-normal">
                          West Visayas State University College of ICT continues the tradition of excellence through quality education, innovative ICT researches, and extension services to various stakeholders.
                        </span>
                        <Button className="mt-8 w-64" type="primary" size="large">Apply Now</Button>
                      </div>
                    </Col>
                    <Col span={12}>
                      <img src={ICTGraphics} className="img-billboard mx-auto mt-8" />
                    </Col>
                  </Row>

                </div>
              </div>
            </div>
            <div className="w-full bg-gray-300">
              <div className="container mx-auto">

              </div>
            </div>
            <div className="w-full bg-gray-500">
              <div className="container mx-auto bg-gray-200 py-8">
                <div>
                  <h2 className="section-title">News and Updates</h2>
                  <div className="card">

                  </div>
                </div>
                <div>
                  <h2 className="section-title">Course Offerings</h2>
                  <div className="card">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ backgroundColor: '#212121' }}>
          <div className="w-full text-center">
            <span className="font-normal text-white">
              CICT Online ©2020 by CICTzens
            </span>
          </div>

        </Footer>
      </Layout>
    </div>
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
