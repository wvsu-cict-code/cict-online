import { Alert, Layout, List, Tabs, Button, Collapse, Divider, Avatar } from 'antd';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import { DiscussionEmbed } from 'disqus-react';
import React, { useEffect, useState } from 'react';
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import SocialSection from 'components/SocialSection';
import Footerbar from 'components/Footerbar';
import idealPhoto from '../assets/misc/ideal-photo.png'
const { TabPane } = Tabs;
const { Content } = Layout
const { Panel } = Collapse;

const photoIDGuidelines = [
    <span>Passport standard size <b>(35x45mm)</b></span>,
    <span>Pixel Dimensions: <b>350 x 450 pixels</b> minimum</span>,
    <span>Photo should be in <b>portrait</b> orientation (i.e., higher than it is wide)</span>,
    <span>Photo should be taken with your eyes open and clearly visible (no sunglasses or tinted glasses and no hair across your eyes)</span>,
    <span>Show your full head (70 to 80% of the photograph), without any head covering unless you wear one for religious beliefs or medical reasons show you on your own</span>,
    <span>Photo should <b>be in colour</b> not grayscale</span>,
    <span>Should be taken within the last 12 months</span>,
    <span>Should be clear and in sharp focus, with a clear difference between your face and a plain</span>,
    <span>Use <b>light background</b>.</span>,
    <span>The image should be less than 1MB in size and in JPG/JPEG format. Most digital cameras and smartphones save photographs as a JPG/JPEG file. You can find the file size of the image by right clicking the file and selecting “Properties”.</span>,
    <span>A <b>photograph not meeting the requirements will be rejected</b>. Refer to the <Button size="small" type="primary" target="_blank" className="my-4" href="https://drive.google.com/file/d/1TflI6WBmBXZDfQt-Tr1sgiXLqCgg-93O/view">Image Resizer Guide</Button> on how to resize the image file to 1mb or less.</span>,
    <span>Here is how an ideal photo looks like:<img className="h-50 w-auto" src={idealPhoto} alt="Ideal Photo" /></span>
]

const summarizedGuidelines = [
    <span>Go to the IUIS and <Button size="small" type="primary" href="http://iuis.wvsu.edu.ph/aims/applicants/" target="_blank">Open the Online Application Page</Button>.</span>,
    <span>Click the <span className="text-orange-500 font-bold">Apply Here</span> Button</span>,
    <span>Fill up all text fields with correct information and select <span className="font-bold">Main Campus</span> in the list of campuses.</span>,
    `*Make sure to supply the correct email address (firstname.lastname@gmail.com). You will need that for confirmation later.`,
    <span>Click on <span className="font-bold">Create Account</span> and tick the privacy consent check box before continuing.</span>,
    `An email confirmation will be sent to your inbox together with your temporary login details.`,
    <span><span className="font-bold">Click Continue</span> to proceed to your application</span>,
    <span>Complete Steps 1 to 5 by filling all necessary fields in the application form. Make sure to provide correct details and check each entry for errors. <span className="font-bold">If a field is required and no data is available, input “Not Applicable” or “NA”</span>.</span>,
    `Upload the image file of the Senior High report card and your ID photo.`,
    `Click Save and Continue afterwards.`,
    `Read the information in the Applicant Certification field and click the Submit Application after reviewing your form.`,
    `The system will send your Applicant login credentials to your email. You can login and view the notification board and your applicant data. Note: This is different from your temporary account in step 5. Use the username and password to login to the Online Application Module to view/modify your application data.`,
    `Logout of the Online Application Module.`,
    `Check your email regularly for notification emails from the College(s) of the course(s) that you applied for.`,
]

const contacts: any = [
    {
        name: "Office of the Registrar - Main Campus",
        items: ["admission@wvsu.edu.ph", "(033) 320-08-70 to 77 loc. 1112 & 1113"]
    },
    {
        name: "College of Agriculture and Forestry",
        items: ["caf@wvsu.edu.ph", "(033) 396-25-96"]
    },
    {
        name: "Calinog Campus",
        items: ["calinog@wvsu.edu.ph", "(033) 330-09-24"]
    },
    {
        name: "Himamaylan City Campus",
        items: ["himamaylan@wvsu.edu.ph", "(034) 744-72-73"]
    },
    {
        name: "Janiuay Campus",
        items: ["janiuay@wvsu.edu.ph", "(033) 317-11-21"]
    },
    {
        name: "Lambunao Campus",
        items: ["lambunao@wvsu.edu.ph", "(033) 533-80-53"]
    },
    {
        name: "Pototan Campus",
        items: ["pototan@wvsu.edu.ph", "(033) 529-87-16"]
    },
]

