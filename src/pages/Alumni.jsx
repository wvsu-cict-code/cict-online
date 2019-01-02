import { Badge, Form, Icon, notification, Popover, Spin } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { Calendar, Clock, MapPin } from 'react-feather';
import Gravatar from 'react-gravatar';
import { Fade, Slide } from 'react-reveal';
import { Link } from 'react-static';
import InlineSVG from 'svg-inline-react';
import uuidv4 from 'uuid/v4';

import {
    CommentsAndContributions,
    PaymentDetails,
    RegistrationForm,
    SocialSharing,
    VerificationDetails,
} from '../components/AlumniHomeComing';
import { bgLeft, bgRight, brandIconLight, brandLogo, divider, ogImage } from '../components/AlumniHomeComing/assets';
import Helmet from '../components/Helmet';
import Navbar from '../components/Navbar';

const jdenticon = require('jdenticon')

const theme = {
    text: 'font-light alumni-2019-theme-text--color mt-2',
    link: 'alumni-2019-theme-text--color mt-2 no-underline hover:text-orange',
}

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
        this.setState({ activeSubroute: route });
        if (window) {
            window.scrollTo(0, 0);
        }
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
        }).catch(error => {
            notification.open({
                message: 'Ooops!',
                description: 'Sorry and error occured. Please report a bug or contact us on our Facebook page.',
            });
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
                    skipRegistration={() => this.switchSubroute('pay')}
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
                subroute = <VerificationDetails backToPayment={() => this.switchSubroute('pay')} backToRegistration={() => this.switchSubroute('register')} />
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
                                    <p className={theme.text}><Calendar className={[theme.text, 'w-4 h-4']} /> January 20, 2019</p>
                                    <p className={theme.text}><Clock className={[theme.text, 'w-4 h-4']} /> 8:30 AM - 6:00 PM</p>
                                </div>
                            </Fade>
                            <Fade>
                                {subroute}
                                <SocialSharing />
                            </Fade>
                        </div>
                        <div className="max-w-md mx-auto pb-8">
                            <img src={divider} className="w-48 h-auto mx-auto mt-4 mb-8" alt="" />
                            <h3 className={theme.text}>{this.countAttendees(count || 0)}</h3>
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
                                                    {i[11] && JSON.parse(i[11]) && <small className="opacity-75"><Icon type="check-circle" theme="filled" style={{ color: 'green' }} /> Payment Verified</small>}
                                                </React.Fragment>
                                            } title={<p className="text-center pt-2">{
                                                i[10] && JSON.parse(i[10]) ?
                                                    <InlineSVG src={jdenticon.toSvg(i[8], 90)} className="w-24 h-auto rounded-full" />
                                                    :
                                                    <Gravatar default="monsterid" size={100} className="w-24 h-auto rounded-full" email={i[9]} />
                                            }<br />{i[3]}, {i[2]} {i[1]}</p>}>
                                                <div className="w-16 h-16 border-2 mb-4 rounded-full alumni-2019-theme-border--color p-2 mx-auto">
                                                    {
                                                        i[10] && JSON.parse(i[10]) ?
                                                            <Badge status={JSON.parse(i[11]) ? "success" : "default"} offset={[-4, 35]}>
                                                                <InlineSVG src={jdenticon.toSvg(i[8], 44)} className="w-16 h-auto rounded-full" />
                                                            </Badge>
                                                            :
                                                            <Badge status={i[11] && JSON.parse(i[11]) ? "success" : "default"} offset={[-4, 35]}>
                                                                <Gravatar default="monsterid" size={100} className="w-16 h-auto rounded-full" email={i[9]} />
                                                            </Badge>
                                                    }
                                                </div>
                                            </Popover>
                                        </div>
                                    )
                                    )}

                                    {!loadingAttendees && count > 5 && <Link to="/homecoming2019" className="w-16 h-16 border-2 mb-4 rounded-full alumni-2019-theme-border--color p-2 mx-auto zoom">
                                        <div className="bg-blue text-white rounded-full font-bold alumni-count-more">
                                            +{count > 5 ? count - 4 : count}
                                        </div>
                                    </Link>}

                                </div>
                            </Spin>
                        </div>
                        {count && <Link className="font-bold mt-8" to="/homecoming2019">View All</Link>}
                        <CommentsAndContributions />
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
