
import React from 'react'
import { Menu, Image, Container, Message, Header, Divider, Icon } from 'semantic-ui-react'
import { Link, Head } from 'react-static'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import logoInverted from '../assets/cictonline-logo-dark.png'

import { batch1, batch2, batch3, batch4 } from '../components/admission/results2018'
import ogImage from '../assets/og-image.jpg'

const batch1Columns = [{
  Header: 'May 7 | CICT Room 306',
  accessor: 'name',
}]

const batch2Columns = [{
  Header: 'May 7 | CICT Room 307',
  accessor: 'name',
}]

const batch3Columns = [{
  Header: 'May 8 | CICT Room 306',
  accessor: 'name',
}]

const batch4Columns = [{
  Header: 'May 8 | CICT Room 307',
  accessor: 'name',
}]

export default () => (
  <div>
    <Head>
      <title>CICT Admission | Exam Results</title>
      <meta property="og:url" content="http://cictwvsu.com/admission" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="College Aptitude Exam Results 2018" />
      <meta property="og:description" content="Names in the list will proceed for interview on May 7-8, 2018" />
      <meta property="og:image" content={ogImage} />
    </Head>
    <Menu attached="top" borderless>
      <Menu.Item as={Link} to="/">
        <Image src={logoInverted} size="mini" />
      </Menu.Item>
      <Menu.Item>
            College Aptitude Exam Results
      </Menu.Item>
      <Menu.Menu position="right" />
    </Menu>
    <Container>
      <Header style={{ margin: '1rem 0' }} sub content="Names in the list will proceed for interview on May 7-8, 2018" />
      <Message><Icon name="info circle" /> You may search your name on the filter box for quick verification.</Message>
      <ReactTable
        data={batch1}
        columns={batch1Columns}
        filterable
      />
      <Divider />
      <ReactTable
        data={batch2}
        columns={batch2Columns}
        filterable
      />
      <Divider />
      <ReactTable
        data={batch3}
        columns={batch3Columns}
        filterable
      />
      <Divider />
      <ReactTable
        data={batch4}
        columns={batch4Columns}
        filterable
      />
      <div style={{ width: '100%', height: '2rem' }} />
      <Container textAlign="center">2018 | CICT WVSU</Container>
      <div style={{ width: '100%', height: '2rem' }} />
    </Container>
  </div>
)
