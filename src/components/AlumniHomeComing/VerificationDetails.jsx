import { Button, Divider, Icon } from 'antd';
import React, { Component } from 'react';

import RegistrationSteps from './RegistrationSteps';

import dogo from '../../assets/misc/reg-verified.png';

const VerificationDetails = props => (
    <React.Fragment>
        <RegistrationSteps current={2} />
        <div className="text-left my-8 mx-4">
            <h3 className="mb-4">How to Check</h3>
            <p className="mb-4">Upon verification, the registration committee will update your registration profile status. An indicator (green badge) will be shown on your profile info in addition to the email the registration team sent you.</p>
            <img className="w-64 h-auto mx-auto zoom" src={dogo} alt="" />
            <p className="mt-4">You may also message us on our <a className="font-bold" href="https://www.facebook.com/cictwvsu/" target="_blank" rel="noopener noreferrer">college Facebook page</a> for additional inquiries.</p>
            <h4 className="my-4">See you this coming January 20!</h4>
            <div className="text-center mx-4">
                <Button.Group>
                    <Button type="ghost" onClick={props.backToPayment}>
                        <Icon type="left" />Review Payment Instructions
          </Button>
                    <Button type="primary" onClick={props.backToRegistration}>
                        Finished<Icon type="right" />
                    </Button>
                </Button.Group>
            </div>
            <Divider />
        </div>
    </React.Fragment>
)

export default VerificationDetails;