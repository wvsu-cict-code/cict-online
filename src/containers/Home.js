import 'react-typist/dist/Typist.css'

import React from 'react'
import { Head, Link } from 'react-static'
import Typist from 'react-typist'
import { Button, Container, Grid, Header, Icon, Image, Menu, Segment } from 'semantic-ui-react'
import { Fade } from 'react-reveal'
import courses from '../config/courses'
import linkages from '../config/linkages'
import brandIcon from '../assets/brandicon.svg'
import brandIconLight from '../assets/brandicon-light.svg'
import techLogo from '../assets/cict-lines.svg'
import facultyStaff from '../assets/noun_1336214_cc.svg'
import toolsResources from '../assets/noun_1544052_cc.svg'
import admission from '../assets/noun_1698513_cc.svg'
import students from '../assets/noun_776665_cc.svg'
import ogImage from '../assets/og-image.jpg'
import icon57 from '../assets/apple-icon-57x57.png'
import icon60 from '../assets/apple-icon-60x60.png'
import icon72 from '../assets/apple-icon-72x72.png'
import icon76 from '../assets/apple-icon-76x76.png'
import icon114 from '../assets/apple-icon-114x114.png'
import icon120 from '../assets/apple-icon-120x120.png'
import icon144 from '../assets/apple-icon-144x144.png'
import icon152 from '../assets/apple-icon-152x152.png'
import icon180 from '../assets/apple-icon-180x180.png'
import icon192 from '../assets/android-icon-192x192.png'
import icon32 from '../assets/favicon-32x32.png'
import icon96 from '../assets/favicon-96x96.png'
import icon16 from '../assets/favicon-16x16.png'
import icon144ms from '../assets/ms-icon-144x144.png'
import favicon from '../assets/favicon.ico'

export default () => (
  <div>
    <Head>
      <title>CICT Online</title>
      <meta property="og:url" content="http://cictwvsu.com" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="CICT Online" />
      <meta property="og:description" content="West Visayas State University, College of Information and Communications Technology Website" />
      <meta property="og:image" content={ogImage} />
      <link rel="apple-touch-icon" sizes="57x57" href={icon57} />
      <link rel="apple-touch-icon" sizes="60x60" href={icon60} />
      <link rel="apple-touch-icon" sizes="72x72" href={icon72} />
      <link rel="apple-touch-icon" sizes="76x76" href={icon76} />
      <link rel="apple-touch-icon" sizes="114x114" href={icon114} />
      <link rel="apple-touch-icon" sizes="120x120" href={icon120} />
      <link rel="apple-touch-icon" sizes="144x144" href={icon144} />
      <link rel="apple-touch-icon" sizes="152x152" href={icon152} />
      <link rel="apple-touch-icon" sizes="180x180" href={icon180} />
      <link rel="icon" type="image/png" sizes="192x192" href={icon192} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
      <link rel="icon" type="image/png" sizes="96x96" href={icon96} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="icon" href={favicon} type="image/x-icon" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={icon144ms} />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Menu attached="top" borderless>
      <Menu.Item as={Link} to="/" className="brand-icon-container">
        <Image src={brandIcon} className="brand-icon" />
      </Menu.Item>
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
    <Container fluid className="default">
      <Segment basic>
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
              <Header as={Link} to="/" content="Apps and Resources" textAlign="center" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
    <Container className="image-background" fluid>
      <div>
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
    <Container fluid className="default">
      <Container>
        <Header as="h1" content="Courses Offered" />
        <Grid verticalAlign="middle" padded>
          {courses.map(i => (
            <Grid.Row>
              <Grid.Column width={3}>
                <Fade>
                  <Image src={i.icon} />
                </Fade>
              </Grid.Column>
              <Grid.Column width={13}>
                <Fade>
                  <Header as="h2" content={i.name} />
                  <p>{i.description}</p>
                </Fade>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Container>
    </Container>
    <Container fluid style={{ backgroundColor: '#2f2d2e' }}>
      <Container style={{ padding: '3rem' }}>
        <Header inverted as="h1" content="About CICT" />
        <p style={{ color: '#fff' }}>
          Information and Communications Technology has penetrated the core of societal and individual lives. Its development is changing the course of all other technologies. ICT has now become less of a choice and more of a requirement for individuals and societies concerned with competitiveness in the international arena.
        </p>
        <Button as="a" href="https://medium.com/cictwvsu-online/our-story-87a461c14ab" target="_blank" inverted content="LEARN MORE" />
      </Container>
    </Container>
    <Container fluid className="default">
      <Container>
        <Header as="h1" content="Academic Partners" />
        <p>The college also established linkages along the way. They include local and international partners as well as government units.</p>
        <Grid columns={5} stackable className="center" centered verticalAlign="middle">
          <Grid.Row>
            {linkages.map(i => (
              <Grid.Column>
                <Image as="a" href={i.link} size="small" src={i.logo} alt={i.name} />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </Container>
    <Container style={{ backgroundColor: '#2f2d2e' }} as="footer" fluid >
      <Container style={{ color: '#FFF', padding: '1rem' }}>
        <Menu secondary inverted>
          <Menu.Item as={Link} to="/" className="brand-icon-container">
            <Image src={brandIconLight} size="tiny" />
          </Menu.Item>
          <Menu.Item>Privacy Policy</Menu.Item>
          <Menu.Item>Contact Us</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item><Icon name="facebook" /> <Icon name="twitter" /> <Icon name="github" /> <Icon name="medium" /></Menu.Item>
            <Menu.Item>
              <Icon name="code" /> with <Icon name="heart" /> by CICTzens
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </Container>
  </div>
)
