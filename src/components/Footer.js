/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Facebook, Github, Twitter } from 'react-feather';
import { Link } from 'react-static';
import uuidv4 from 'uuid/v4';
import brandIconLight from '../assets/brandicon-light.svg';

class Footer extends Component {
  render () {
    const menu = [
      {
        name: 'Privacy Policy',
        path: '/privacypolicy',
      },
      {
        name: 'Contact Us',
        path: '/contactus',
      },
      {
        name: <Facebook className="w-4 h-4 m-1" />,
        path: 'https://www.facebook.com/cictwvsu/',
      },
      {
        name: <Twitter className="w-4 h-4 m-1" />,
        path: 'https://twitter.com/cictwvsu',
      },
      {
        name: <Github className="w-4 h-4 m-1" />,
        path: 'https://github.com/wvsu-cict-code',
      },
    ]
    return (
      <footer className="flex items-center justify-between flex-wrap cict-darker p-8">
        <div className="container mx-auto">
          <Link className="mx-4 p-4" to="/"><img className="h-8" src={brandIconLight} alt="CICT Online Logo" /></Link>
          <div className="flex mb-4">
            <div className="w-1/2 h-12">
              <div className="mx-4 p-4">
                <ul className="list-reset flex">
                  {menu.map(i => (
                    <li key={uuidv4()} className="mr-6"><Link className="no-underline align-middle text-grey hover:text-orange" to={i.path}>{i.name}</Link></li>
                ))}
                </ul>
              </div>
            </div>
            <div className="w-1/2 h-12">
              <p className="flex mx-4 p-4 text-grey-dark items-center leading-loose">
                <small className="mx-auto">
                  <span>&lt;/&gt; with &lt;3 by CICTzens | 2016 - Present</span>
                </small>
              </p>
            </div>
          </div>

        </div>
      </footer>
    )
  }
}

export default Footer
