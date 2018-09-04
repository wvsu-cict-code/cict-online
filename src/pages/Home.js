import React, { Component } from 'react'
import { Github, Info } from 'react-feather'
import { hot } from 'react-hot-loader'
import { Fade } from 'react-reveal'
import { Link } from 'react-static'
import Typist from 'react-typist'

import techLogo from '../assets/cict-lines.svg'
import cictLogoLight from '../assets/cict-logo-light.svg'
import facultyStaff from '../assets/noun_1336214_cc.svg'
import appsResources from '../assets/noun_1544052_cc.svg'
import admission from '../assets/noun_1698513_cc.svg'
import students from '../assets/noun_776665_cc.svg'
import studentsPhoto from '../assets/students.jpg'
import DarkContainer from '../components/DarkContainer'
import DefaultContainer from '../components/DefaultContainer'
import Helmet from '../components/Helmet'
import Navbar from '../components/Navbar'
import WhiteContainer from '../components/WhiteContainer'
import courses from '../config/courses'
import linkages from '../config/linkages'
import CornerModal from '../components/CornerModal';
import Footer from '../components/Footer';

class Home extends Component {
  render () {
    const menu = [
      {
        name: 'Admission',
        icon: admission,
        path: '/',
      },
      {
        name: 'Students',
        icon: students,
        path: '/',
      },
      {
        name: 'Faculty and Staff',
        icon: facultyStaff,
        path: '/',
      },
      {
        name: 'Apps and Resources',
        icon: appsResources,
        path: '/',
      },
    ]
    return (
      <div>
        <Helmet
          title="CICT Online"
          description="West Visayas State University, College of Information and Communications Technology Website"
        />
        <Navbar />
        <DefaultContainer>
          <div className="flex mb-4">
            <div className="w-1/2 h-12">
              <h1>
                <Typist className="font-normal text-4xl" avgTypingDelay={100} cursor={{ show: false, blink: true }}>CICT Online</Typist>
              </h1>
              <Typist startDelay={1500} >Welcome to our College Website!</Typist>
            </div>
            <div className="w-1/2 h-12">
              <div className="float-right">
                <p className="text-xs mb-3"><Info className="w-3 h-3 mr-2" />Still under heavy development.</p>
                <button className="text-sm cict-darker hover:bg-black hover:text-orange text-white py-3 px-6 rounded inline-flex items-center">
                  <Github className="w-4 h-4 mr-2" /> <span>Contribute</span>
                </button>
              </div>
            </div>
          </div>
        </DefaultContainer>
        <WhiteContainer>
          <div className="flex mb-2">
            {menu.map(i => (
              <div className="w-1/4 py-6" key={i}>
                <img className="flex m-auto" src={i.icon} alt={i.name} />
                <p className="mt-4 text-center">
                  <Link to={i.path} className="text-black no-underline font-normal hover:text-orange">{i.name}</Link>
                </p>
              </div>
            ))}
          </div>
        </WhiteContainer>
        <DefaultContainer>
          <div className="mx-8">
            <div className="flex inline-flex items-center">
              <div className="w-1/4 m-8">
                <img src={techLogo} className="flex m-auto w-64 h-64" alt="cict-lines" />
              </div>
              <div className="w-3/4 m-8">
                <h1 className="font-light text-3xl mb-4">Attaining Excellence in ICT Education</h1>
                <p className="text-grey-dark font-normal leading-normal">The West Visayas State University, College of Information and Communications Technology commits to provide quality instruction, undetake relevant and innovative ICT researches, and deliver valuable extension services through continuous process improvement focused on client satisfaction; hence, producing globally competitive lifelong learners.</p>
              </div>
            </div>
          </div>
        </DefaultContainer>
        <Fade>
          <div className="cict-featured px-8" style={{ backgroundImage: `url(${studentsPhoto})` }}>
            <div className="mx-8">
              <div className="flex inline-flex items-center">
                <div className="w-1/2 m-8">
                  <img src={cictLogoLight} className="flex m-auto w-64 h-64 mt-8" alt="CICT Logo" />
                  <p className="text-white text-2xl leading-normal font-normal m-4 mt-8">"The primary role of ICT education is to develop professionals who shall be able to meet the growing manpower demand by expanding the ICT industries in the country."</p>
                </div>
                <div className="w-1/2 m-8" />
              </div>
            </div>
          </div>
        </Fade>
        <DefaultContainer>
          <h1 className="font-light mb-8 mt-8">Courses Offered</h1>
          <div className="mx-8">
            {courses.map(i => (
              <Fade>
                <div className="flex inline-flex items-center mb-8">
                  <div className="w-1/4">
                    <img src={i.icon} className="flex m-auto w-48 h-48" alt="cict-lines" />
                  </div>
                  <div className="w-3/4">
                    <h2 className="font-light mb-4">{i.name}</h2>
                    <p className="text-grey-dark font-normal leading-normal">{i.description}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </DefaultContainer>
        <DarkContainer>
          <div className="mt-4 mb-4">
            <h1 className="text-white font-light mb-4">About CICT</h1>
            <p className="text-white font-normal leading-normal mb-4">Information and Communications Technology has penetrated the core of societal and individual lives. Its development is changing the course of all other technologies. ICT has now become less of a choice and more of a requirement for individuals and societies concerned with competitiveness in the international arena.</p>
            <button className="text-sm border-white border hover:text-orange hover:bg-white text-white py-3 px-6 rounded inline-flex items-center">
              <span>READ MORE</span>
            </button>
          </div>
        </DarkContainer>
        <WhiteContainer>
          <div className="mt-4 mb-4">
            <h1 className="font-light mb-4">Academic Partners</h1>
            <p className="font-normal text-grey-dark leading-normal mb-4">The college also established linkages along the way. They include local and international partners as well as government units.</p>
          </div>
          <div className="flex flex-wrap">
            {linkages.map(i => (
              <div key={i} className="sm:w-full md:w-full lg:w-1/5 xl:1/6 mb-4 zoom justify-center text-center">
                <a href={i.link}><img className="w-32 h-auto" src={i.logo} alt={i.name} /></a>
              </div>
            ))}
          </div>
        </WhiteContainer>
        <CornerModal />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(Home)

