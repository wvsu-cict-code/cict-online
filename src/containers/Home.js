
import React from 'react'
import { Menu, Image, Container, Message, Header, Divider, Icon, Card } from 'semantic-ui-react'
import { Link, Head } from 'react-static'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'
import ogImage from '../assets/og-image.jpg'
import brandIcon from '../assets/brandicon.svg'
import homeHeadeBackground from '../assets/background.jpg'

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
      <Menu.Menu position="right">
        <Menu.Item as={Link} >Admission</Menu.Item>
        <Menu.Item as={Link} >Students</Menu.Item>
        <Menu.Item as={Link} >Faculty &amp; Staff</Menu.Item>
      </Menu.Menu>
    </Menu>
    <Container className="home-header" fluid>
      <Container className="container-padded">
        <Header as="h1" className="header-light--jumbo">
          <Header.Content>
            <Typist avgTypingDelay={100} cursor={{ show: false, blink: true }}>CICT Online</Typist>
            <Header.Subheader>
              <Typist startDelay={1500} >Welcome to the College of Information and Communications Technology Website!</Typist>
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Container>
    </Container>
    <Container />
  </div>
)
