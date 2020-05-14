import { Layout, Alert } from 'antd';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import ReactTypingEffect from '../components/ReactTypingEffect';
import React, { useEffect, useState } from 'react';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import { DiscussionEmbed } from 'disqus-react'

const { Content } = Layout

export default () => {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const themeModeHandler = () => (theme === 'base' ? setTheme('dark') : setTheme('base'));

    return (
        <>
            <SEO
                title="WVSU CICT | Admission Guidelines"
                description="Get help with our University's Admission Process"
                url="https://cictwvsu.com/"
                image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image-2.jpg"
                twitterUsername="cictwvsu"
            />
            <Layout className="layout">
                <Layout>
                    <Navbar showApplication={false} themeState={theme} themeModeHandler={themeModeHandler} defaultSelected={['1']} />
                    <Content className="layout p-0 px-8">
                        <div className="container mx-auto">
                            <div className={`my-4 ${theme !== 'base' && 'text-white'}`}>
                                <span className="text-3xl"><ReactTypingEffect speed={100} eraseDelay={5000} typingDelay={200} text='F1: Admission Guide and Support'></ReactTypingEffect></span>
                                <p>We are here to help!</p>
                                <p>Some very long guide here. </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Alert type="info" showIcon message="Don't be shy! You may leave a comment below for a public inquiry!" />
                            </div>
                            <DiscussionEmbed
                                shortname='cictonline'
                                config={
                                    {
                                        url: "https://cictwvsu.com/",
                                        identifier: "admission",
                                        title: "Admission Support",
                                        language: 'en'
                                    }
                                }
                            />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
