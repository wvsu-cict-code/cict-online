import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Netlify Auth Widget
import netlifyIdentity from 'netlify-identity-widget';

// Fix for typescript window error
declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

if (window) {
  window.netlifyIdentity = netlifyIdentity;
}

netlifyIdentity.init();

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp: Function) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
