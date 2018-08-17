import React, { Component } from 'react'

class DarkContainer extends Component {
  render () {
    return (
      <div className="w-full cict-darker border-b">
        <div className="container mx-auto p-8">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DarkContainer
