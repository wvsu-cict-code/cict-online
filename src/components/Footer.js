import React from 'react'
import { Link } from 'gatsby'
import { Layout } from 'antd';
import logo from '../img/brandicon.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const {Footer} = Layout

const index = class extends React.Component {
  render() {
    return (
      <Footer style={{ backgroundColor: '#222B2F', color: 'rgba(255,255,255,0.5)' }}>
      <small>{`</> with <3 by CICTzens | 2016 - Present`}</small>
      </Footer>
    )
  }
}

export default index