const generalGuidelines = [
    <span>WVSUCAT passers refer to those applicants who meet the minimum score for the course they are applying for. Valid scores refer to the results of applicants who took the WVSUCAT exam for AY 2020-21.</span>,
    <span><b>Applicants who filed their college application personally or through email before May 15, 2020</b> are still <b>required</b> to submit online through the IUIS.</span>,
    <span><b>Undergraduate</b> applicants must <b>personally register and apply online</b>.</span>,
    <span>Applicants may only apply for admission to any of the three priority programs indicated in the WVSUCAT Form. Changes to the priority programs are <b>not allowed</b>.</span>,
    <span>The applicant must fill out the Applicant Module with the required data. Refer to the detailed instructions on how to fill out the Online Application Module. Also, provide or attach the following documents:<ul>
        <li>* scanned image or photo of the applicant</li>
        <li>* scanned image or photo of the Senior High GWA for first semester</li>
    </ul></span>,
    <span>Only those applicants who have <b>complete documents</b> will be scheduled for interview. For some colleges that have other requirements, the applicants must comply to be eligible for the interview. Any additional requirements must be sent by email to the college.</span>,
    <span>The applicant who meets the requirements stated in step 5 will be notified via email of the schedule of the interview. In case two or more colleges have set the same schedule for interview, the applicant must notify the other colleges so he or she will be given a new schedule.</span>,
    <span>The <b>interview</b> will be done <b>online or via a phone call</b>. Instruction on the conduct of the interview will be posted later.</span>,
    <span>Qualified applicant will be <b>notified via email</b>. If the applicant is qualified for admission to more than one college, the applicant must choose the course and email the intent to enroll to the college of his/her choice.</span>,
    <span>Once the college receives the intent to enroll, the college will schedule the applicant for Physical Examination. Instructions on the Physical Exam will be posted later.</span>,
    <span>The applicant who passes the PE will finally be marked as ACCEPTED and ready for online enrollment. Instructions on the conduct of the online enrollment will be posted later.</span>,
    <span>Applicants to the Main Campus <b>who fail to qualify</b> for admission may submit their WVSUCAT result for possible admission to an <b>External Campus</b> of WVSU. Likewise, applicants to the External campuses may use their WVSUCAT result to apply for admission to other External campuses.</span>,
]

const threeStages = [
    'Registration. You provide a valid email to obtain a temporary account to login to the module and start inputting your data.',
    'Data entry. You login using your temporary account and input your data.',
    'Final confirmation. When you finish data entry you click submit then click okay to finalize your application. You will receive your Applicant Account in your email indicating the system has received your application.'
]

