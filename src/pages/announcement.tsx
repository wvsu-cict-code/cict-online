import { Divider, Layout } from 'antd';
import Footerbar from 'components/Footerbar';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import SocialSection from 'components/SocialSection';
import React, { useEffect, useState } from 'react';
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import axios from 'axios';
import { useLocation } from "@reach/router"
import { parse } from "query-string"


const { Content } = Layout

export default () => {
    const [theme, setTheme] = useState(DEFAULT_THEME);
    const [announcement, setAnnouncement] = useState(null);
    const location = useLocation()
    const searchParams = parse(location.search)

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    useEffect(() => {
        console.log({ searchParams })
        axios.get(`https://raw.githubusercontent.com/wvsu-cict-code/cict-online/master/src/announcements/${searchParams.page || 'default.md'}`).then(res => {
            setAnnouncement(res.data)
        }).catch(() => setAnnouncement("No announcement record found. :("))
    }, announcement)


    const themeModeHandler = () => (theme === 'base' ? setTheme('dark') : setTheme('base'));

    return (
        <>
            <SEO
                title="Announcement | WVSU CICT"
                description="Get help with our Interview Process"
                url="https://cictwvsu.com/interview/"
                image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image-5.jpg"
                twitterUsername="cictwvsu"
            />
            <Layout className="layout">
                <Layout>
                    <Navbar showApplication={false} themeState={theme} themeModeHandler={themeModeHandler} defaultSelected={['1']} />
                    <Content className="layout p-0 px-8">
                        <div className="container mx-auto">
                            <div className={`my-4 ${theme === 'base' ? 'text-black' : 'text-white'}`}>
                                <span className="text-3xl mb-4"><ReactTypingEffect speed={100} eraseDelay={5000} typingDelay={200} text='Announcement'></ReactTypingEffect></span>
                                <p>Please be guided accordingly!</p>
                                <Divider />
                                <div className="markdown-body">
                                    {announcement ? <ReactMarkdown allowDangerousHtml plugins={[gfm]} children={announcement} /> : <>Loading...</>}
                                </div>
                                <Divider />
                            </div>

                        </div>
                    </Content>
                    <SocialSection themeState={theme} />
                    <Footerbar themeState={theme} />
                </Layout>
            </Layout>
        </>
    )
}
