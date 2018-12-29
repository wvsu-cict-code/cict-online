import { Button, Checkbox, Badge, Form, Icon, Input, notification, Popover, Select, Spin, Steps, Divider } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { Clock, MapPin } from 'react-feather';
import Gravatar from 'react-gravatar';
import { Fade, Slide } from 'react-reveal';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';
import { Link } from 'react-static';
import InlineSVG from 'svg-inline-react';
import uuidv4 from 'uuid/v4';

import brandIconLight from '../assets/brandicon-light.svg';
import bgLeft from '../assets/misc/alumni-2019-bg-left.jpg';
import bgRight from '../assets/misc/alumni-2019-bg-right.jpg';
import brandLogo from '../assets/misc/alumni-2019-brand.svg';
import ogImage from '../assets/misc/alumni-2019.jpg';
import divider from '../assets/misc/divider.svg';
import DisqusThread from '../components/DisqusThread';
import Helmet from '../components/Helmet';
import Navbar from '../components/Navbar';

import dogo from '../assets/misc/reg-verified.png'

const jdenticon = require('jdenticon')

const theme = {
    text: 'font-light alumni-2019-theme-text--color mt-2',
    link: 'alumni-2019-theme-text--color mt-2 no-underline hover:text-orange',
}
const Step = Steps.Step;
const FormItem = Form.Item;
const Option = Select.Option;
const yearStartRange = _.range(2000, (new Date()).getFullYear(), 1)
const yearEndRange = _.range(2004, (new Date()).getFullYear(), 1)
const courses = [
    {
        name: 'Bachelor of Science in Information Management',
        value: 'bsim'
    },
    {
        name: 'Bachelor of Science in Information Technology',
        value: 'bsit'
    },
    {
        name: 'Bachelor of Science in Information Systems',
        value: 'bsis'
    },
    {
        name: 'Bachelor of Science in Computer Science',
        value: 'bscs'
    },
    {
        name: 'Masters in Information Technology',
        value: 'mit'
    },
]

const RegistrationSteps = props => (
    <div className="mb-4 mt-8 mx-8 text-left">
        <Steps current={props.current}>
            <Step title="Register" />
            <Step title="Pay Registration" />
            <Step title="Check Payment Status" />
        </Steps>
    </div>
)

const RegistrationForm = props => (
    <React.Fragment>
        <RegistrationSteps current={0} />
        <Spin spinning={props.submitting}>
            <Form key={props.formKey} onSubmit={props.handleSubmit} className="alumni-registration-form px-4 lg:px-auto mx-auto pb-8 text-left sm:px-4 xs:px-4">
                <small>* Required Fields</small>
                <FormItem required label="Basic Info" className="my-0">
                    <FormItem className="mt-0">
                        <Input addonBefore="First Name" required size="large" name="fname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Your First Name" onChange={e => props.handleChange(e, 'fname')} />
                    </FormItem>
                    <FormItem>
                        <Input addonBefore="Middle Name" required size="large" name="mname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Your Middle Name" onChange={e => props.handleChange(e, 'mname')} />
                    </FormItem>
                    <FormItem>
                        <Input addonBefore="Last Name" required size="large" name="sname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Your Last Name" onChange={e => props.handleChange(e, 'sname')} />
                    </FormItem>
                </FormItem>

                <FormItem required label="Year Entered the College">
                    <Select showSearch size="large" placeholder="Select a Year" onChange={e => props.handleSelectionChange(e, 'ystart')}>
                        {yearStartRange.map(i => (
                            <Option key={i} value={i}>{i}</Option>
                        ))}
                    </Select>
                </FormItem>
                <FormItem required label="Year Graduated from the College">
                    <Select showSearch size="large" placeholder="Select a Year" onChange={e => props.handleSelectionChange(e, 'yend')}>
                        {yearEndRange.map(i => (
                            <Option key={i} value={i}>{i}</Option>
                        ))}
                    </Select>
                </FormItem>
                <FormItem required label="Course">
                    <Select showSearch size="large" placeholder="Select a Course" onChange={e => props.handleSelectionChange(e, 'course')}>
                        {courses.map(i => (
                            <Option key={i.value} value={i.value}>{i.name}</Option>
                        ))}
                    </Select>
                </FormItem>
                <FormItem required label="Company Affiliated">
                    <Input required addonBefore="Details" name="company" size="large" placeholder="Where are you working now?" onChange={e => props.handleChange(e, 'company')} />
                </FormItem>
                <FormItem required label="Profile Email">
                    <FormItem>
                        <p className="text-center mb-4" >
                            {
                                props.noGravatar ?
                                    <InlineSVG src={jdenticon.toSvg(props.email, 150)} className="rounded-full mx-0 my-4" /> :
                                    <Gravatar default="monsterid" size={150} className="rounded-full mx-0 my-4" email={props.email} />
                            }
                        </p>
                        <Input addonBefore={props.noGravatar ? "Email" : "Gravatar Email"} type="email" size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={props.noGravatar ? "Email" : "Gravatar Email"} onChange={e => props.handleChange(e, 'email')} name="email" />
                        <p><a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">Create your own Gravatar</a></p>
                        <Checkbox name="noGravatar" checked={props.noGravatar} onChange={props.onCheckboxChange}>I don't have a Gravatar email.</Checkbox>
                    </FormItem>
                    <FormItem required label="Mobile/Landline">
                        <Input name="contact" size="large" placeholder="Your Number" onChange={e => props.handleChange(e, 'contact')} />
                    </FormItem>


                </FormItem>

                <p className="text-center">
                    <Button loading={props.submitting} type="primary" htmlType="submit" className="w-full">
                        Register Now
                </Button>
                <Button onClick={props.skipRegistration} type="ghost" htmlType="submit" className="w-full mt-2">
                        Already Registered?
                </Button>
                </p>
            </Form>
        </Spin>
    </React.Fragment>
)

