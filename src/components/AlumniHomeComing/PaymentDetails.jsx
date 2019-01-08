import { Alert, Divider, Icon, Steps } from 'antd';
import React, { Component } from 'react';

const Step = Steps.Step;

const inclusions = [
    'Rental (Tables and Chairs)',
    'Tarpaulin Printing',
    'Stage Setup',
    'Lights and Sounds',
    'Food for Guests',
    'Souvenirs',
]

const PaymentDetails = props => (
    <React.Fragment>
        <div className="text-left mb-4 mx-4 max-w-sm mx-auto">
            <h3 className="mb-4">Registration Fee</h3>
            <h2 className="mb-4">₱300.00</h2>
            <h3 className="mb-4">Payment Inclusions</h3>
            <ul className="mb-8">
                {inclusions.map(i => (
                    <li><span className="font-bold">{i}</span></li>
                ))}
            </ul>
            <Alert showIcon type="info" message="If there are challenges to pay thru bank, we will accept cash payment at the venue." />
            <Divider />
            <h3 className="mb-4">How to Pay</h3>
            <Steps direction="vertical" current={3}>
                <Step title="Deposit Payment" icon={<Icon type="bank" />} description={<span>Deposit your payment through <span className="font-bold">BPI</span> under a joint account (<span className="font-bold">MA BETH SOLAS CONCEPCION</span> and <span className="font-bold">SHEM DURST ELIJAH BALIGUAT SANDIG</span>) with an account number: <span className="font-bold">1339 368 288</span></span>} />
                <Step title="Send a Snap" icon={<Icon type="camera" />} description={<span>Email us a picture of your deposit slip at <a href="mailto:cictalumniandfaculty2019@gmail.com" className="font-bold">cictalumniandfaculty2019@gmail.com</a></span>} />
                <Step title="Wait for Verification" icon={<Icon type="inbox" />} description={<span>Wait for your registration and payment to be verified. An email will be sent to you <a className="font-bold" href={`mailto:${props.email}`}>{props.email}</a> not more than two days.</span>} />
            </Steps>
        </div>
    </React.Fragment>
)

export default PaymentDetails;