import { Steps } from 'antd';
import React, { Component } from 'react';

const Step = Steps.Step;

const RegistrationSteps = props => (
    <div className="mb-4 mt-8 mx-8 text-left">
        <Steps current={props.current}>
            <Step title="Register" />
            <Step title="Pay Registration" />
            <Step title="Check Payment Status" />
        </Steps>
    </div>
)

export default RegistrationSteps;