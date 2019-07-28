import { Layout } from 'antd';
import 'antd/dist/antd.less';
import React from 'react';
import Helmet from 'react-helmet';
import 'react-typist/dist/Typist.css';
import '../app.less';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';

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
        <meta property="og:url" content="http://cict.wvsu.edu.ph/" />
        <meta property="og:image" content="https://cictwvsu.com/img/og-image.jpg" />        
      </Helmet>
      <Layout className="layout">
      <Navbar />
      <div style={{backgroundColor: '#fff', borderTop:' 1px solid #e8e8e8', padding: '0 2rem'}}>{children}</div>
      <Footer />
      </Layout>
    </div>
  )
}

export default TemplateWrapper
