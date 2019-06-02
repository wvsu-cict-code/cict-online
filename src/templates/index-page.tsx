import { Button, Typography, Divider, Row, Col, List, Avatar, Alert, Icon } from 'antd';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Typist from 'react-typist';
import Layout from '../components/Layout';
import collegeLogo from '../img/cict-dark.svg';
import cictLines from '../img/cict-lines.svg';
import cs from '../img/programs/cs-icon.svg';
import emc from '../img/programs/emc-icon.svg';
import is from '../img/programs/is-icon.svg';
import it from '../img/programs/it-icon.svg';
import blis from '../img/programs/blis-icon.svg';
import msit from '../img/programs/msit-icon.svg';
import callbox from '../img/partners/callbox.png'
import deltek from '../img/partners/deltek.png'
import dlsu from '../img/partners/dlsu.png'
import unity from '../img/partners/unity.png'
import dost from '../img/partners/dost.png'
import geoplan from '../img/partners/geoplan.png'
import hytec from '../img/partners/hytec.png'
import kch from '../img/partners/kch.png'
import kmc from '../img/partners/kmc.png'
import kunsan from '../img/partners/kunsan.png'
import ngkhai from '../img/partners/ngkhai.png'
import pldt from '../img/partners/pldt.png'
import epic from '../img/partners/epic.png'
import tio from '../img/partners/tio.jpg'

const programs = [
  {
    title: 'Bachelor of Science in Information Technology',
    icon: it,
    description: 'The Bachelor of Science in Information Technology (BSIT) program aims to produce quality graduates who study, analyze, design, develop, implement, and evaluate ICT solutions. The program focuses on the use of ICT for a variety of applications such as in business, governance, education, personal and entertainment. Professional subjects include logic design, microcomputer technology, computer systems organization, networking technologies, and systems resource management.'
  },
  {
    title: 'Bachelor of Science in Information Systems',
    icon: is,
    description: 'Bachelor of Science in Information Systems (BSIS) program, formerly known as BS in Information Management, aims to equip students with the knowledge, skills, and attitude in the design and implementation of solutions that integrate information technology with business processes. This program prepares students to be IT professionals that could harness ICT as a strategic resource to meet business and organizational objectives.'
  },
  {
    title: 'Bachelor of Science in Computer Science',
    icon: cs,
    description: 'The BS in Computer Science course prepares you for proficiency in designing, writing and developing computer programs and computer networks.'
  },
  {
    title: 'The BS in Entertainment and Multimedia Computing',
    icon: emc,
    description: 'Entertainment and Multimedia Computing is the study and use of concepts, principles, and techniques of computing in the design and development of multimedia products and solutions. It includes various applications such as in science, entertainment, education, simulations and advertising.'
  },
  {
    title: 'Bachelor in Library and Information Science',
    icon: blis,
    description: 'Bachelor of Library and Information Science (BLIS) is a four year degree program designed to provide knowledge and skills in the management of library operations, the systematic organization, conservation, preservation and restoration of books, historical and cultural documents and other intellectual properties.'
  },
  {
    title: 'Masters in Information Technology',
    icon: msit,
    description: 'The Master of Information Technology degree is designed for IT professionals looking to update and extend their technical knowledge of advanced computing subjects, or move into a new IT specialisation. Internationally recognised, it can help advance your career in diverse fields such as software engineering, health, telecommunications and more.'
  },
];

