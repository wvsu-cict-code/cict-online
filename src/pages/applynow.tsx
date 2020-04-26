import React from 'react'
import SEO from 'components/SEO'
import { Layout, Divider } from 'antd'
import Footerbar from 'components/Footerbar';
import SocialSection from 'components/SocialSection';
import Navbar from 'components/Navbar';
import { FacebookShareButton, TwitterShareButton } from 'react-share'
import { Facebook, Twitter, Share2 } from "react-feather";
export default () => (
  <div>
    <SEO
      title="WVSU CICT - Apply"
      description="Apply Now."
      url="https://cict.wvsu.edu.ph/applynow"
      image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image.jpg"
      twitterUsername="cictwvsu"
    />
    <Layout className="layout">
      <Layout>
        <Navbar showApplication={false} />
        <div className="bg-white p-0">
          <div className="container mx-auto" style={{maxWidth: '640px'}} >   
            <div className="my-4 px-8">
              <span className="flex mx-auto text-center float-right mb-4">
                <Share2 className="opacity-50" size={25} />
                <FacebookShareButton hashtag="cictadmission2021" quote="Application for admission for 1st Semester SY 2020-2021 is now open!" url="https://cict.wvsu.edu.ph/applynow">
                  <Facebook size={25} />
                </FacebookShareButton>
                <TwitterShareButton url="https://cict.wvsu.edu.ph/applynow" title="Application for admission for 1st Semester SY 2020-2021 is now open!">
                  <Twitter size={25} />
                </TwitterShareButton>
              </span>
            </div>            
          </div>
          <Divider />
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffrJ9taFHBEfJV360WN7yIBI1dGWYvEIiTITkbKWsdOPowzQ/viewform?embedded=true" className="w-full min-h-screen">Loading…</iframe>
        </div>
        <SocialSection />
        <Footerbar />
      </Layout>
    </Layout>
  </div>
)
