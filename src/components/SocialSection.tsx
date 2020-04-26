import React from 'react';
import { Facebook, GitHub, Twitter } from "react-feather";
import { Button } from 'antd';

const socialLinks = [
    {
        name: "Facebook",
        icon: <Facebook className="mx-auto my-2" />,
        link: "https://www.facebook.com/cictwvsu/"
    },
    {
        name: "Twitter",
        icon: <Twitter className="mx-auto my-2" />,
        link: "https://twitter.com/cictwvsu"
    },
    {
        name: "GitHub",
        icon: <GitHub className="mx-auto my-2" />,
        link: "https://github.com/wvsu-cict-code"
    },
]

const SocialSection:React.FC = () => (
    <div className="bg-white text-center p-4 text-sm">
        <p>Follow Us</p>
        {socialLinks.map(i => (
            <Button className="mx-2" href={i.link} target="_blank" shape="circle" size="large">{i.icon}</Button>
        ))}
    </div>
)

export default SocialSection