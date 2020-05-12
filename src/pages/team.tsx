import React, { useState, useEffect } from 'react'
import SEO from 'components/SEO'
import { Layout, Card } from 'antd'
import Navbar from 'components/Navbar'
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes'
import { applyTheme } from '../themes/utils'
import Masonry from 'react-masonry-css';

const { Content } = Layout;

const team = [
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
	},
	{
		name: "",
		description: "",
		position: "",
		avatar: "",
		type: "",
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
        title="WVSU CICT | Faculty and Staff"
        description="Official website of the College of ICT."
        url="https://cictwvsu.com/"
        image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image-2.jpg"
        twitterUsername="cictwvsu"
      />
      <Layout className="layout">
        <Layout>
          <Navbar showApplication={false} themeState={theme} themeModeHandler={themeModeHandler} defaultSelected={['1']} />
          <Content className="layout p-0 px-8">
            <div className="container mx-auto">
              <div className="my-4">
                <span className="text-3xl"><ReactTypingEffect speed={100} eraseDelay={5000} typingDelay={200} text='cout << "Nice to Meet You!";'></ReactTypingEffect></span>
                <p>Get to know your college professors and staffs.</p>
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
                    <Card className="card-component">
                      <Card.Meta title="Dr. Arnel N. Secondes" description={
                        <>

                          <p>College Secretary</p>
                        </>
                      } />
                      <p>
                        Netlify CMS Lead. Really trying to never write server code ever again. Except maybe Functions-as-a-service, those are cool.
                          </p>
                    </Card>
                  </Masonry>  
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
