import { Alert, Layout, List, Tabs, Button, Collapse, Divider, Avatar } from 'antd';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import { DiscussionEmbed } from 'disqus-react';
import React, { useEffect, useState } from 'react';
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
const { TabPane } = Tabs;
const { Content } = Layout
const { Panel } = Collapse;

const photoIDGuidelines = [
    'Passport standard size (35x45mm)',
    'Pixel Dimensions: 350 x 450 pixels minimum',
    'Photo should be in portrait orientation (i.e., higher than it is wide)',
    'Photo should be taken with your eyes open and clearly visible (no sunglasses or tinted glasses and no hair across your eyes)',
    'Show your full head (70 to 80% of the photograph), without any head covering unless you wear one for religious beliefs or medical reasons show you on your own',
    'Photo should be in colour not grayscale',
    'Should be taken within the last 12 months',
    'Should be clear and in sharp focus, with a clear difference between your face and a plain',
    'Use light background.',
    'The image should be less than 1MB in size and in JPG/JPEG format. Most digital cameras and smartphones save photographs as a JPG/JPEG file. You can find the file size of the image by right clicking the file and selecting “Properties”.',
    'A photograph not meeting the requirements will be rejected. Refer to the Image Resizer Guide on how to resize the image file to 1mb or less.'
]

const summarizedGuidelines = [
    `Go to http://iuis.wvsu.edu.ph/aims/applicants/`,
    `Click Apply Here`,
    `Fill up all text fields with correct information and select Main Campus in the list of campuses.`,
    `*Make sure to supply the correct email address. You will need that for confirmation later.`,
    `Click on Create Account and tick the privacy consent check box before continuing.`,
    `An email confirmation will be sent to your inbox together with your temporary login details.`,
    `Click Continue to proceed to your application`,
    `Complete Steps 1 to 5 by filling all necessary fields in the application form. Make sure to provide correct details and check each entry for errors. If a field is required and no data is available, input “Not Applicable” or “NA”.`,
    `Upload the image file of the Senior High report card and your ID photo.`,
    `Click Save and Continue afterwards.`,
    `Read the information in the Applicant Certification field and click the Submit Application after reviewing your form.`,
    `The system will send your Applicant login credentials to your email. You can login and view the notification board and your applicant data. Note: This is different from your temporary account in step 5. Use the username and password to login to the Online Application`,
    `Module to view/modify your application data.`,
    `Logout of the Online Application Module.`,
    `Check your email regularly for notification emails from the College(s) of the course(s) that you applied for.`,
]

const generalGuidelines = [
    'WVSUCAT passers refer to those applicants who meet the minimum score for the course they are applying for. Valid scores refer to the results of applicants who took the WVSUCAT exam for AY 2020-21.',
    'Applicants who filed their college application personally or through email before May 15, 2020 are still required to submit online through the IUIS.',
    'Undergraduate applicants must personally register and apply online.',
    'Applicants may only apply for admission to any of the three priority programs indicated in the WVSUCAT Form. Changes to the priority programs are not allowed.',
    'The applicant must fill out the Applicant Module with the required data. Refer to the detailed instructions on how to fill out the Online Application Module. Also, provide or attach the following documents:',
    'scanned image or photo of the applicant',
    'scanned image or photo of the Senior High GWA for first semester',
    'Only those applicants who have complete documents will be scheduled for interview. For some colleges that have other requirements, the applicants must comply to be eligible for the interview. Any additional requirements must be sent by email to the college.',
    'The applicant who meets the requirements stated in step 5 will be notified via email of the schedule of the interview. In case two or more colleges have set the same schedule for interview, the applicant must notify the other colleges so he or she will be given a new schedule.',
    'The interview will be done online or via a phone call. Instruction on the conduct of the interview will be posted later.',
    'Qualified applicant will be notified via email. If the applicant is qualified for admission to more than one college, the applicant must choose the course and email the intent to enroll to the college of his/her choice.',
    'Once the college receives the intent to enroll, the college will schedule the applicant for Physical Examination. Instructions on the Physical Exam will be posted later.',
    'The applicant who passes the PE will finally be marked as ACCEPTED and ready for online enrollment. Instructions on the conduct of the online enrollment will be posted later.',
    'Applicants to the Main Campus who fail to qualify for admission may submit their WVSUCAT result for possible admission to an External Campus of WVSU. Likewise, applicants to the External campuses may use their WVSUCAT result to apply for admission to other External campuses.',
]

