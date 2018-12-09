import React, { Component } from 'react'
import { Head } from 'react-static'

import icon192 from '../assets/android-icon-192x192.png'
import icon114 from '../assets/apple-icon-114x114.png'
import icon120 from '../assets/apple-icon-120x120.png'
import icon144 from '../assets/apple-icon-144x144.png'
import icon152 from '../assets/apple-icon-152x152.png'
import icon180 from '../assets/apple-icon-180x180.png'
import icon57 from '../assets/apple-icon-57x57.png'
import icon60 from '../assets/apple-icon-60x60.png'
import icon72 from '../assets/apple-icon-72x72.png'
import icon76 from '../assets/apple-icon-76x76.png'
import icon16 from '../assets/favicon-16x16.png'
import icon32 from '../assets/favicon-32x32.png'
import icon96 from '../assets/favicon-96x96.png'
import favicon from '../assets/favicon.ico'
import icon144ms from '../assets/ms-icon-144x144.png'



class Helmet extends Component {
  render () {
    const { ogImage, description, title} = this.props
    return (
      <Head>
        <title>{title}</title>
        <meta property="og:url" content="http://cictwvsu.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CICT Online" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <link rel="apple-touch-icon" sizes="57x57" href={icon57} />
        <link rel="apple-touch-icon" sizes="60x60" href={icon60} />
        <link rel="apple-touch-icon" sizes="72x72" href={icon72} />
        <link rel="apple-touch-icon" sizes="76x76" href={icon76} />
        <link rel="apple-touch-icon" sizes="114x114" href={icon114} />
        <link rel="apple-touch-icon" sizes="120x120" href={icon120} />
        <link rel="apple-touch-icon" sizes="144x144" href={icon144} />
        <link rel="apple-touch-icon" sizes="152x152" href={icon152} />
        <link rel="apple-touch-icon" sizes="180x180" href={icon180} />
        <link rel="icon" type="image/png" sizes="192x192" href={icon192} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="96x96" href={icon96} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <link rel="icon" href={favicon} type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={icon144ms} />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    )
  }
}

export default Helmet
