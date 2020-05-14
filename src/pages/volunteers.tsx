import { Card, Layout, Button } from 'antd';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import React, { useEffect, useState } from 'react';
import Identicon from 'react-identicons';
import Masonry from 'react-masonry-css';
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import SocialSection from 'components/SocialSection';
import Footerbar from 'components/Footerbar';

const { Content } = Layout

const volunteers: {
    avatar: any,
    name: string;
    work: string[];
    link: string;
}[] = [
        {
            avatar: "Link.exe",
            name: "Link.exe",
            work: ["Photos", "Videos"],
            link: "https://www.facebook.com/linkexeofficial/"
        },
        {
            avatar: "ICON Publication",
            name: "ICON Publication",
            work: ["News and Updates"],
            link: "https://www.facebook.com/weareicon.wvsu/"
        },
        {
            avatar: "CICT PTA",
            name: "CICT PTA",
            work: ["Domain and App Store Funding"],
            link: null
        },
        {
            avatar: "Dr. Regin A. Cabacas",
            name: "Dr. Regin A. Cabacas",
            work: ["Hosting & Domain Manager"],
            link: null
        },
        {
            avatar: "Shem Durst Elijah B. Sandig",
            name: "Shem Durst Elijah B. Sandig",
            work: ["Content Review"],
            link: null
        },
        {
            avatar: "Nouriel John Cariño",
            name: "Nouriel John Cariño",
            work: ["Official CICT Mascot"],
            link: null
        },
        {
            avatar: "Wilson Olivier C. Gazer",
            name: "Wilson Olivier C. Gazer",
            work: ["Volunteer Animator"],
            link: null
        },
        {
            avatar: "Nina Ricci Marie Benite",
            name: "Nina Ricci Marie Benite",
            work: ["Volunteer ReactJS Developer", "Geek Mode Developer"],
            link: null
        },
        {
            avatar: "Anelie Decomotan",
            name: "Anelie Decomotan",
            work: ["Volunteer Developer"],
            link: null
        },
        {
            avatar: "Mark Anthony Lumbao",
            name: "Mark Anthony Lumbao",
            work: ["Volunteer ReactJS Developer", "Dynamic Theming Implementor", "Geek Mode Developer"],
            link: "http://m-a-l.herokuapp.com/"
        },
        {
            avatar: "Luie John Malimit",
            name: "Luie John Malimit",
            work: ["Volunteer Student Developer"],
            link: null
        },
        {
            avatar: "Mariela Excel Escanlar",
            name: "Mariela Excel Escanlar",
            work: ["Volunteer SEO Consultant"],
            link: null
        },
    ]
export default () => {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const themeModeHandler = () => (theme === 'base' ? setTheme('dark') : setTheme('base'));

    return (
        <>
            <SEO
                title="WVSU CICT | Source Code Volunteers"
                description="This website is not possible without these volunteers. Thank you!"
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
                                <span className="text-3xl">{">>> "}<ReactTypingEffect speed={100} eraseDelay={5000} typingDelay={200} text='print("Thank you very much!")'></ReactTypingEffect></span>
                                <p>Thank you for reaching out and helping us develop our college website!</p>
                                <div className="my-8">
                                    <Masonry
                                        breakpointCols={{
                                            default: 4,
                                            1280: 4,
                                            800: 2,
                                            700: 2,
                                            500: 1
                                        }}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column">
                                        {volunteers.map(i => (
                                            <div className="text-center">
                                                <Card actions={i.link&&[
                                                    <Button href={i.link} target="_blank">Learn More</Button>
                                                ]} className="card-component" style={{ backgroundColor: theme === 'base' ? '#fff' : '#111', border: "none" }}>
                                                    <Identicon string={i.avatar} size={60} className="rounded-full mb-8 mx-auto border p-2" />
                                                    <Card.Meta title={<span className={`${theme !== 'base' && 'text-white'}`}>{i.name}</span>} description={
                                                        <>
                                                            <p className={`${theme !== 'base' && 'text-gray-600'} mb-2`}>{i.work && i.work.join(', ')}</p>
                                                        </>
                                                    } />
                                                </Card>
                                            </div>
                                        ))}
                                    </Masonry>
                                </div>
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
