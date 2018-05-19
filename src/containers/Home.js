
import React from 'react'
import { Menu, Image, Container, Message, Header, Divider, Icon, Card, Grid, Segment } from 'semantic-ui-react'
import { Link, Head } from 'react-static'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import ogImage from '../assets/og-image.jpg'
import brandIcon from '../assets/brandicon.svg'
import background from '../assets/background.jpg'
import admission from '../assets/noun_1698513_cc.svg'
import students from '../assets/noun_776665_cc.svg'
import facultyStaff from '../assets/noun_1336214_cc.svg'
import toolsResources from '../assets/noun_1544052_cc.svg'
import techLogo from '../assets/cict-lines.svg'

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
        <Header as="h1" className="header-light--jumbo" style={{ marginBottom: '1rem' }}>
          <Header.Content>
            <Typist avgTypingDelay={100} cursor={{ show: false, blink: true }}>CICT Online</Typist>
            <Header.Subheader>
              <Typist startDelay={1500} >Welcome to our College Website!</Typist>
            </Header.Subheader>
          </Header.Content>
        </Header>
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
              <Image centered src={techLogo} size="medium" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h1" className="">
                Attaining Excellence<br />in ICT Education
              </Header>
              <p>The West Visayas State University, College of Information and Communications Technology commits to provide quality instruction, undetake relevant and innovative ICT researches, and deliver valuable extension services through continuous process improvement focused on client satisfaction; hence, producing globally competitive lifelong learners.</p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </Container>
  </div>
)
