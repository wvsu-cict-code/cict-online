import React, { Component } from 'react'
import { CornerDialog } from 'evergreen-ui'

class CornerModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCornerDialogOpen: true,
    }
    this.onCloseComplete = this.onCloseComplete.bind(this)
  }

  onCloseComplete() {
    this.setState({isCornerDialogOpen: false})
  }

  openGitHubRepo() {
    if(window){
      window.open('https://github.com/wvsu-cict-code/cict-online', '_blank')
    }else{
      alert('Window object does not exist')
    }
  }

  render () {
    return (
      <div>
        <CornerDialog
          title="Hello Stranger! It's been a while."
          isShown={this.state.isCornerDialogOpen}
          onCloseComplete={this.onCloseComplete}
          onConfirm={this.openGitHubRepo}
        >
          This website is still under heavy development.
          Please help us improve by contributing to the
          source code or by reporting issues.
        </CornerDialog>
      </div>
    )
  }
}

export default CornerModal