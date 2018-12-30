import React, { Component } from 'react';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share';

const url = 'http://cictwvsu.com/alumni/';
const quote = 'Register now!';
        
const SocialSharing = () => (
    <div className="text-center">
        <p className="mb-4">Share with your friends!</p>
        <div className="inline-flex mx-auto">
            <div className="zoom">
                <FacebookShareButton
                    url={url}
                    quote={quote}
                    className="mx-2"
                >
                    <FacebookIcon
                        size={32}
                        round />
                </FacebookShareButton>
            </div>
            <div className="zoom">
                <TwitterShareButton
                    className="mx-2"
                    url={url}
                    title={quote}
                >
                    <TwitterIcon
                        size={32}

                        round />
                </TwitterShareButton>
            </div>

            <div className="zoom">
                <EmailShareButton
                    className="mx-2"
                    url={url}
                    subject={quote}
                    body="Register for CICT Alumni Homecoming 2019!"
                >
                    <EmailIcon
                        size={32}
                        round />
                </EmailShareButton>
            </div>
        </div>
    </div>
)

export default SocialSharing;