import { Alert, Button, Card, Col, Divider, Grid, Layout, Row } from 'antd';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import SocialSection from 'components/SocialSection';
import { filter } from 'lodash';
import React from 'react';
import { ExternalLink } from 'react-feather';
import Masonry from 'react-masonry-css';
import Slider from "react-slick";
import { useRouteData } from 'react-static';
import TimeAgo from 'react-timeago';
import { Post } from 'types';
import '../app.less';
import BLISIcon from '../assets/blis-icon.svg';
import CSIcon from '../assets/cs-icon.svg';
import EMCIcon from '../assets/emc-icon.svg';
import ICTGraphics from '../assets/ict.svg';
import ISIcon from '../assets/is-icon.svg';
import ITIcon from '../assets/it-icon.svg';
import CICTLogo from '../assets/logo.svg';
import MITIcon from '../assets/msit-icon.svg';
import Footerbar from '../components/Footerbar';
import ReactTypingEffect from '../components/ReactTypingEffect';

const { Content } = Layout;

const { useBreakpoint } = Grid

const programs = [
  {
    id: "it",
    name: "Information Technology",
    icon: ITIcon,
    description: "Study, analyze, design, develop, implement, and evaluate ICT solutions. "
  },
  {
    id: "is",
    name: "Information Systems",
    icon: ISIcon,
    description: "Design and implementation of solutions that integrate information technology with business processes. "
  },
  {
    id: "cs",
    name: "Computer Science",
    icon: CSIcon,
    description: "Designing, writing and developing computer programs and computer networks."
  },
  {
    id: "blis",
    name: "Library and Information Science",
    icon: BLISIcon,
    description: "Management of library operations, the systematic organization, conservation, preservation and restoration of books, historical and cultural documents and other intellectual properties."
  },
  {
    id: "emc",
    name: "Entertainment and Multimedia Computing",
    icon: EMCIcon,
    description: "Computing in the design and development of multimedia products and solutions. "
  },
  {
    id: "mit",
    name: "Masters in Information Technology",
    icon: MITIcon,
    description: "Advanced computing subjects, or move into a new IT specialisation. "
  },

]

function createMarkup(content: string) { return { __html: content } }

const fbvideostring = '<iframe class="mx-auto" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcictwvsu%2Fvideos%2F358272304557481%2F&show_text=false&width=734&appId=2302291186701393&height=411" width="734" height="411" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>'

const Arrow = (props: any) => {
  const { className, style, onClick, symbol } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {symbol}
    </div>
  );
}

const slickSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  nextArrow: <Arrow symbol=">" />,
  prevArrow: <Arrow symbol="<" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Public: any = () => {
  const screens = useBreakpoint()
  const breakpoints = Object.entries(screens)
    .filter(screen => !!screen[1])
    .map(screen => screen[0])
  const { posts }: { posts: any } = useRouteData()
  return (
    <div>
      <div>
        <SEO
          title="WVSU CICT - Home"
          description="Official website of the College of ICT."
          url="https://cictwvsu.com/"
          image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image-1.jpg"
          twitterUsername="cictwvsu"
        />
        <Layout className="layout">
          <Layout>
            <Navbar showApplication={true} defaultSelected={['1']} />
            <Content className="bg-white p-0 px-8">
              <div>
                <div className="w-full">
                  <div className="billboard">
                    <div className="container mx-auto billboard-greeting">
                      <Row>
                        <Col span={breakpoints.includes('md') ? 12 : 24}>
                          <div className="billboard-greeting-text">
                            <span className="text-lg">Your Future with Technology</span>
                            <span className="billboard-header">{"~$"}<ReactTypingEffect speed={100} eraseDelay={3000} typingDelay={200} text="echo 'Hello World!'"></ReactTypingEffect></span>
                            <span className="font-normal text-lg">
                              West Visayas State University College of ICT continues the <b>tradition of excellence</b> through <b>quality education</b>, <b>innovative ICT researches</b>, and <b>extension services</b> to various stakeholders.
                          </span>
                            <Divider />
                            <Alert showIcon message={<span>*Application for admission for 1<sup>st</sup> Semester SY 2020-2021 is now open!<br /></span>} />
                            <Button href="/applynow" className={breakpoints.includes('md') ? "mt-4 w-64" : "mt-4 w-full"} type="primary" size="large">Apply Now for Admission</Button>
                          </div>
                        </Col>
                        <Col span={breakpoints.includes('md') ? 12 : 24}>
                          <img src={ICTGraphics} className="img-billboard mx-auto mt-8" />
                        </Col>
                      </Row>

                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="container mx-auto py-8">
                    <h2 className="text-center text-4xl">Courses Offered</h2>
                    <p className="max-w-lg mx-auto text-center font-normal text-lg">Choose your Foundation.</p>
                    <div className="px-8">
                      <Slider {...slickSettings}>
                        {programs.map(i => (
                          <div key={i.id} className="w-32 mx-auto">
                            <img className="mx-auto h-40" src={i.icon} alt="" />
                            <p className="text-center text-lg mx-auto" style={{ maxWidth: '180px' }}>{i.name}</p>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="container mx-auto py-8">
                    <h2 className="text-center text-4xl">News and Updates</h2>
                    <p className="max-w-lg mx-auto text-center font-normal text-lg mb-4">Discover CICT stories, studies and much more.</p>
                    <Masonry
                      breakpointCols={{
                        default: 4,
                        1100: 3,
                        700: 2,
                        500: 1
                      }}
                      className="my-masonry-grid"
                      columnClassName="my-masonry-grid_column">
                      {posts && filter(posts.items, (post: Post) => post.categories.length > 0).slice(0, 4).map((post: Post) => (
                        <Card key={post.guid} actions={[
                          <a key="1" href={post.link} target="_blank"><span className="flex w-40 mx-auto"><span className="mx-auto">Read this Story</span><span><ExternalLink className="ml-4" key="link" /></span></span></a>,
                        ]} style={{ width: '290px', margin: '0 auto', marginBottom: '30px' }} cover={<div className="h-64 w-full bg-center no-repeat bg-cover" style={{ backgroundImage: `url(${post.thumbnail})` }} />}>
                          <Card.Meta title={post.title} description={<TimeAgo date={post.pubDate} />}></Card.Meta>
                        </Card>
                      ))}
                    </Masonry>

                  </div>
                </div>
                <div className="w-full">
                  <div className="container mx-auto py-8">
                    <img src={CICTLogo} className="w-40 h-40 mx-auto my-4" alt="CICT Logo" />
                    <h2 className="text-center text-4xl">Upholding the Tradition of Excellence</h2>

                    <div dangerouslySetInnerHTML={createMarkup(fbvideostring)}></div>
                    <p className="max-w-lg mx-auto text-center font-normal text-lg">Information and Communications Technology has penetrated the core of societal and individual lives. Its development is changing the course of all other technologies. ICT has now become less of a choice and more of a requirement for individuals and societies concerned with competitiveness in the international arena.</p>
                  </div>
                </div>
              </div>
            </Content>
            <SocialSection />
            <Footerbar />
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

export default Public