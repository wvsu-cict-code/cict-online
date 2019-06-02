import React from 'react'
import { Button, Typography, Divider, Row, Col, List, Avatar } from 'antd';
import Typist from 'react-typist';
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

const { Title } = Typography;

const cursorOptions = {
  show: true,
  blink: true,
  description: '',
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
}

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ margin: '0 1rem' }}>
          <div style={{ padding: '2rem 1rem' }}>
          <Title level={2}><Typist cursor={cursorOptions}>{`> Latest Updates`}</Typist></Title>
            <section className="section">
              <div className="container">
                <div className="content">
                  <BlogRoll />
                </div>
              </div>
            </section>
          </div>
        </div>

      </Layout>
    )
  }
}
