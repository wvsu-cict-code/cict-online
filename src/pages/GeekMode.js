import React, { Component } from 'react'
import ReactTerminal from 'react-terminal-component'
import {
  EmulatorState, OutputFactory,
  Outputs,
} from 'javascript-terminal'

class GeekMode extends Component {
  render() {
    const defaultState = EmulatorState.createEmpty();
    const defaultOutputs = defaultState.getOutputs();

    const newOutputs = Outputs.addRecord(
      defaultOutputs, OutputFactory.makeTextOutput(
        `Welcome to Geek Mode! You can browse CICT Online using
        commands. For a list of available commands, execute help`
      )
    );
    const emulatorState = defaultState.setOutputs(newOutputs);
    return (
      <ReactTerminal
        inputStr=''
        promptSymbol='~ guest#'
        emulatorState={emulatorState}
      />
    )
  }
}

export default GeekMode