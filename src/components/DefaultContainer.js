import React, { Component } from 'react'

class DefaultContainer extends Component {
  render () {
    return (
      <div className="w-full theme-color border-b">
        <div className="container mx-auto p-8">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default DefaultContainer