const faqs: any = [
    {
        q: 'Can I use my existing email even if it is not following the specified format?',
        a: 'No, you need to create a new one that follows firstname.lastname@gmail.com format. You can use either Gmail or Yahoo.'
    },
    {
        q: 'Do you have contact details in case we encounter issues?',
        a: <div>
            <p>You may contact these numbers/emails that were provided in our University Facebook page:</p>
            {contacts.map((i: any) => (
                <React.Fragment>
                    <h4>{i.name}</h4>
                    <ul>{i.items.map((j: string) => (<li>{j}</li>))}</ul>
                </React.Fragment>
            ))}
        </div>
    },
    {
        q: 'My name in the prescribed format was already taken. What can I do?',
        a: <div>
            <p>
                You can do the following as answered on our WVSU Facebook page:
                <ul>
                    <li>* omit the dot</li>
                    <li>* replace the dot with a dash or underscore</li>
                    <li>* insert your middle initial after the first name</li>
                    <li>* examples: firstname-lastname@gmail.com, firstname_lastname@gmail.com, firstnamemiddleinitial.lastname@gmail.com</li>
                    <li>* try it with either Gmail or Yahoo</li>
                </ul>
            </p>
            <p>If you still can't find a complying email format, email  our <Button type="primary" size="small" href="mailto:mis@wvsu.edu.ph">MIS Office</Button> so they can help you.</p>
            <p><small>Reference: <a href="https://www.facebook.com/wvsufb/posts/10157048776166196" target="_blank">https://www.facebook.com/wvsufb/posts/10157048776166196</a></small></p>
        </div>
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
                title="WVSU CICT | Admission Guidelines and Support"
                description="Get help with our University's Admission Process"
                url="https://cictwvsu.com/admission/"
                image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image-3.jpg"
                twitterUsername="cictwvsu"
            />
            <Layout className="layout">
                <Layout>
                    <Navbar showApplication={false} themeState={theme} themeModeHandler={themeModeHandler} defaultSelected={['1']} />
                    <Content className="layout p-0 px-8">
                        <div className="container mx-auto">
                            <div className={`my-4 ${theme === 'base' ? 'text-black' : 'text-white'}`}>
                                <span className="text-3xl mb-4"><ReactTypingEffect speed={100} eraseDelay={5000} typingDelay={200} text='F1: Admission Guide and Support'></ReactTypingEffect></span>
                                <p>We are here to help! Our University just released the final set of guidelines for online Admission. We compiled everything in one place to assist with your application.</p>
                                <Alert message="Updated Last Friday 16, May 2020" />
                                <p className="my-8 text-2xl">
                                    Your online application has 3 distinct stages:
                                </p>
                                <List
                                    footer={<small className="text-gray-500">Reference: <a href="https://www.facebook.com/wvsufb/posts/10157053631176196">https://www.facebook.com/wvsufb/posts/10157053631176196</a></small>}
                                    bordered
                                    dataSource={threeStages}
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
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>General Guidelines</span>} key="1">
                                        <List
                                            footer={<small className="text-gray-500">Reference: <a href="https://www.facebook.com/wvsufb/posts/10157048045506196?__tn__=K-R">https://www.facebook.com/wvsufb/posts/10157048045506196?__tn__=K-R</a></small>}
                                            bordered
                                            dataSource={generalGuidelines}
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
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>Photo ID Guide</span>} key="2">
                                        <List
                                            footer={<small className="text-gray-500">Reference: <a href="https://drive.google.com/file/d/1pnE3u97n7-w-ROyduWwSjggJmjk53eaj/view">https://drive.google.com/file/d/1pnE3u97n7-w-ROyduWwSjggJmjk53eaj/view</a></small>}
                                            bordered
                                            dataSource={photoIDGuidelines}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar>}
                                                        description={<span className={theme === 'base' ? 'text-black' : 'text-white'}>{item}</span>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <Button type="primary" target="_blank" className="my-4" href="https://drive.google.com/file/d/1TflI6WBmBXZDfQt-Tr1sgiXLqCgg-93O/view">Open Image Resizer Guide</Button>
                                    </TabPane>
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>Summarized Guidelines (Short Version)</span>} key="3">
                                        <Alert closable message={
                                            <div>
                                                <p>Before you start...</p>
                                                <ul>
                                                    <li>* Take a photo or scan your Senior High School report card. The <b>grades as of first semester</b>
should be in the card. Have the image file ready for uploading later.</li>
                                                    <li>* Take a selfie photo of yourself following the <b>Photo ID requirements Guide</b>. Locate the image
file of your photo and resize following the image resizer guide.</li>
                                                    <li>* Check that you have a valid email address in the format <b>firstname.lastname@gmail.com</b>. If
                                                    your current email address does not comply with the required format, create a new one
                                                    using either Gmail or Yahoo. Note: <b>Use of non-complying email will result in the failure of
your application</b>.</li>
                                                </ul>
                                            </div>
                                        } />
                                        <List
                                            style={{ marginTop: '2rem' }}
                                            footer={<small className="text-gray-500">Reference: <a href="https://www.facebook.com/wvsufb/posts/10157048013876196">https://www.facebook.com/wvsufb/posts/10157048013876196</a></small>}
                                            bordered
                                            dataSource={summarizedGuidelines}
                                            renderItem={(item: any, key: number) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar style={{ backgroundColor: '#3C5A9A' }}>{key + 1}</Avatar>}
                                                        description={<span className={theme === 'base' ? 'text-black' : 'text-white'}>{item}</span>}
                                                    />
                                                </List.Item>
                                            )}
                                        />
                                        <p>
                                            <Button type="primary" target="_blank" className="my-4 mx-2" href="http://iuis.wvsu.edu.ph/aims/applicants/">Open the IUIS Online Application</Button>
                                            <Button target="_blank" className="my-4 mx-2" href="https://drive.google.com/file/d/1dU__ilymFLMgFoWybHxU-yW6OIwLQOUF/view">Open the IUIS Online Application Manual</Button>
                                        </p>
                                    </TabPane>
                                    <TabPane tab={<span className={theme === 'base' ? 'text-black' : 'text-white'}>FAQs</span>} key="5">
                                        <Collapse defaultActiveKey={['0']} >
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
                    <SocialSection themeState={theme} />
                    <Footerbar themeState={theme} />
                </Layout>
            </Layout>
        </>
    )
}
