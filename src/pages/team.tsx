import React, { useState, useEffect } from 'react'
import SEO from 'components/SEO'
import { Layout, Card, Tag, Divider } from 'antd'
import Navbar from 'components/Navbar'
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes'
import { applyTheme } from '../themes/utils'
import Masonry from 'react-masonry-css';

import concepcion from '../assets/team/concepcion.png'
import elijorde from '../assets/team/elijorde.png'
import secondes from '../assets/team/secondes.png'
import dofitas from '../assets/team/dofitas.jpg'
import sabayle from '../assets/team/sabayle.png'
import sumido from '../assets/team/sumido.jpg'
import dayot from '../assets/team/dayot.png'
import gerardo from '../assets/team/gerardo.jpg'
import decastro from '../assets/team/decastro.png'
import dumpit from '../assets/team/dumpit.png'
import sansolis from '../assets/team/sansolis.jpg'
import feliprada from '../assets/team/feliprada.jpg'
import gabawa from '../assets/team/gabawa.jpg'
import cabacas from '../assets/team/cabacas.png'
import osorio from '../assets/team/osorio.png'
import subong from '../assets/team/subong.png'
import sandig from '../assets/team/sandig.png'
import solidarios from '../assets/team/solidarios.jpg'
import alipe from '../assets/team/alipe.png'
import sequijo from '../assets/team/sequijo.png'
import cervantes from '../assets/team/cervantes.png'
import ygot from '../assets/team/ygot.png'
import ferrer from '../assets/team/ferrer.png'
import figueroa from '../assets/team/figueroa.jpg'
import gantala from '../assets/team/gantala.jpg'
import SocialSection from 'components/SocialSection';
import Footerbar from 'components/Footerbar';

const { Content } = Layout;


