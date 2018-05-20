
import React from 'react'
import { Menu, Image, Container, Message, Header, Divider, Icon, Card, Grid, Segment, List, Button } from 'semantic-ui-react'
import { Link, Head } from 'react-static'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import ogImage from '../assets/og-image.jpg'
import brandIcon from '../assets/brandicon.svg'
// import background from '../assets/background.jpg'
import admission from '../assets/noun_1698513_cc.svg'
import students from '../assets/noun_776665_cc.svg'
import facultyStaff from '../assets/noun_1336214_cc.svg'
import toolsResources from '../assets/noun_1544052_cc.svg'
import techLogo from '../assets/cict-lines.svg'
import itIcon from '../assets/it-icon.svg'
import isIcon from '../assets/is-icon.svg'
import csIcon from '../assets/cs-icon.svg'
import emcIcon from '../assets/emc-icon.svg'
import blisIcon from '../assets/blis-icon.svg'
import msitIcon from '../assets/msit-icon.svg'

export default () => (
  <div>
    <Head>
      <title>CICT Online</title>
      <meta property="og:url" content="http://cictwvsu.com/admission" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="College Aptitude Exam Results 2018" />
      <meta property="og:description" content="Names in the list will proceed for interview on May 7-8, 2018" />
      <meta property="og:image" content={ogImage} />
    </Head>
    <Menu attached="top" borderless>
      <Menu.Item>
        <Image src={brandIcon} className="brand-icon" />
      </Menu.Item>
      {/* <Menu.Menu position="right">
        <Menu.Item as={Link} >Admission</Menu.Item>
        <Menu.Item as={Link} >Students</Menu.Item>
        <Menu.Item as={Link} >Faculty &amp; Staff</Menu.Item>
      </Menu.Menu> */}
    </Menu>
    <Container className="home-header" fluid>
      <Container className="container-padded">
        <Grid verticalAlign="middle">
          <Grid.Column width={12}>
            <Header as="h1" className="header-light--jumbo" style={{ marginBottom: '1rem' }}>
              <Header.Content>
                <Typist avgTypingDelay={100} cursor={{ show: false, blink: true }}>CICT Online</Typist>
                <Header.Subheader>
                  <Typist startDelay={1500} >Welcome to our College Website!</Typist>
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <p><small><Icon name="info circle" />Still under heavy development.</small></p>
            <Button as="a" href="https://github.com/wvsu-cict-code/cict-online/tree/v2-development" target="_blank" icon="github" content="Contribute" color="black" />
          </Grid.Column>
        </Grid>
      </Container>
    </Container>
    <Container />
    <Container fluid>
      <Segment basic style={{ backgroundColor: '#FFF', border: '1px solid rgba(0,0,0,0.1)', padding: '3rem' }}>
        <Grid columns="equal">
          <Grid.Row stretched>
            <Grid.Column>
              <Image src={admission} size="tiny" centered />
              <Header as={Link} to="/" content="Admission" textAlign="center" />
            </Grid.Column>
            <Grid.Column>
              <Image src={students} size="tiny" centered />
              <Header as={Link} to="/" content="Students" textAlign="center" />
            </Grid.Column>
            <Grid.Column>
              <Image src={facultyStaff} size="tiny" centered />
              <Header as={Link} to="/" content="Faculty and Staff" textAlign="center" />
            </Grid.Column>
            <Grid.Column>
              <Image src={toolsResources} size="tiny" centered />
              <Header as={Link} to="/" content="Tools and Resources" textAlign="center" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
    <Container className="image-background" fluid>
      <div style={{
        position:
          'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <Container style={{ padding: '3rem' }}>
          <Grid stackable>
            <Grid.Column width={6}>
              <Image centered src={techLogo} size="medium" className="cict-tech-line" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h1">
                Attaining Excellence<br />in ICT Education
              </Header>
              <p>The West Visayas State University, College of Information and Communications Technology commits to provide quality instruction, undetake relevant and innovative ICT researches, and deliver valuable extension services through continuous process improvement focused on client satisfaction; hence, producing globally competitive lifelong learners.</p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </Container>
    <Container fluid style={{ padding: '3rem', backgroundColor: '#fff', border: '1px solid rgba(0,0,0,0.1)' }}>
      <Container>
        <Header as="h1" content="Courses Offered" />
        <Grid verticalAlign="middle" padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={itIcon} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as="h2" content="Bachelor of Science in Information Technology" />
              <p>The Bachelor of Science in Information Technology (BSIT) program prepares students to be IT professionals who are able to perform installation, operation, development, maintenance and administration of computer applications.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={isIcon} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as="h2" content="Bachelor of Science in Information Systems" />
              <p>Bachelor of Science in Information Systems (BSIS), formerly known as BS in Information Management, is a four year degree program that deals with the design and implementation of solutions that integrate information technology with business processes.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={csIcon} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as="h2" content="Bachelor of Science in Computer Science" />
              <p>The BS in Computer Science course prepares you for proficiency in designing, writing and developing computer programs and computer networks.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={emcIcon} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as="h2" content="Entertainment and Multimedia Computing" />
              <p>Entertainment and Multimedia Computing is the study and use of concepts, principles, and techniques of computing in the design and development of multimedia products and solutions. It includes various applications such as in science, entertainment, education, simulations and advertising.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={blisIcon} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as="h2" content="Bachelor in Library and Information Science" />
              <p>Bachelor of Library and Information Science (BLIS) is a four year degree program designed to provide knowledge and skills in the management of library operations, the systematic organization, conservation, preservation and restoration of books, historical and cultural documents and other intellectual properties.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={msitIcon} />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as="h2" content="Masters in Information Technology" />
              <p>The Master of Information Technology degree is designed for IT professionals looking to update and extend their technical knowledge of advanced computing subjects, or move into a new IT specialisation. Internationally recognised, it can help advance your career in diverse fields such as software engineering, health, telecommunications and more.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Container>
  </div>
)
