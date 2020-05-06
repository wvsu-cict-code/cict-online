import React from 'react';
import { Facebook, GitHub, Twitter } from "react-feather";
import { Button } from 'antd';

const socialLinks = [
    {
        id: "fb",
        name: "Facebook",
        icon: <Facebook className="mx-auto my-2" />,
        link: "https://www.facebook.com/cictwvsu/"
    },
    {
        id: "tw",
        name: "Twitter",
        icon: <Twitter className="mx-auto my-2" />,
        link: "https://twitter.com/cictwvsu"
    },
    {
        id: "gt",
        name: "GitHub",
        icon: <GitHub className="mx-auto my-2" />,
        link: "https://github.com/wvsu-cict-code"
    },
]

const SocialSection: React.FC = () => (
    <div className="text-center p-4 text-sm" style={{backgroundColor: '#FCFCFC'}}>
        <p className="mb-2">Follow Us</p>
        {socialLinks.map(i => (
            <Button key={i.id} className="mx-2" href={i.link} target="_blank" shape="circle" size="large">{i.icon}</Button>
        ))}
    </div>
)

export default SocialSection