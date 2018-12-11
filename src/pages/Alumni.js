import { Button, Form, Icon, Input, Select, Checkbox } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import React, { Component } from 'react';
import { Clock, Facebook, Mail, MapPin, Twitter } from 'react-feather';
import { Fade, Slide } from 'react-reveal';
import Gravatar from 'react-gravatar';
import uuidv4 from 'uuid/v4';
import brandLogo from '../assets/misc/alumni-2019-brand.svg';
import bgMain from '../assets/misc/alumni-2019-bg.jpg';
import bgLeft from '../assets/misc/alumni-2019-bg-left.jpg';
import bgRight from '../assets/misc/alumni-2019-bg-right.jpg';
import Helmet from '../components/Helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import fernsBottom from '../assets/misc/ferns-bottom.png'

const theme = {
    text: 'font-light alumni-2019-theme-text--color mt-2',
    link: 'alumni-2019-theme-text--color mt-2 no-underline hover:text-orange',
}

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
class Alumni extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attendees: [],
            email: 'cict@wvsu.edu.ph',
            fname: '',
            mname: '',
            sname: '',
            ystart: '',
            yend: '',
            course: '',
            company: '',
            contact: '',
            noGravatar: false,       
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
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

    componentDidMount() {
        const app = this
        axios.get('https://randomuser.me/api/?results=20').then(res => {
            app.setState({ attendees: res.data.results })
        })
    }

    onCheckboxChange = e => {
        const {name, checked} = e.target
        this.setState({[name]:checked})
    }

    render() {
        const { attendees, email, contact, company, noGravatar } = this.state
        
        return (
            <React.Fragment>
                <Helmet
                    title="CICT Online - Alumni Homecoming 2019"
                    description="West Visayas State University, College of Information and Communications Technology Website"
                    ogImage={null}
                />
                <Navbar />
                <div className="w-full text-center bg-no-repeat bg-left-bottom" style={{backgroundImage: `url(${bgLeft})`}}>
                    <div className="w-full text-center bg-no-repeat bg-right-bottom" style={{backgroundImage: `url(${bgRight})`}}>
                     
                    <div className="bg-white mx-auto max-w-sm rounded pb-8">

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
                        <Slide bottom>
                            <Form onSubmit={this.handleSubmit} className="alumni-registration-form px-4 lg:px-auto mx-auto py-8 text-left sm:px-4 xs:px-4">
                                <small>* Required Items</small>
                                <FormItem className="mt-4">
                                <Input size="large" name="fname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* First Name" onChange={e => this.handleChange(e, 'fname')} />
                                </FormItem>
                                <FormItem>
                                <Input size="large" name="mname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Middle Name" onChange={e => this.handleChange(e, 'mname')} />
                                </FormItem>
                                <FormItem>
                                <Input size="large" name="sname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Last Name" onChange={e => this.handleChange(e, 'sname')} />
                                </FormItem>

                                <FormItem>
                                    <Select size="large" placeholder="* Year Entered" onChange={e => this.handleSelectionChange(e, 'ystart')}>
                                        {yearStartRange.map(i => (
                                            <Option key={i} value={i}>{i}</Option>
                                        ))}
                                    </Select>
                                </FormItem>
                                <FormItem>
                                    <Select size="large" placeholder="* Year Graduated" onChange={e => this.handleSelectionChange(e, 'yend')}>
                                        {yearEndRange.map(i => (
                                            <Option key={i} value={i}>{i}</Option>
                                        ))}
                                    </Select>
                                </FormItem>
                                <FormItem>
                                    <Select size="large" placeholder="Course" onChange={e => this.handleSelectionChange(e, 'course')}>
                                        {courses.map(i => (
                                            <Option key={i.value} value={i.value}>{i.name}</Option>
                                        ))}
                                    </Select>
                                </FormItem>
                                <FormItem>
                                    <Input name="company" size="large" placeholder="Company Affiliated" onChange={e => this.handleChange(e, 'company')} />
                                </FormItem>
                                <FormItem>
                                    <Input name="contact" size="large" placeholder="* Contact Number" onChange={e => this.handleChange(e, 'contact')} />
                                </FormItem>
                                <p className="text-center mb-4"><Gravatar default="monsterid" size={150} className="rounded-full mx-0 my-4" email={email} /></p>
                                <FormItem>
                                    <Input disabled={noGravatar} size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Gravatar Email" onChange={e => this.handleChange(e, 'email')} />
                                    <p><a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">Create your own Gravatar</a></p>
                                    <Checkbox name="noGravatar" checked={noGravatar} onChange={this.onCheckboxChange}>I don't have a Gravatar email.</Checkbox>
                                </FormItem>
                                <p className="text-center">
                                <Button type="primary" htmlType="submit" className="w-full">
                                    Join Us
                                </Button>
                                </p>
                            </Form>


                        </Slide>
                        <p>
                            <Facebook className={[theme.link, 'w-8 h-8 mx-2']} />
                            <Twitter className={[theme.link, 'w-8 h-8 mx-2']} />
                            <Mail className={[theme.link, 'w-8 h-8 mx-2']} />
                        </p>
                    </div>
                    <div className="max-w-md mx-auto pb-8">
                        <hr className="h-px w-full alumni-2019-theme-bg--color mb-8" />
                        <h3 className={theme.text}><span className="font-bold">20</span> CICTzens are Attending</h3>
                        <div className="flex flex-wrap mt-8 mx-4">

                            {attendees.map(i => (
                                <div key={uuidv4()} className="sm:w-full md:w-full lg:w-1/6 xl:1/6 mb-4 zoom justify-center text-center">
                                    <div className="w-16 h-16 border-2 mb-4 rounded-full alumni-2019-theme-border--color">
                                        <img className="rounded-full p-1" src={i.picture.medium} alt={i.name.last} />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Alumni