const linkages = [
  {
    title: 'Kunsan National University',
    logo: kunsan,
    link: 'http://en.kunsan.ac.kr/index.kunsan',
    description: 'Academic Partner for Post Graduate Education',
  },
  {
    title: 'Epic Games',
    logo: epic,
    link: 'https://www.unrealengine.com/en-US/academic-partners',
    description: 'Academic Partner for Game Development',
  },
  {
    title: 'Unity 3D',
    logo: unity,
    link: 'https://unity.com/',
    description: 'Academic Software License Sponsor',
  },
  {
    title: 'De La Salle University',
    logo: dlsu,
    link: 'http://www.dlsu.edu.ph',
    description: 'Academic Partner for Extension Projects',
  },
  {
    title: 'Callbox',
    logo: callbox,
    link: 'https://www.callboxinc.com',
    description: 'OJT Partner',
  },
  {
    title: 'Deltek',
    logo: deltek,
    link: 'https://www.deltek.com/en-gb',
    description: 'OJT Partner',
  },
  {
    title: 'DOST',
    logo: dost,
    link: 'http://www.dost.gov.ph/',
    description: 'OJT Partner',
  },
  {
    title: 'Geoplan',
    logo: geoplan,
    link: 'https://www.geoplan.com',
    description: 'OJT Partner',
  },
  {
    title: 'Hytec Power Inc.',
    logo: hytec,
    link: 'http://www.hytecpower.net/',
    description: 'OJT Partner',
  },
  {
    title: 'Knowledge Channel Inc.',
    logo: kch,
    link: 'http://www.knowledgechannel.org/',
    description: 'OJT Partner',
  },
  {
    title: 'KMC Solutions',
    logo: kmc,
    link: 'https://kmc.solutions/',
    description: 'OJT Partner',
  },
  {
    title: 'NG KHAI Development',
    logo: ngkhai,
    link: 'https://www.facebook.com/NGenius/?ref=br_rs',
    description: 'OJT Partner',
  },
  {
    title: 'PLDT',
    logo: pldt,
    link: 'https://m.pldthome.com/',
    description: 'OJT Partner',
  },
  {
    title: 'Tio Chu Teg Ana Ros Foundation Integrated School',
    logo: tio,
    link: 'https://www.facebook.com/pages/Tiu-Cho-Teg-Ana-Ros-Foundation-Integrated-School/390453294299833',
    description: 'Extension Projects Receipient',
  },
]

const { Title } = Typography;

interface Props {
  title: String,
  heading: String,
  subheading: String,
  mainpitch: object,
  description: String,
  intro: any,
  goal: String
}

const cursorOptions = {
  show: true,
  blink: true,
  description: '',
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 1000,
}

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  goal,
}: Props) => (
    <div style={{ margin: '0 1rem' }}>
      <div style={{ padding: '2rem 1rem' }}>
        {/* <img style={{ width: 'auto', height: '150px', margin: '1rem auto' }} src={collegeLogo} />         */}
        <Alert
        style={{marginBottom: '1rem'}}
        description={<span>This website is still under heavy development. Please help us improve by contributing to the <a href="https://github.com/wvsu-cict-code/cict-online" target="_blank"><Icon type="github" /> source code</a> or by reporting issues.</span>}
      message="Hello Stranger! It's been a while."
      type="info"
      closable
    />
        <Title level={2}><Typist cursor={cursorOptions}>{`> ${heading}`}</Typist></Title>
        <p>{subheading}</p>
        <p>{goal}</p>
        <Button size="large" type="primary" href="https://medium.com/cictwvsu-online/our-story-87a461c14ab" target="_blank">Learn More</Button>
        <Divider />
        <Title level={3}>
          <Typist startDelay={2000} cursor={cursorOptions}>
            Courses Offered
          </Typist>
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={programs}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<img style={{ height: '130px', width: 'auto' }} src={item.icon} />}
                title={<span>{item.title}</span>}
                description={item.description}
              />
            </List.Item>
          )}
        />
          <Divider />
        <Title level={3} style={{marginBottom: '2rem'}}>
          <Typist startDelay={3000} cursor={cursorOptions}>
            Academic Partners and Sponsors
          </Typist>
        </Title>
        <List
    grid={{ gutter: 20, column: 4 }}
    dataSource={linkages}
    renderItem={item => (
      <List.Item>
         <List.Item.Meta
                avatar={<img style={{ height: '100px', width: 'auto' }} src={item.logo} />}
                title={<a href={item.link}>{item.title}</a>}
                description={item.description}
              />
      </List.Item>
    )}
  />
      </div>
    </div>
  )

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        goal={frontmatter.goal}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        goal
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
