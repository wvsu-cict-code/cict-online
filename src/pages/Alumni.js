import axios from 'axios';
import React, { Component } from 'react';
import { Clock, Facebook, Mail, MapPin, Twitter } from 'react-feather';
import { Fade, Slide } from 'react-reveal';

import bgImage from '../assets/misc/alumni-2019.jpg';
import ogImage from '../assets/og-image.jpg';
import Helmet from '../components/Helmet';

const theme = {
    text: 'font-light alumni-2019-theme-text--color mt-2',
    link: 'alumni-2019-theme-text--color mt-2 no-underline hover:text-orange',
}

class Alumni extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attendees: []
        }
    }

    componentDidMount() {
        const app = this
        axios.get('https://randomuser.me/api/?results=20').then(res => {
            app.setState({ attendees: res.data.results })
        })
    }
    render() {
        const { attendees } = this.state
        return (
            <React.Fragment>
                <Helmet
                    title="CICT Online - Alumni Homecoming 2019"
                    description="West Visayas State University, College of Information and Communications Technology Website"
                    ogImage={bgImage}
                />
                <div className="bg-white w-full h-full h-screen text-center py-8 rounded">
                    <div className="bg-white mx-auto max-w-sm rounded pb-8">
                        <Slide top>
                            <img src={bgImage} className="alumni-2019-brand mx-auto mt-8" alt="" />
                        </Slide>
                        <Fade>
                            <div className="container mx-auto px-8">
                                <h1 className={theme.text}><a className={theme.link} href="https://twitter.com/search?q=cicttweet16&src=typd&lang=en" target="_black" rel="noopener noreferrer">#tweet16</a></h1>
                                <p className={theme.text}><MapPin className={[theme.text, 'w-4 h-4']} /> West Visayas State University, CICT Grounds, Iloilo City</p>
                                <p className={theme.text}><Clock className={[theme.text, 'w-4 h-4']} /> 8:30 AM - 6:00 PM</p>
                            </div>
                        </Fade>
                        <Slide bottom>
                            <button className="rounded alumni-2019-theme-button px-8 py-2 m-4 font-bold">Join Us</button>
                        </Slide>
                        <p>
                            <Facebook className={[theme.link, 'w-8 h-8 mx-2']} />
                            <Twitter className={[theme.link, 'w-8 h-8 mx-2']} />
                            <Mail className={[theme.link, 'w-8 h-8 mx-2']} />
                        </p>
                    </div>
                    <div className="max-w-md mx-auto">
                        <hr className="h-px w-full alumni-2019-theme-bg--color mb-8" />
                        <h3 className={theme.text}><span className="font-bold">20</span> CICTzens are Attending</h3>
                        <div className="flex flex-wrap mt-8 mx-4">
                        
                            {attendees.map(i => (
                                <div key={i} className="sm:w-full md:w-full lg:w-1/6 xl:1/6 mb-4 zoom justify-center text-center">
                                    <div className="w-16 h-16 border-2 mb-4 rounded-full alumni-2019-theme-border--color">
                                        <img className="rounded-full p-1" src={i.picture.medium} alt={i.name.last} />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Alumni