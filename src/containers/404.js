import React from 'react'
import { Header } from 'semantic-ui-react'
import { Head } from 'react-static'
import maintenanceBG from '../assets/background-dark.jpg'

export default () => (
  <div className="maintenance_page_fullscreen" style={{ backgroundImage: `url(${maintenanceBG})` }}>
    <Head>
      <script async defer src="https://buttons.github.io/buttons.js" />
    </Head>
    <div className="maintenance_404__centered">
      <Header textAlign="center" content="Page not found!" inverted size="huge" />
      <Header inverted textAlign="center" content="Help us build a better college website!" />
      <a className="github-button" href="https://github.com/wvsu-cict-code/cict-online" data-size="large" aria-label="Visit @wvsu-cict-code/cict-online on GitHub">Contribute</a>
    </div>
  </div>
)
