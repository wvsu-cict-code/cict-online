import { Alert, Avatar, Button, Collapse, Divider, Layout, List, Tabs, Empty } from 'antd';
import Footerbar from 'components/Footerbar';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import SocialSection from 'components/SocialSection';
import React, { useEffect, useState } from 'react';
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import mascot from '../assets/mascot.svg'
const { TabPane } = Tabs;
const { Content } = Layout
const { Panel } = Collapse;

const googleCalendarGuide = [
    <span>In Google Calendar, click the event you want to join.</span>,
    <span>Click Join with Google Meet.</span>,
    <span>Click Join with Google Meet.</span>
]

const googleMeetGuide = [
<span>In a web browser, enter https://meet.google.com/.</span>,
<span>Select the meeting from your list of scheduled events. Only meetings scheduled through Google Calendar appear on Google Meet.</span>,
<span>Click Join now. Tip: A chime sounds as the first 5 people join. After that, you’ll receive a silent notification for new participants.</span>,
<span>You can also join using a meeting code - the meeting code is the string of letters at the end of the meeting link. You don't have to enter the hyphens.</span>
]

const guideUsingGmail = [
    <span>Open Gmail.</span>,
    <span>In the sidebar, click Join a meeting. Tip: If you don’t see this option, contact us.</span>,
    <span>Enter a meeting code or nickname. G Suite users can share a nickname with people in their organization as a fast way to join a meeting.</span>,
    <span>Click Join.</span>,
]

const guideUsingMobile = [
    <span>Go to the Play Store (Android) or App Store (Apple® iOS®).</span>,
    <span>Download and install the Google Meet app .</span>,
    <span>On your device, tap the Google Meet app  to open.</span>,
    <span>Open the Meet app .</span>,
    <span>Tap (plus icon) New meeting to start a meeting, or tap (keyboard icon) Meeting code, and enter a meeting code.</span>,
    <span>Tap Join meeting.</span>

]

const options = [
    'Join using Gmail.',
    'Join using Google Calendar event.',
    'Join using from Google Meet Web App.',
    'Join using Google Meet Mobile App.',
]

const faqs: any = [

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
                title="WVSU CICT | Interview Guidelines and Support"
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
                                <span className="text-3xl mb-4"><ReactTypingEffect speed={100} eraseDelay={5000} typingDelay={200} text='Online Interview Guides and Support'></ReactTypingEffect></span>
                                <p>We wish you all the luck in your upcoming interview!</p>
                                <Alert message="Updated Last June 9, 2020" />
                                <p className="my-8 text-2xl">
                                    CICT Applicants, we will be using Google Meet for your interview. You can join with any of the following methods listed below:
                                </p>
                                <List
                                    bordered
                                    dataSource={options}
                                    renderItem={(item: any, key: number) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar style={{ backgroundColor: '#34B1A3' }}>{key + 1}</Avatar>}
                                                description={<span className={theme === 'base' ? 'text-black' : 'text-white'}>{item}</span>}
                                            />
                                        </List.Item>
                                    )}
                                />
                                <Divider />
                                <Tabs defaultActiveKey="1" onChange={() => { }}>
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>Joining via Gmail</span>} key="0">
                                        <List
                                            footer={<Button type="primary" href="https://www.youtube.com/watch?time_continue=1&v=8t20ePJGM6w&feature=emb_logo" target="_blank">Watch Video</Button>}
                                            bordered
                                            dataSource={guideUsingGmail}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar>}
                                                        description={<span className={theme === 'base' ? 'text-black' : 'text-white'}>{item}</span>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>Joining via Google Calendar </span>} key="1">
                                        <List
                                            footer={<Button type="primary" href="https://youtu.be/1CdYl9tApRU" target="_blank">Watch Video</Button>}
                                            bordered
                                            dataSource={googleCalendarGuide}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar>}
                                                        description={<span className={theme === 'base' ? 'text-black' : 'text-white'}>{item}</span>}
                                                    />
                                                </List.Item>
                                            )}
                                        />                                        
                                    </TabPane>
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>Joining via Google Meet</span>} key="2">                                        
                                        <List
                                            style={{ marginTop: '2rem' }}
                                            footer={<Button href="https://support.google.com/meet/answer/9303069?co=GENIE.Platform%3DDesktop&hl=en#" target="_blank" type="primary">Open the Google Meetup Guide Document</Button>}
                                            bordered
                                            dataSource={googleMeetGuide}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar>}
                                                        description={<span className={theme === 'base' ? 'text-black' : 'text-white'}>{item}</span>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>Joining using your Mobile Phone</span>} key="3">                                        
                                        <List
                                            style={{ marginTop: '2rem' }}
                                            footer={<Button href="https://www.youtube.com/watch?v=gE7_AHJW7mE" target="_blank" type="primary">Watch the Video</Button>}
                                            bordered
                                            dataSource={guideUsingMobile}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar>}
                                                        description={<span className={theme === 'base' ? 'text-black' : 'text-white'}>{item}</span>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>FAQ</span>} key="4">
                                        {faqs.length > 0 ? <Collapse defaultActiveKey={['0']} >
                                            {Object.keys(faqs).map(i => (
                                                <Panel header={faqs[i].q} key={i}>
                                                    <p>{faqs[i].a}</p>
                                                </Panel>
                                            ))}
                                        </Collapse>:<Empty image={<img className="mx-auto" src={mascot} />} description="No FAQ Entries Available Yet" />}
                                    </TabPane>
                                </Tabs>
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
