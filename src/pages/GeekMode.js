import { EmulatorState, OutputFactory, Outputs } from 'javascript-terminal';
import React, { Component } from 'react';
import ReactTerminal from 'react-terminal-component';
import Helmet from '../components/Helmet';

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
      <React.Fragment>
        <Helmet
          title="CICT Online - Geek Mode"
          description="West Visayas State University, College of Information and Communications Technology Website"
        />
        <ReactTerminal
          inputStr=''
          promptSymbol='guest:~$'
          emulatorState={emulatorState}
          theme={{
            background: '#222B2F',
            promptSymbolColor: '#6effe6',
            commandColor: '#fcfcfc',
            outputColor: '#fcfcfc',
            errorOutputColor: '#ff89bd',
            fontSize: '1.1rem',
            spacing: '1%',
            height: '100vh',
            fontFamily: 'monospace',
          }}
        />
      </React.Fragment>
    )
  }
}

export default GeekMode