const team: {
	name: string;
	description: string;
	position: string[];
	education: string[];
	avatar: any;
	type: string;
	tags: string[];
	specialization: string[];
}[] = [
		{
			name: "Dr. Ma.Beth S. Concepcion",
			description: "Bio Here",
			position: ["College Dean", "Associate Professor III"],
			education: ["Doctor in Information Technology", "Master of Science in Information Management, BS Info Management"],
			avatar: concepcion,
			type: "faculty",
			tags: ["dean", "is", "admin"],
			specialization: ["Open Data Processing", "Systems Development", "Multimedia Systems"]
		},
		{
			name: "Dr. Frank I. Elijorde",
			description: "Bio Here",
			position: ["Associate Dean", "Division Chair, Computer Science", "Associate Professor IV"],
			education: ["Doctor in Information & Knowledge Engineering", "Master of Science in Computer Science"],
			avatar: elijorde,
			type: "faculty",
			tags: ["cs"],
			specialization: ["Knowledge Engineering", "Computer Vision", "Artificial Neural Networks", "C++ Programming"]
		},
		{
			name: "Dr. Arnel N. Secondes",
			description: "",
			position: ["College Secretary", "College Quality Assurance Coordinator", "Instructor I"],
			education: ["Doctor in Industrial Technology", "Master of Science in Computer Science"],
			avatar: secondes,
			type: "faculty",
			tags: ["cs"],
			specialization: ["Software Engineering", "Information Management", "System Analysis"]
		},
		{
			name: "Prof. Cyreneo Dofitas Jr.",
			description: "",
			position: ["Division Chair, Information Tech", "DRMM Coordinator", "Associate Professor I"],
			education: ["Master of Science in Computer Science"],
			avatar: dofitas,
			type: "faculty",
			tags: ["it"],
			specialization: [".NET Applications Development", "Micro Controllers", "Assistive Technologies"]
		},
		{
			name: "Dr. Luche M. Sabayle",
			description: "",
			position: ["Department Head, IS", "CHED & ISO Liaison Officer", "Instructor I"],
			education: ["Doctor in Industrial Technology", "Master of Science in Computer Science"],
			avatar: sabayle,
			type: "faculty",
			tags: ["is"],
			specialization: ["Mathematics", "Java Programming"]
		},
		{
			name: "Mr. Evan Sumido",
			description: "",
			position: ["Department Head, EMC", "Coordinator, Network Security", "Instructor I"],
			education: ["Doctor in Information Technology (on-going)", "Master in Engineering"],
			avatar: sumido,
			type: "faculty",
			tags: ["emc"],
			specialization: ["Unity Game Development", "Multimedia", "C++ Programming", "MikroTik Networking Tools"]
		},
		{
			name: "Dr. Bobby D. Gerardo",
			description: "",
			position: ["Graduate Studies Coordinator", "Professor VI"],
			education: ["Doctor in Information & Knowledge Engineering", "Master of Science in Mathematics"],
			avatar: gerardo,
			type: "faculty",
			tags: ["it"],
			specialization: ["Knowledge Engineering", "Cyber Security", "Systems Development", "Smart Engineering Solutions", "Algorithms"]
		},
		{
			name: "Dr. Joel T. De Castro",
			description: "",
			position: ["GTBI Head", "Professor VI"],
			education: ["Doctor in Industrial Technology", "Master of Science in Computer Science"],
			avatar: decastro,
			type: "faculty",
			tags: ["is"],
			specialization: ["System Management", "IoT Research", "Business Analytics"]
		},
		{
			name: "Prof. Karen Alinor Dumpit",
			description: "",
			position: ["Assistant Prof."],
			education: ["Master in Math,"],
			avatar: dumpit,
			type: "faculty",
			tags: ["emc"],
			specialization: ["2D Animation", "Traditional Art", "Logic Design"]
		},
		{
			name: "Mr. Evans B. Sansolis",
			description: "",
			position: ["Computer Lab Supervisor", "Instructor I"],
			education: ["Doctor in Management (on-going)", "Master in Information Technology"],
			avatar: sansolis,
			type: "",
			tags: ["it"],
			specialization: ["Micro Controllers", "IoT Devices", "Smart Systems"]
		},
		{
			name: "Engr. Lea Marcon - Gabawa",
			description: "",
			position: ["College Guidance  Coordinator", "Assistant Professor III"],
			education: ["PhD in Education major in Curriculum Development (on-going)", "Master in Engineering"],
			avatar: gabawa,
			type: "faculty",
			tags: ["it"],
			specialization: ["Curriculum Development", "Micro Controllers", "CISCO & MikroTik Networking Tools"]
		},
		{
			name: "Dr. Cheryll Anne Feliprada",
			description: "",
			position: ["Extension Coordinator", "Instructor I"],
			education: ["Doctor in Educational Management", "Master in Engineering"],
			avatar: feliprada,
			type: "faculty",
			tags: ["it"],
			specialization: ["ICT Skills Enhancement", "Networking"]
		},
		{
			name: "Dr. Regin A. Cabacas",
			description: "",
			position: ["College Alumni Coordinator", "Assistant Professor IV"],
			education: ["Doctor of Engineering", "Master of Engineering"],
			avatar: cabacas,
			type: "faculty",
			tags: ["it"],
			specialization: ["Delay Tolerant Networks", "Wireless Sensor Networks", "Vehicular Ad-hoc Networks", "Blockchain"]
		},
		{
			name: "Engr. Erwin Osorio",
			description: "",
			position: ["Network Supervisor", "Assistant Prof"],
			education: ["Master in Information Technology"],
			avatar: osorio,
			type: "faculty",
			tags: ["is"],
			specialization: ["ICT Skills Enhancement", "Electrical Engineering", "Networking"]
		},
		{
			name: "Paul Marlou Subong",
			description: "",
			position: ["Instructor I"],
			education: ["Master in Information Technology"],
			avatar: subong,
			type: "faculty",
			tags: ["it"],
			specialization: ["Programming"]
		},
		{
			name: "Ralph Voltaire Dayot",
			description: "",
			position: ["Instructor I"],
			education: ["Master in Information Technology", "Doctor in Information & Knowledge Engineering (on-going)"],
			avatar: dayot,
			type: "faculty",
			tags: ["it"],
			specialization: ["Knowledge Engineering", "Systems Development", "C++ & Python Programming"]
		},
		{
			name: "Shem Durst Elijah B. Sandig",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master in Information Technology-Management"],
			avatar: sandig,
			type: "faculty",
			tags: ["is"],
			specialization: ["Open Data Processing", "UX Design", "Data Analytics", "Information Management", "MySQL Database Development", "Linux Proficiency"]
		},
		{
			name: "Mark Joseph J. Solidarios",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master of Science in Computer Science (on-going)"],
			avatar: solidarios,
			type: "faculty",
			tags: ["emc"],
			specialization: ["3D Graphics", "Open-Source Technologies", "App and Games Development", "Linux Proficiency"]
		},
		{
			name: "John Rey Alipe",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master of Science in Computer Science"],
			avatar: alipe,
			type: "faculty",
			tags: ["cs"],
			specialization: ["Systems Development", "Micro Controllers", "Java Programming", "Game Development", "Software Engineering"]
		},
		{
			name: "Remegio S. Soqueño II",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master of Science in Computer Science (on-going)"],
			avatar: sequijo,
			type: "faculty",
			tags: ["emc"],
			specialization: ["Multimedia Systems", "Web App Development"]
		},
		{
			name: "Mr. Louie F. Cervantes",
			description: "",
			position: ["Director, University MIS", , "IT Officer II", "Lecturer"],
			education: ["BS Information Technology"],
			avatar: cervantes,
			type: "faculty",
			tags: ["it", "cs"],
			specialization: ["Information Engineering", "Distributed Systems", "Artificial Intelligence"]
		},
		{
			name: "Felizardo Ygot Jr.",
			description: "",
			position: ["Laboratory Custodian"],
			education: [],
			avatar: ygot,
			type: "staff",
			tags: ["admin", "staff"],
			specialization: []
		},
		{
			name: "Russel Laurence Ferrer",
			description: "",
			position: ["Assistant Laboratory Custodian"],
			education: [],
			avatar: ferrer,
			type: "staff",
			tags: ["admin", "staff"],
			specialization: []
		},
		{
			name: "Marian Figueroa",
			description: "",
			position: ["College Clerk"],
			avatar: figueroa,
			education: [],
			type: "staff",
			tags: ["admin", "staff"],
			specialization: [],
		},
		{
			name: "Genebem Gantala",
			description: "",
			position: ["Office Staff, Graduate School"],
			avatar: gantala,
			education: [],
			type: "staff",
			tags: ["admin", "staff"],
			specialization: []
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
							<div className={`my-4 ${theme !== 'base' && 'text-white'}`}>
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
										{team.map(i => (
											<Card className="card-component" style={{ backgroundColor: theme === 'base' ? '#fff' : '#000', border: "none" }}>
												<img src={i.avatar} className="w-20 h-20 rounded-full mb-8" />
										<Card.Meta title={<span className={`${theme !== 'base' && 'text-white'}`}>{i.name}</span>} description={
													<>
														<p className={`${theme !== 'base' && 'text-gray-600'} mb-2`}>{i.position && i.position.join(', ')}</p>
													</>
												} />
												<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
													{i.education && i.education.join(', ')}
												</p>
												<Divider orientation="left"><small className="text-gray-500">Department/Functions</small></Divider>
												<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
													{i.tags.map(k => <Tag color="orange">{k.toUpperCase()}</Tag>)}
												</p>
												{i.specialization.length > 1 && <Divider orientation="left"><small className="text-gray-500">Specializations</small></Divider>}
												<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
													{i.specialization.map(l => <Tag style={{ marginBottom: '0.5rem' }} color="blue">{l}</Tag>)}
												</p>
											</Card>
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
