import { Button, Col, Layout, Row, Alert } from 'antd';
import 'antd/dist/antd.less';
import React from 'react';
import Helmet from 'react-helmet';
import MediaQuery from 'react-responsive';
import 'react-typist/dist/Typist.css';
import '../app.less';
import HomeNavbar from '../components/HomeNavbar';
import useSiteMetadata from './SiteMetadata';
const { Header, Content } = Layout;
const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/img/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-32x32.png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="/img/favicon-16x16.png"
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href="/img/safari-pinned-tab.svg"
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="https://cict.wvsu.edu.ph/" />
                <meta property="og:image" content="https://cictwvsu.com/img/og-image.jpg" />
                <meta property="og:description" content="Official Website of the College of ICT" />
                <meta property="og:image" content="https://cictwvsu.com/img/og-image.jpg" />
                <meta property="fb:app_id" content="2302291186701393" />

            </Helmet>
            <Layout className="layout home-page">
                <MediaQuery minDeviceWidth={1224}>

                    <div className="home-page--layer-bg" style={{ backgroundImage: `url(${require('../img/assets/bg-frame.svg')})` }}>
                        <div className="home-page--illustration-1" style={{ backgroundImage: `url(${require('../img/assets/illustrations-home-1.svg')})` }}>
                            <div className="home-page--illustration-2" style={{ backgroundImage: `url(${require('../img/assets/illustrations-social-1.svg')})` }}>
                                <Header style={{ backgroundColor: 'transparent' }}>
                                    <HomeNavbar />
                                </Header>

                                <Content>
                                    <div className="content">
                                        <Row style={{ margin: '6rem auto' }}>
                                            <Col span={12}>
                                                <img style={{ height: '100px', width: 'auto' }} src={require('../img/assets/home-greeting.svg')} />
                                                <p style={{ marginTop: '1.5rem', fontSize: '1.3rem' }}>West Visayas State University College of ICT continues the tradition of excellence through quality education, innovative ICT researches, and extension services to various stakeholders.</p>
                                            </Col>
                                            <Col span={12} />
                                        </Row>
                                        <div>{children}</div>
                                        <div style={{ backgroundColor: 'transparent', margin: '12rem 0 0 0' }}>
                                            <Button type="default" style={{ marginRight: '1rem', borderColor: '#fff' }} size="large" shape="circle" icon="github" />
                                            <Button type="default" style={{ marginRight: '1rem', borderColor: '#fff' }} size="large" shape="circle" icon="facebook" />
                                            <Button type="default" style={{ marginRight: '1rem', borderColor: '#fff' }} size="large" shape="circle" icon="twitter" />
                                            <Button type="default" style={{ marginRight: '1rem', borderColor: '#fff' }} size="large" shape="circle" icon="youtube" />
                                        </div>
                                    </div>
                                </Content>
                            </div>
                        </div>
                    </div>

                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                    <div className="home-page--layer-bg" style={{ backgroundImage: `url(${require('../img/assets/mobile-bg.png')})` }}>
                        <div style={{ padding: '2rem' }}>
                            <div className="center">
                                <Row>
                                    <Col>
                                        <img style={{ height: '50px', width: 'auto', margin: '1rem auto' }} src={require('../img/brandicon.svg')} />
                                    </Col>
                                    <Col>
                                        <img style={{ height: '200px', width: 'auto', margin: '2rem auto' }} src={require('../img/mascot.png')} />
                                    </Col>
                                </Row>
                            </div>
                            <Alert type="error" message={<p>Oops! Sorry CICTzen - this page is not yet optimized for mobile. <a target="_blank" href="https://github.com/wvsu-cict-code/cict-online">Help us implement this feature</a></p>} />
                        </div>
                    </div>
                </MediaQuery>
            </Layout>
        </div>
    )
}

export default TemplateWrapper

