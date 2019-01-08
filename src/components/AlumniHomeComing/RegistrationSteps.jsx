import { Steps } from 'antd';
import React, { Component } from 'react';

const Step = Steps.Step;

const RegistrationSteps = props => (
    <div className="mb-4 mt-8 mx-auto text-left max-w-sm">
        <Steps current={props.current}>
            <Step title="Register" />
            <Step title="Check Payment Status" />
        </Steps>
    </div>
)

export default RegistrationSteps;