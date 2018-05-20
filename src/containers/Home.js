import 'react-typist/dist/Typist.css'

import React from 'react'
import { Head, Link } from 'react-static'
import Typist from 'react-typist'
import { Button, Container, Grid, Header, Icon, Image, Menu, Segment } from 'semantic-ui-react'
import courses from '../config/courses'
import brandIcon from '../assets/brandicon.svg'
import techLogo from '../assets/cict-lines.svg'
import facultyStaff from '../assets/noun_1336214_cc.svg'
import toolsResources from '../assets/noun_1544052_cc.svg'
import admission from '../assets/noun_1698513_cc.svg'
import students from '../assets/noun_776665_cc.svg'
import ogImage from '../assets/og-image.jpg'

export default () => (
  <div>
    <Head>
      <title>CICT Online</title>
      <meta property="og:url" content="http://cictwvsu.com" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="CICT Online" />
      <meta property="og:description" content="West Visayas State University, College of Information and Communications Technology Website" />
      <meta property="og:image" content={ogImage} />
    </Head>
    <Menu attached="top" borderless>
      <Menu.Item>
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
              <Header as={Link} to="/" content="Tools and Resources" textAlign="center" />
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
                <Image src={i.icon} />
              </Grid.Column>
              <Grid.Column width={13}>
                <Header as="h2" content={i.name} />
                <p>{i.description}</p>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Container>
    </Container>
    <Container fluid style={{ backgroundColor: '#24292E'}}>
      <Container style={{ padding: '3rem' }}>
        <Header inverted as="h1" content="About CICT" />
        <p style={{ color: '#fff' }}>
          Information and Communications Technology has penetrated the core of societal and individual lives. Its development is changing the course of all other technologies. ICT has now become less of a choice and more of a requirement for individuals and societies concerned with competitiveness in the international arena.
        </p>
        <Button inverted content="LEARN MORE" />
      </Container>
    </Container>
    <Container fluid className="default">
      <Container>
        <Header as="h1" content="Academic Partners" />
        <p>The college also established linkages along the way. They include local and international partners as well as government units.</p>
        <Grid columns={4} stackable className="center" centered>
          dfsdf
        </Grid>
      </Container>
    </Container>
  </div>
)