const faqs: any = [
    {
        q: 'Can I use my existing email even if it is not following the specified format?',
        a: 'No, you need to create a new one that follows firstname.lastname@gmail.com format. You can use either Gmail or Yahoo.'
    }
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
                                <span className="text-3xl mb-4"><ReactTypingEffect speed={100} eraseDelay={5000} typingDelay={200} text='F1: Admission Guide and Support'></ReactTypingEffect></span>
                                <p>We are here to help! Our University just release the final set of guidelines for online Admission. We compiled everything in one place to assist with your application.</p>
                                <Tabs defaultActiveKey="1" onChange={() => { }}>
                                    <TabPane tab={<span className={theme !== 'base' && 'text-white'}>Summarized Guidelines</span>} key="1">
                                        <List
                                            footer={<small className="text-gray-500">Reference: <a href="https://www.facebook.com/wvsufb/posts/10157048013876196">https://www.facebook.com/wvsufb/posts/10157048013876196</a></small>}
                                            bordered
                                            dataSource={summarizedGuidelines}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>                                                    
                                                    <List.Item.Meta
                                                    avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar> }
                                                    description={<span className={theme !== 'base' && 'text-white'}>{item}</span>}  
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <Button type="primary" target="_blank" className="my-4" href="https://drive.google.com/file/d/1dU__ilymFLMgFoWybHxU-yW6OIwLQOUF/view">Open the IUIS Online Application Manual</Button>
                                    </TabPane>
                                    <TabPane tab={<span className={theme !== 'base' && 'text-white'}>General Guidelines</span>} key="2">
                                        <List
                                            footer={<small className="text-gray-500">Reference: <a href="https://www.facebook.com/wvsufb/posts/10157048045506196?__tn__=K-R">https://www.facebook.com/wvsufb/posts/10157048045506196?__tn__=K-R</a></small>}
                                            bordered
                                            dataSource={generalGuidelines}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>                                                    
                                                    <List.Item.Meta
                                                    avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar> }
                                                    description={<span className={theme !== 'base' && 'text-white'}>{item}</span>}  
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab={<span className={theme !== 'base' && 'text-white'}>Photo ID</span>} key="3">
                                        <List
                                            footer={<small className="text-gray-500">Reference: <a href="https://drive.google.com/file/d/1pnE3u97n7-w-ROyduWwSjggJmjk53eaj/view">https://drive.google.com/file/d/1pnE3u97n7-w-ROyduWwSjggJmjk53eaj/view</a></small>}
                                            bordered
                                            dataSource={photoIDGuidelines}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>                                                    
                                                    <List.Item.Meta
                                                    avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar> }
                                                    description={<span className={theme !== 'base' && 'text-white'}>{item}</span>}  
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab={<span className={theme !== 'base' && 'text-white'}>Image Resizer Guidelines</span>} key="4">
                                        <List
                                            footer={<small className="text-gray-500">Reference: <a href="https://drive.google.com/file/d/1TflI6WBmBXZDfQt-Tr1sgiXLqCgg-93O/view">https://drive.google.com/file/d/1TflI6WBmBXZDfQt-Tr1sgiXLqCgg-93O/view</a></small>}
                                            bordered
                                            dataSource={photoIDGuidelines}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>                                                    
                                                    <List.Item.Meta
                                                    avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar> }
                                                    description={<span className={theme !== 'base' && 'text-white'}>{item}</span>}  
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                    </TabPane>
                                    <TabPane tab={<span className={theme !== 'base' && 'text-white'}>FAQs</span>} key="5">
                                        <Collapse defaultActiveKey={['1']} >
                                            {Object.keys(faqs).map(i => (
                                                <Panel header={faqs[i].q} key={i}>
                                                    <p>{faqs[i].a}</p>
                                                </Panel>
                                            ))}
                                        </Collapse>
                                    </TabPane>
                                </Tabs>
                                <Divider />
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
