import { Link } from '@reach/router';
import { Alert, Button, Divider, Layout, List } from 'antd';
import Footerbar from 'components/Footerbar';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import React, { useState } from 'react';
import { Facebook, Share2, Twitter } from "react-feather";
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const requirements = [
  'WVSU-CAT Result Slip (with a score of 80 or higher)',
  'SHS Report Card (Original and Photocopy)',
  'Certificate of Good moral character (Original and Photocopy)',
  'Birth Certificate (2 Photocopies)',
  'Medical Certificate (to be secured from the University Clinic)'
];
export default () => {
  let [collapsed, toggleContent] = useState(false)
  return (
    <div>
      <SEO
        title="WVSU CICT - Online Application"
        description="Apply Now."
        url="https://cictwvsu.com/applynow/"
        image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image-1.jpg"
        twitterUsername="cictwvsu"
      />
      <Layout className="layout">
        <Layout>
          <Navbar showApplication={false} />
          <div className="bg-white p-0">
            <div className="container mx-auto" style={{ maxWidth: '640px' }} >
              <div className="my-4 px-8">
                <span className="flex mx-auto text-center float-right mb-4">
                  <Share2 className="opacity-50" size={25} />
                  <FacebookShareButton hashtag="cictadmission2021" quote="Application for admission for 1st Semester SY 2020-2021 is now open!" url="https://cictwvsu.com/applynow">
                    <Facebook size={25} />
                  </FacebookShareButton>
                  <TwitterShareButton url="https://cictwvsu.com/applynow" title="Application for admission for 1st Semester SY 2020-2021 is now open!">
                    <Twitter size={25} />
                  </TwitterShareButton>
                </span>
              </div>
            </div>
            <Divider />
            <div className="container mx-auto px-4" style={{ maxWidth: '640px' }} >
              <h2 className="text-3xl">Online Application for Admission</h2>
              {!collapsed &&
                <>
                  <p>If you are aspiring to enter one of the best Higher Education Institutions in Western Visayas, you can now apply and enjoy Free Tuition at West Visayas State University - College of ICT for Academic Year 2020-2021 Admission!</p>
                  <p>We have moved our application to our online platform to cater to you amidst the challenges brought by the COVID 19 Pandemic.            </p>
                  <Divider />
                  <Alert message="Before you continue, make sure you carefully read everything first." />
                  <p className="mt-4">
                    You are qualified to apply if you got a score of 80 or higher on your WVSU College Admission Test last December 15, 2019.
            </p>
                  <p>
                    Those who have already submitted their Application Forms at the CICT Office before the Enhanced Community Quarantine (ECQ) was imposed are NOT REQUIRED to submit an online application.
            </p>
                  <p>
                    Make sure to provide a valid email address and an active mobile number for us to contact you. Check your messages frequently for information regarding the next steps in the admission process.
            </p>
                  <p>
                    If you don't have an email address please get one before you proceed.
            </p>
                  <Alert message="Please be reminded that we will require the following documents at a later date when condition permits:" />
                  <div className="h-4 w-full"></div>
                  <List
                    size="small"
                    header={<div className="font-bold">Requirements</div>}
                    bordered
                    dataSource={requirements}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                  <p className="mt-4">Stay updated by following us on <Link to="https://www.facebook.com/cictwvsu">Facebook</Link> or <Link to="https://twitter.com/cictwvsu">Twitter</Link>.</p>
                  <p>
                    Apply now and become part of one of the best universities in Western Visayas and in the Philippines. Stay safe!
            </p>
                </>
              }
              <Button onClick={() => toggleContent(collapsed = !collapsed)} className="w-full">{collapsed ? "Show Info" : "Hide Info"}</Button>
            </div>

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSffrJ9taFHBEfJV360WN7yIBI1dGWYvEIiTITkbKWsdOPowzQ/viewform?embedded=true" className="w-full min-h-screen">Loading…</iframe>
          </div>
          <Footerbar />
        </Layout>
      </Layout>
    </div>
  )
}
