import React from 'react'
import { withSiteData, Head } from 'react-static'
import { Fade } from 'react-reveal'
import { Icon } from 'semantic-ui-react'
//
import v2Logo from '../assets/cictonline-logo-light.png'
import maintenanceBG from '../assets/background.jpg'
import ogImage from '../assets/og-image.jpg'

export default withSiteData(() => (
  <div className="maintenance_page_fullscreen" style={{ backgroundImage: `url(${maintenanceBG})` }}>
    <Head>
      <title>CICT Online</title>
      <meta property="og:url" content="http://cictwvsu.com/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="CICT WVSU" />
      <meta property="og:description" content="Page under construction." />
      <meta property="og:image" content={ogImage} />
    </Head>
    <Fade>
      <div className="maintenance_logo__centered" style={{ backgroundImage: `url(${v2Logo})` }} />
    </Fade>
    <Fade>
      <div className="maintenance_social_links">
        <a href="https://github.com/wvsu-cict-code" className="maintenance_social_links_item" ><Icon name="github" inverted size="big" /></a>
        <a href="https://www.facebook.com/cictwvsu/" className="maintenance_social_links_item" ><Icon name="facebook" inverted size="big" /></a>
        <a href="https://twitter.com/cictwvsu" className="maintenance_social_links_item" ><Icon name="twitter" inverted size="big" /></a>
        <a href="https://medium.com/cictwvsu-online" className="maintenance_social_links_item" ><Icon name="medium" inverted size="big" /></a>
      </div>
    </Fade>
  </div>
))