const VerificationDetails = props => (
    <React.Fragment>
        <RegistrationSteps current={2} />
        <div className="text-left my-8 mx-4">
        <h3 className="mb-4">How to Check</h3>
        <p className="mb-4">Upon verification, the registration committee will update your registration profile status. An indicator (green badge) will be shown on your profile info in addition to the email the registration team sent you.</p>
        <img className="w-64 h-auto mx-auto zoom" src={dogo} alt="" />
        <p className="mt-4">You may also message us on our <a className="font-bold" href="https://www.facebook.com/cictwvsu/" target="_blank" rel="noopener noreferrer">college Facebook page</a> for additional inquiries.</p>
        <h4 className="my-4">See you soon!</h4>
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

const PaymentDetails = props => (
    <React.Fragment>
        <RegistrationSteps current={1} />
        <div className="text-left my-8 mx-4">
        <h3 className="mb-4">Registration Fee</h3>
        <h2 className="mb-4">₱300.00</h2>
            <h3 className="mb-4">Payment Inclusions</h3>
            <ul className="mb-8">
                <li><span className="font-bold">Rental (Tables and Chairs)</span></li>
                <li><span className="font-bold">Tarpaulin Printing</span></li>
                <li><span className="font-bold">Stage Setup</span></li>
                <li><span className="font-bold">Lights and Sounds</span></li>
                <li><span className="font-bold">Food for Guests</span></li>
            </ul>
            <Divider />
            <h3 className="mb-4">How to Pay</h3>
            <Steps direction="vertical" current={props.current}>
                <Step title="Deposit Payment" icon={<Icon type="bank" />} description={<span>Deposit your payment through <span className="font-bold">BPI</span> under a joint account (<span className="font-bold">MA BETH SOLAS CONCEPCION</span> and <span className="font-bold">SHEM DURST ELIJAH BALIGUAT SANDIG</span>) with an account number: <span className="font-bold">1339 368 288</span></span>} />
                <Step title="Send a Snap" icon={<Icon type="camera" />} description={<span>Email us a picture of your deposit slip at <a href="mailto:cictalumniandfaculty2019@gmail.com" className="font-bold">cictalumniandfaculty2019@gmail.com</a></span>} />
                <Step title="Wait for Verification" icon={<Icon type="inbox" />} description={<span>Wait for your registration and payment to be verified. An email will be sent to you <a className="font-bold" href={`mailto:${props.email}`}>{props.email}</a> not more than two days.</span>} />
            </Steps>
        </div>
        <div className="max-w-sm mx-auto text-center mb-8 px-4">
            <Button onClick={props.donePaying} type="primary" className="w-full">
                Already Did!
                </Button>
        </div>
    </React.Fragment>
)
class Alumni extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attendees: [],
            email: '',
            fname: '',
            mname: '',
            sname: '',
            ystart: '',
            yend: '',
            course: '',
            company: '',
            contact: '',
            noGravatar: false,
            submitting: false,
            count: 0,
            loadingAttendees: true,
            formKey: uuidv4(),
            activeSubroute: 'register',
            currentPayStep: 0,
        }
    }

    switchSubroute = route => {
        this.setState({ activeSubroute: route })
    }

    donePaying = () => {
        this.setState({ currentPayStep: 2 })
        setTimeout(() => {
            this.switchSubroute('verify')
        }, 1000)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submitting: true })
        const { fname, mname, sname, ystart, yend, course, company, contact, email, noGravatar } = this.state
        axios.get('https://us-central1-cict-online.cloudfunctions.net/addNewEntry', {
            params: {
                data: [
                    moment().format('MMMM Do YYYY, h:mm:ss a'),
                    fname,
                    mname,
                    sname,
                    ystart,
                    yend,
                    course,
                    company,
                    contact,
                    email,
                    noGravatar,
                    false
                ]
            }
        }).then(res => {
            const app = this
            if (res) {
                notification.success({
                    message: `Thank you ${fname}!`,
                    description: 'You are now registered! Please checkout Step 2 for the payment instructions.',
                    onClose: () => {
                        app.getLatestData();
                    }
                })
            } else {
                notification.open({
                    message: 'Ooops!',
                    description: 'Sorry and error occured. Please contact us on our Facebook page.',
                });
            }
            setTimeout(() => {
                this.props.form.resetFields()
                this.setState({
                    submitting: false,
                    formKey: uuidv4()
                })
                this.switchSubroute('pay')
            }, 500)
        })
    }

    handleSelectionChange = (value, name) => {
        this.setState({
            [name]: value
        })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    getLatestData = (start, end) => {
        const app = this
        const attendeesQuery = `https://us-central1-cict-online.cloudfunctions.net/getRegisteredEntries?start=${start || 2}&end=${end || 5}`;
        axios.get(attendeesQuery).then(res => {
            if (Object.keys(res.data) !== 0) {
                app.setState({ attendees: res.data.reverse() })
            }
        })

        const countQuery = `https://us-central1-cict-online.cloudfunctions.net/countAllRegistered`;
        axios.get(countQuery).then(res => {
            if (Object.keys(res.data) !== 0) {
                app.setState({ count: res.data.length, loadingAttendees: false })
            }
        })
    }

    componentDidMount() {
        const app = this
        app.getLatestData()
    }

    onCheckboxChange = e => {
        const { name, checked } = e.target
        this.setState({ [name]: checked })
    }

    countAttendees = count => {        
        switch (count) {
            case 0:
                return 'Be the first to register!'
            case 1:
                return 'Wow! You are the first to register!'
            default:
                return <React.Fragment><span className="font-bold">{count}</span> CICTzens are attending!</React.Fragment>
        }
    }

    render() {
        const { attendees, email, noGravatar, submitting, formKey, count, currentPayStep, loadingAttendees, activeSubroute } = this.state
        const url = 'http://cictwvsu.com/alumni/';
        const quote = 'Register now!';
        const registrationProps = { email, noGravatar, formKey, submitting }
        let subroute = <React.Fragment />
        switch (activeSubroute) {
            case 'register':
                subroute = <RegistrationForm
                    {...registrationProps}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    handleSelectionChange={this.handleSelectionChange}
                    onCheckboxChange={this.onCheckboxChange}
                    skipRegistration={()=>this.switchSubroute('pay')}
                />
                break
            case 'pay':
                subroute = <PaymentDetails
                    email={email}
                    current={currentPayStep}
                    donePaying={this.donePaying}
                />
                break
            case 'verify':
                subroute = <VerificationDetails backToPayment={()=>this.switchSubroute('pay')} backToRegistration={()=>this.switchSubroute('register')} />
                break
            default:
                subroute = <React.Fragment />
        }
        return (
            <React.Fragment>
                <Helmet
                    title="Online Registration"
                    description="CICT Alumni Homecoming Registration"
                    ogImage={ogImage}
                    url="https://cictwvsu.com/alumni"
                />
                <Navbar />
                <div className="w-full text-center bg-no-repeat bg-left-bottom" style={{ backgroundImage: `url(${bgLeft})` }}>
                    <div className="w-full text-center bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${bgRight})` }}>

                        <div className="bg-white mx-auto max-w-md rounded pb-8">

                            <Slide top>
                                <img src={brandLogo} className="alumni-2019-brand mx-auto mt-8" alt="" />
                            </Slide>
                            <Fade>
                                <div className="container mx-auto px-8">
                                    <h1 className={theme.text}><a className={theme.link} href="https://twitter.com/search?q=cicttweet16&src=typd&lang=en" target="_black" rel="noopener noreferrer">#tweet16</a></h1>
                                    <p className={theme.text}><MapPin className={[theme.text, 'w-4 h-4']} /> West Visayas State University, CICT Grounds, Iloilo City</p>
                                    <p className={theme.text}><Clock className={[theme.text, 'w-4 h-4']} /> 8:30 AM - 6:00 PM</p>
                                </div>
                            </Fade>
                            <Fade>
                                {subroute}
                                <div className="text-center">
                                    <p className="mb-4">Share with your friends!</p>
                                    <div className="inline-flex mx-auto">
                                        <div className="zoom">
                                            <FacebookShareButton
                                                url={url}
                                                quote={quote}
                                                className="mx-2"
                                            >
                                                <FacebookIcon
                                                    size={32}
                                                    round />
                                            </FacebookShareButton>
                                        </div>
                                        <div className="zoom">
                                            <TwitterShareButton
                                                className="mx-2"
                                                url={url}
                                                title={quote}
                                            >
                                                <TwitterIcon
                                                    size={32}

                                                    round />
                                            </TwitterShareButton>
                                        </div>

                                        <div className="zoom">
                                            <EmailShareButton
                                                className="mx-2"
                                                url={url}
                                                subject={quote}
                                                body="Register for CICT Alumni Homecoming 2019!"
                                            >
                                                <EmailIcon
                                                    size={32}
                                                    round />
                                            </EmailShareButton>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                        </div>
                        <div className="max-w-md mx-auto pb-8">
                            <img src={divider} className="w-48 h-auto mx-auto mt-4 mb-8" alt="" />
                            <h3 className={theme.text}>{this.countAttendees(count||0)}</h3>
                            <Spin className="mx-auto w-full" spinning={submitting}>
                                <div className="flex flex-wrap mt-8 mx-4">
                                    {loadingAttendees && <Spin className="mx-auto" />}
                                    {attendees && attendees.map(i => (

                                        <div key={uuidv4()} className="sm:w-full md:w-full lg:w-1/6 xl:1/6 mb-4 zoom justify-center text-center">
                                            <Popover content={
                                                <React.Fragment>
                                                    <div>
                                                        Batch {i[5]}, {_.upperCase(i[6])}
                                                        <hr />
                                                    </div>
                                                    {i[11]&&JSON.parse(i[11])&&<small className="opacity-75"><Icon type="check-circle" theme="filled" style={{ color: 'green' }} /> Payment Verified</small>}
                                                </React.Fragment>
                                            } title={<p className="text-center pt-2">{
                                                i[10]&&JSON.parse(i[10]) ?
                                                    <InlineSVG src={jdenticon.toSvg(i[9], 90)} className="w-24 h-auto rounded-full" />
                                                    :
                                                    <Gravatar default="monsterid" size={100} className="w-24 h-auto rounded-full" email={i[9]} />
                                            }<br />{i[3]}, {i[2]} {i[1]}</p>}>
                                                <div className="w-16 h-16 border-2 mb-4 rounded-full alumni-2019-theme-border--color p-2 mx-auto">
                                                    {
                                                        i[10]&&JSON.parse(i[10]) ?
                                                            <Badge status={JSON.parse(i[11])?"success":"default"} offset={[-4,35]}>
                                                                <InlineSVG src={jdenticon.toSvg(i[9], 44)} className="w-16 h-auto rounded-full" />
                                                            </Badge>
                                                            :
                                                            <Badge status={i[11]&&JSON.parse(i[11])?"success":"default"} offset={[-4,35]}>
                                                                <Gravatar default="monsterid" size={100} className="w-16 h-auto rounded-full" email={i[9]} />
                                                            </Badge>
                                                    }
                                                </div>
                                            </Popover>
                                        </div>
                                    )
                                    )}

                                    {!loadingAttendees && count>10 &&<Link to="/homecoming2019" className="w-16 h-16 border-2 mb-4 rounded-full alumni-2019-theme-border--color p-2 mx-auto zoom">
                                        <div className="bg-blue text-white rounded-full font-bold alumni-count-more">
                                            +{count>10?count - 4:count}
                                        </div>
                                    </Link>}

                                </div>
                            </Spin>
                        </div>
                        {count&&<Link className="font-bold mt-8" to="/homecoming2019">View All</Link>}
                        <div className="max-w-sm mx-auto mt-4 mb-8 px-4">
                            <DisqusThread
                                id="main"
                                title="CICT Allumni Homecoming"
                                path="https://cictwvsu.com/alumni/"
                            />
                            <p className="mb-2"><small>Help us build a better college website!</small></p>
                            <Button href="https://github.com/wvsu-cict-code/cict-online" target="_blank" icon="github">Contribute</Button>
                        </div>
                    </div>

                </div>
                <footer className="justify-between flex-wrap cict-darker p-8">
                    <div className="container mx-auto text-center">
                        <Link className="mx-4 p-4" to="/"><img className="h-8" src={brandIconLight} alt="CICT Online Logo" /></Link>
                        <p className="flex mx-4 p-4 text-grey-dark items-center leading-loose">
                            <small className="mx-auto">
                                <span>&lt;/&gt; with &lt;3 by CICTzens | 2016 - Present</span>
                            </small>
                        </p>

                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

const WrappedForm = Form.create()(Alumni);

export default WrappedForm