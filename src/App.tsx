import { Link, Redirect, Router } from '@reach/router';
import { Button, Col, Layout, Menu, Row, Drawer, Grid } from 'antd';
import SEO from 'components/SEO';
import React, { Component, useState } from 'react';
import Slider from "react-slick";
import { addPrefetchExcludes, Root } from 'react-static';
import { MenuOutlined } from '@ant-design/icons';
import './app.less';
import BLISIcon from './assets/blis-icon.svg';
import BrandIcon from './assets/brand.svg';
import CSIcon from './assets/cs-icon.svg';
import EMCIcon from './assets/emc-icon.svg';
import ICTGraphics from './assets/ict.svg';
import ISIcon from './assets/is-icon.svg';
import ITIcon from './assets/it-icon.svg';
import CICTLogo from './assets/logo.svg';
import MITIcon from './assets/msit-icon.svg';

const { Header, Footer, Content } = Layout;

const { useBreakpoint } = Grid

const programs = [
  {
    name: "Information Technology",
    icon: ITIcon,
    description: "Study, analyze, design, develop, implement, and evaluate ICT solutions. "
  },
  {
    name: "Information Systems",
    icon: ISIcon,
    description: "Design and implementation of solutions that integrate information technology with business processes. "
  },
  {
    name: "Computer Science",
    icon: CSIcon,
    description: "Designing, writing and developing computer programs and computer networks."
  },
  {
    name: "Library and Information Science",
    icon: BLISIcon,
    description: "Management of library operations, the systematic organization, conservation, preservation and restoration of books, historical and cultural documents and other intellectual properties."
  },
  {
    name: "Entertainment and Multimedia Computing",
    icon: EMCIcon,
    description: "Computing in the design and development of multimedia products and solutions. "
  },
  {
    name: "Masters in Information Technology",
    icon: MITIcon,
    description: "Advanced computing subjects, or move into a new IT specialisation. "
  },

]

let netlifyIdentity: any;
if (typeof document !== 'undefined') {
  netlifyIdentity = require('netlify-identity-widget')
}



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

const Arrow = (props: any) => {
  const { className, style, onClick, symbol } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {symbol}
    </div>
  );
}

const slickSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  nextArrow: <Arrow symbol=">" />,
  prevArrow: <Arrow symbol="<" />
};

const Public: any = () => {
  let [collapsed, toggleMenu] = useState(false)
  const screens = useBreakpoint()
  const breakpoints = Object.entries(screens)
    .filter(screen => !!screen[1])
    .map(screen => screen[0])
  console.log(breakpoints)
  return (
    <div>
      <div>
        <SEO
          title="WVSU CICT - Home"
          description="Official website of the College of ICT."
          url="https://cict.wvsu.edu.ph/"
        />
        <Layout className="layout">
          <Drawer
            title="CICT Online"
            placement="right"
            closable
            onClose={() => toggleMenu(collapsed = !collapsed)}
            visible={collapsed}
          >
            <Menu defaultSelectedKeys={['1']} >
              <Menu.Item key="1">Home</Menu.Item>
              <Button type="primary">Apply to CICT</Button>
            </Menu>
          </Drawer>
          <Layout>
            <div className="border-1 border-gray-200">
              <Header className="w-full">
                <div className="container mx-auto">
                  <Link to="/"><div className="brand-icon" style={{ backgroundImage: `url(${BrandIcon})` }} /></Link>
                  <Menu mode="horizontal" defaultSelectedKeys={['1']} className="navbar" >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Button type="primary">Apply to CICT</Button>
                  </Menu>
                  <Button style={{ lineHeight: '10px' }} className="mobile-menu-button" icon={<MenuOutlined />} onClick={() => toggleMenu(collapsed = !collapsed)} />
                </div>
              </Header>
            </div>
            <Content className="bg-white p-0 px-8">
              <div>
                <div className="w-full">
                  <div className="billboard">
                    <div className="container mx-auto billboard-greeting">
                      <Row>
                        <Col span={breakpoints.includes('md')?12:24}>
                          <div className="billboard-greeting-text">
                            <span className="text-lg">Your Future with Technology</span>
                            <span className="billboard-header">Hello World!</span>
                            <span className="font-normal text-lg">
                              West Visayas State University College of ICT continues the tradition of excellence through quality education, innovative ICT researches, and extension services to various stakeholders.
                          </span>
                            <Button className={breakpoints.includes('md')?"mt-8 w-64":"mt-8 w-full"} type="primary" size="large">Apply Now</Button>
                          </div>
                        </Col>
                        <Col span={breakpoints.includes('md')?12:24}>
                          <img src={ICTGraphics} className="img-billboard mx-auto mt-8" />
                        </Col>
                      </Row>

                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="container mx-auto py-8">
                    <h2 className="text-center text-4xl">Courses Offered</h2>
                    <p className="max-w-lg mx-auto text-center font-normal text-lg">Your Foundation of Excellence in ICT.</p>
                    <div className="px-8">
                      <Slider {...slickSettings}>
                        {programs.map(i => (
                          <div className="w-32 mx-8">
                            <img className="mx-auto h-40" src={i.icon} alt="" />
                            <p className="text-center text-lg mx-auto" style={{ maxWidth: '180px' }}>{i.name}</p>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="container mx-auto py-8">
                    <img src={CICTLogo} className="w-40 h-40 mx-auto my-4" alt="CICT Logo" />
                    <h2 className="text-center text-4xl">Upholding the Tradition of Excellence</h2>
                    <p className="max-w-lg mx-auto text-center font-normal text-lg">Information and Communications Technology has penetrated the core of societal and individual lives. Its development is changing the course of all other technologies. ICT has now become less of a choice and more of a requirement for individuals and societies concerned with competitiveness in the international arena.</p>
                  </div>
                </div>
              </div>
            </Content>
            <Footer style={{ backgroundColor: '#fff' }}>
              <div className="w-full text-center">
                <span className="font-normal text-gray-500">
                  CICT Online ©2020 by CICTzens
              </span>
              </div>

            </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

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
