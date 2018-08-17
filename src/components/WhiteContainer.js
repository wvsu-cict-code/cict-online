import React, { Component } from 'react'

class WhiteContainer extends Component {
  render () {
    return (
      <div className="w-full bg-white border-b">
        <div className="container mx-auto p-8">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default WhiteContainer
