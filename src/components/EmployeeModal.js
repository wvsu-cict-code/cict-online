import React, { Component } from 'react'
import { CornerDialog } from 'evergreen-ui'

class CornerModal extends Component {
  render () {
      const { description } = this.props
    return (
      <div>
        <CornerDialog
          {...this.props}
        >
          {description}
        </CornerDialog>
      </div>
    )
  }
}

export default CornerModal