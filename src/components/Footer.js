import { Layout } from 'antd';
import React from 'react';

const {Footer} = Layout

const index = class extends React.Component {
  render() {
    return (
      <Footer style={{ backgroundColor: '#222B2F', color: 'rgba(255,255,255,0.5)', marginTop: '8rem' }}>
      <small>{`</> with <3 by CICTzens | 2016 - Present`}</small>
      </Footer>
    )
  }
}

export default index
