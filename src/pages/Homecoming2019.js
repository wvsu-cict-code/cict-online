import { Button, Form, Popover, Spin } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import { Slide } from 'react-reveal';
import { Link } from 'react-static';
import InlineSVG from 'svg-inline-react';
import uuidv4 from 'uuid/v4';
import divider from '../assets/misc/divider.svg';
import title from '../assets/misc/title.svg';
import brandIconLight from '../assets/brandicon-light.svg';
import bgLeft from '../assets/misc/alumni-2019-bg-left.jpg';
import bgRight from '../assets/misc/alumni-2019-bg-right.jpg';
import brandLogo from '../assets/misc/alumni-2019-brand.svg';
import ogImage from '../assets/misc/alumni-2019.jpg';
import DisqusThread from '../components/DisqusThread';
import Helmet from '../components/Helmet';
import Navbar from '../components/Navbar';

const jdenticon = require('jdenticon')

const theme = {
    text: 'font-light alumni-2019-theme-text--color mt-2',
    link: 'alumni-2019-theme-text--color mt-2 no-underline hover:text-orange',
}

class Homecoming2019 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attendees: [],
            submitting: false,
            count: 0,
            loadingAttendees: true,
        }
    }

    getLatestData = (start, end) => {
        const app = this
        const attendeesQuery = `https://us-central1-cict-online.cloudfunctions.net/getRegisteredEntries?start=${start || 2}&end=${end || 1000}`;
        axios.get(attendeesQuery).then(res => {
            if (Object.keys(res.data) !== 0) {
                app.setState({ attendees: res.data.reverse(), loadingAttendees:false })
            }
        })
    }

    componentDidMount() {
        const app = this
        app.getLatestData()
    }

    render() {
        const { attendees,loadingAttendees } = this.state
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

                        <div className="bg-white mx-auto max-w-sm rounded pb-8">

                            <Slide top>
                                <img src={brandLogo} className="alumni-2019-brand mx-auto mt-8" alt="" />
                            </Slide>

                        </div>
                        <div className="max-w-md mx-auto pb-8">
                        
                        <img src={title} className="w-64 h-auto mx-auto mt-4" alt="" />
                                <div className="flex flex-wrap mt-8 mx-4 mb-8">
                                    {loadingAttendees && <Spin className="mx-auto" />}
                                    {attendees && attendees.map(i => (
                                        <div key={uuidv4()} className="sm:w-full md:w-full lg:w-1/6 xl:1/6 mb-4 zoom justify-center text-center">

                                            <Popover content={
                                                <p>
                                                    Batch {i[5]}, {_.upperCase(i[6])}
                                                </p>
                                            } title={`${i[3]}, ${i[2]} ${i[1]}`}>
                                                <div className="w-16 h-16 border-2 mb-4 rounded-full alumni-2019-theme-border--color p-2">
                                                    {
                                                        JSON.parse(i[10]) ?
                                                            <InlineSVG src={jdenticon.toSvg(i[9], 44)} className="w-16 h-auto rounded-full" /> :
                                                            <Gravatar default="monsterid" size={100} className="w-16 h-auto rounded-full" email={i[9]} />
                                                    }
                                                </div>
                                            </Popover>

                                        </div>
                                    )
                                    )}

                                </div>
                                <Link className="font-bold mt-8" to="/alumni">Back to Registration</Link>
                        </div>
                        <img src={divider} className="w-32 h-auto mx-auto mt-4 mb-8" alt="" />                       
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

const WrappedForm = Form.create()(Homecoming2019);

export default WrappedForm