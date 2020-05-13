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
		name: "Dr. Ma.Beth S. Concepcion",
		description: "Bio Here",
		position: ["College Dean", "College Alumni Coordinator", "Associate Professor I"],
		education: ["Doctor in Information Technology", "Master in Info Management, BS Info Management"],
		avatar: "",
		type: "faculty",
		tags: ["is", "admin"]
	},
	{
		name: "Dr. Frank I. Elijorde",
		description: "Bio Here",
		position: ["Associate Dean", "Division Chair, Computer Science", "Associate Professor IV"],
		education: ["Doctor in Information & Knowledge Eng.", "MS Computer Science"],
		avatar: "",
		type: "faculty",
		tags: ["cs"]
	},
	{
		name: "Dr. Arnel N. Secondes",
		description: "",
		position: ["College Secretary", "College Quality Assurance Coordinator", "Instructor I"],
		education: ["Doctor in Industrial Technology", "MS Computer Science"],
		avatar: "",
		type: "faculty",
		tags: ["cs"]
	},
	{
		name: "Prof. Cyreneo Dofitas Jr.",
		description: "",
		position: ["Division Chair, Information Tech", "DRMM Coordinator", "Associate Professor I"],
		education: ["MS Computer Science"],
		avatar: "",
		type: "faculty",
		tags: ["it"]
	},
	{
		name: "Dr. Luche M. Sabayle",
		description: "",
		position: ["Department Head, IS", "CHED & ISO Liaison Officer", "Instructor I"],
		education: ["Doctor in Industrial Technology", "MS Computer Science"],
		avatar: "",
		type: "faculty",
		tags: ["is"]
	},
	{
		name: "Mr. Evan Sumido",
		description: "",
		position: ["Department Head, EMC", "Coordinator, Network Security", "Instructor I"],
		education: ["Doctor in Information Technology (on-going)", "Master in Engineering"],
		avatar: "",
		type: "faculty",
		tags: ["emc"]
	},
	{
		name: "Dr. Bobby D. Gerardo",
		description: "",
		position: ["Graduate Studies Coordinator", "Professor VI"],
		education: ["Doctor in Information & Knowledge Engineering", "MS Mathematics"]
		avatar: "",
		type: "faculty",
		tags: ["it"]
	},
	{
		name: "Dr. Joel T. De Castro",
		description: "",
		position: ["Manager, GTBI","Professor VI"],
		education: ["Doctor in Industrial Technology","Masters in Computer Science"],
		avatar: "",
		type: "faculty",
		tags: ["is"]
	},	
	{
		name: "Prof. Karen Alinor Dumpit",
		description: "",
		position: ["Assistant Prof."],
		education: ["Master in Math,"],
		avatar: "",
		type: "faculty",
		tags: ["emc"]
	},
	{
		name: "Mr. Evans B. Sansolis",
		description: "",
		position: ["Computer Lab Supervisor", "Instructor I"],
		education: ["Doctor in Management (on-going)", "Master in Information Technology"]
		avatar: "",
		type: "",
		tags: ["it"]
	},
	{
		name: "Engr. Leah M. Gabawa",
		description: "",
		position: ["College Guidance  Coordinator","Instructor I"],
		education: ["Ph D in Curriculum and Instruction (on-going)", "MS Engineering"],
		avatar: "",
		type: "faculty",
		tags: ["it"]
	},
	{
		name: "Dr. Cheryll Anne Feliprada",
		description: "",
		position: ["Extension Coordinator", "Instructor I"],
		education: ["Doctor in Educational Management","Master in Engineering"],
		avatar: "",
		type: "faculty",
		tags: ["it"]
	},
	{
		name: "Dr. Regin C. Cabacas",
		description: "",
		position: ["Instructor I"],
		education: ["Doctor in Information & Knowledge Engineering", "Master in Information and Knowledge Eng."],
		avatar: "",
		type: "faculty",
		tags: ["it"]
	},
	{
		name: "Engr. Erwin Osorio",
		description: "",
		position: ["Network Supervisor", "Assistant Prof"],
		education: ["Master Information Technology"]
		avatar: "",
		type: "faculty",
		tags: ["is"]
	},
	{
		name: "Paul Marlou Subong",
		description: "",
		position: ["Instructor I"],
		education: ["Master Information Technology"]
		avatar: "",
		type: "faculty",
		tags: ["it"]
	},
	{
		name: "Shem Durst Elijah B. Sandig",
		description: "",
		position: ["Part-time Instructor"],
		education: ["Master in Information Technology-Management"],
		avatar: "",
		type: "faculty",
		tags: ["is"]
	},
	{
		name: "Mark Joseph J. Solidarios",
		description: "",
		position: ["Part-time Instructor"],
		education: ["Masters in Computer Science (on-going)"],
		avatar: "",
		type: "",
		tags: ["emc"]
	},
	{
		name: "John Rey Alipe",
		description: "",
		position: ["Part-time Instructor"],
		education: ["Masters in Computer Science"],
		avatar: "",
		type: "",
		tags: ["cs"]
	},
	{
		name: "Rem Sequijo",
		description: "",
		position: ["Part-time Instructor"],
		education: ["Masters in Computer Science (on-going)"],
		avatar: "",
		type: "",
		tags: ["emc"]
	},
	{
		name: "Mr. Louie F. Cervantes",
		description: "",
		position: ["Director, University MIS", "Lecturer"],
		education: ["BS Information Technology"]
		avatar: "",
		type: "",
		tags: ["it", "cs"]
	},
	{
		name: "Felizardo Ygot Jr.",
		description: "",
		position: ["Laboratory Custodian"],
		education: [],
		avatar: "",
		type: "staff",
		tags: ["admin"]
	},
	{
		name: "Russel Laurence Ferrer",
		description: "",
		position: ["Assistant Laboratory Custodian"],
		education: []
		avatar: "",
		type: "staff",
		tags: ["admin"]
	},
		{
		name: "Marian Figueroa",
		description: "",
		position: ["College Clerk"],
		avatar: "",
		type: "staff",
		tags: ["admin"]
	},
			{
		name: "Genebem Gantala",
		description: "",
		position: ["Office Staff, Graduate School"],
		avatar: "",
		type: "staff",
		tags: ["admin"]
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
                    {team.map(i=>(
					<Card className="card-component">
                      <Card.Meta title={i.name} description={
                        <>

                          <p>{i.position}</p>
                        </>
                      } />
                      <p>
                        Netlify CMS Lead. Really trying to never write server code ever again. Except maybe Functions-as-a-service, those are cool.
                          </p>
                    </Card>
                    	))}
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
