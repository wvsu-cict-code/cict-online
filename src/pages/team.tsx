import { Card, Divider, Input, Layout, Tabs, Tag } from 'antd';
import Footerbar from 'components/Footerbar';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import SocialSection from 'components/SocialSection';
import { filter, upperCase } from 'lodash';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import useFuse from 'use-fuse';
import alipe from '../assets/team/alipe.png';
import cabacas from '../assets/team/cabacas.png';
import cervantes from '../assets/team/cervantes.png';
import concepcion from '../assets/team/concepcion.png';
import dayot from '../assets/team/dayot.png';
import decastro from '../assets/team/decastro.png';
import dofitas from '../assets/team/dofitas.jpg';
import dumpit from '../assets/team/dumpit.png';
import elijorde from '../assets/team/elijorde.png';
import feliprada from '../assets/team/feliprada.png';
import ferrer from '../assets/team/ferrer.png';
import figueroa from '../assets/team/figueroa.jpg';
import gabawa from '../assets/team/gabawa.jpg';
import gantala from '../assets/team/gantala.jpg';
import gerardo from '../assets/team/gerardo.jpg';
import madalogdog from '../assets/team/madalogdog.png';
import osorio from '../assets/team/osorio.png';
import sabayle from '../assets/team/sabayle.png';
import sandig from '../assets/team/sandig.png';
import sansolis from '../assets/team/sansolis.jpg';
import secondes from '../assets/team/secondes.png';
import sequijo from '../assets/team/sequijo.png';
import solidarios from '../assets/team/solidarios.jpg';
import subong from '../assets/team/subong.png';
import sumido from '../assets/team/sumido.jpg';
import ygot from '../assets/team/ygot.png';
import ReactTypingEffect from '../components/ReactTypingEffect';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';
import sanityClient from '../config/sanityClient'


const { Content } = Layout;


const { TabPane } = Tabs;

const team: {
	name: string;
	description: string;
	position: string[];
	education: string[];
	avatar: any;
	type: string;
	tags: string[];
	specialization: string[];
	advisory: string[]
}[] = [
		{
			name: "Dr. Ma.Beth S. Concepcion",
			description: "Bio Here",
			position: ["College Dean", "Associate Professor III"],
			education: ["Doctor in Information Technology", "Master of Science in Information Management, BS Info Management"],
			avatar: concepcion,
			type: "faculty",
			tags: ["dean", "is", "admin"],
			specialization: ["Open Data Processing", "Systems Development", "Multimedia Systems"],
			advisory: ['is 3a'],
		},
		{
			name: "Dr. Frank I. Elijorde",
			description: "Bio Here",
			position: ["Associate Dean", "Associate Professor IV"],
			education: ["Doctor in Information & Knowledge Engineering", "Master of Science in Computer Science"],
			avatar: elijorde,
			type: "faculty",
			tags: ["cs"],
			specialization: ["Knowledge Engineering", "Computer Vision", "Artificial Neural Networks", "C++ Programming"],
			advisory: ['cs 2a'],
		},
		{
			name: "Dr. Arnel N. Secondes",
			description: "",
			position: ["College Secretary", "College Quality Assurance Coordinator", "Assistant Professor III"],
			education: ["Doctor in Industrial Technology", "Master of Science in Computer Science"],
			avatar: secondes,
			type: "faculty",
			tags: ["cs"],
			specialization: ["Software Engineering", "Information Management", "System Analysis"],
			advisory: ['cs 1a'],
		},
		{
			name: "Prof. Cyreneo Dofitas Jr.",
			description: "",
			position: ["Division Chair, Information Tech", "DRMM Coordinator", "Associate Professor I"],
			education: ["Master of Science in Computer Science"],
			avatar: dofitas,
			type: "faculty",
			tags: ["it"],
			specialization: [".NET Applications Development", "Micro Controllers", "Assistive Technologies"],
			advisory: ['it 1a', 'it 3a'],
		},
		{
			name: "Dr. Ma. Luche P. Sabayle",
			description: "",
			position: ["Department Head, CS", "CHED & ISO Liaison Officer", "Instructor I"],
			education: ["Doctor in Industrial Technology", "Master of Computer Science"],
			avatar: sabayle,
			type: "faculty",
			tags: ["is"],
			specialization: ["Mathematics", "Java Programming"],
			advisory: ['cs 1b'],
		},
		{
			name: "Mr. Evan Sumido",
			description: "",
			position: ["Department Head, EMC", "Coordinator, Network Security", "Instructor I"],
			education: ["Doctor in Information Technology (on-going)", "Master in Engineering"],
			avatar: sumido,
			type: "faculty",
			tags: ["emc"],
			specialization: ["Unity Game Development", "Multimedia Technologies", "C++ Programming", "Java Programming", "C# Programming", "MikroTik Networking Tools"],
			advisory: ['emc 1a', 'emc 3a'],
		},
		{
			name: "Dr. Bobby D. Gerardo",
			description: "",
			position: ["Graduate Studies Coordinator", "Professor VI"],
			education: ["Doctor in Information & Knowledge Engineering", "Master of Science in Mathematics"],
			avatar: gerardo,
			type: "faculty",
			tags: ["it"],
			specialization: ["Knowledge Engineering", "Cyber Security", "Systems Development", "Smart Engineering Solutions", "Algorithms"],
			advisory: ['cs 3a'],
		},
		{
			name: "Dr. Joel T. De Castro",
			description: "",
			position: ["GTBI Head", "Professor VI"],
			education: ["Doctor in Industrial Technology", "Master of Science in Computer Science"],
			avatar: decastro,
			type: "faculty",
			tags: ["is"],
			specialization: ["System Management", "IoT Research", "Business Analytics"],
			advisory: ['cs 2b'],
		},
		{
			name: "Karen Alinor J. Dumpit",
			description: "",
			position: ["Assistant Prof IV"],
			education: ["Master of Arts in Mathematics"],
			avatar: dumpit,
			type: "faculty",
			tags: ["emc"],
			specialization: ["2D Animation", "Traditional Art", "Logic Design"],
			advisory: ['emc 2a'],
		},
		{
			name: "Mr. Evans B. Sansolis",
			description: "",
			position: ["Computer Lab Supervisor", "Instructor I"],
			education: ["Doctor in Management (on-going)", "Master in Information Technology"],
			avatar: sansolis,
			type: "",
			tags: ["it"],
			specialization: ["Micro Controllers", "IoT Devices", "Smart Systems"],
			advisory: ['it 2a'],
		},
		{
			name: "Engr. Lea Marcon - Gabawa",
			description: "",
			position: ["Assistant Professor III"],
			education: ["PhD in Education major in Curriculum Development (on-going)", "Master in Engineering"],
			avatar: gabawa,
			type: "faculty",
			tags: ["it"],
			specialization: ["Curriculum Development", "Micro Controllers", "CISCO & MikroTik Networking Tools", "Electronics Engineering", "Logic Design"],
			advisory: ['it 3b'],
		},
		{
			name: "Dr. Cheryll Anne Feliprada",
			description: "",
			position: ["Extension Coordinator","College Guidance Coordinator", "Instructor I"],
			education: ["Doctor in Educational Management", "Master in Engineering"],
			avatar: feliprada,
			type: "faculty",
			tags: ["guidances","it"],
			specialization: ["ICT Skills Enhancement", "Networking"],
			advisory: ['it 1b'],
		},
		{
			name: "Dr. Regin A. Cabacas",
			description: "",
			position: ["Department Head, IS","College Alumni Coordinator", "Assistant Professor IV"],
			education: ["Doctor of Engineering", "Master of Engineering"],
			avatar: cabacas,
			type: "faculty",
			tags: ["it"],
			specialization: ["Delay Tolerant Networks", "Wireless Sensor Networks", "Vehicular Ad-hoc Networks", "Blockchain"],
			advisory: ['is 1a'],
		},
		{
			name: "Engr. Erwin Osorio",
			description: "",
			position: ["Network Supervisor", "Assistant Prof"],
			education: ["Master in Information Technology"],
			avatar: osorio,
			type: "faculty",
			tags: ["is"],
			specialization: ["ICT Skills Enhancement", "Electrical Engineering", "Networking"],
			advisory: ['is 2b'],
		},
		{
			name: "Paul Marlou Subong",
			description: "",
			position: ["Instructor I"],
			education: ["Master in Information Technology"],
			avatar: subong,
			type: "faculty",
			tags: ["it"],
			specialization: ["Programming"],
			advisory: ['it 2b'],
		},
		{
			name: "Ralph Voltaire Dayot",
			description: "",
			position: ["Instructor I"],
			education: ["Master in Information Technology", "Doctor in Information & Knowledge Engineering (on-going)"],
			avatar: dayot,
			type: "faculty",
			tags: ["it"],
			specialization: ["Knowledge Engineering", "Systems Development", "C++ & Python Programming"],
			advisory: [],
		},
		{
			name: "Shem Durst Elijah B. Sandig",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master of Science in Information Technology"],
			avatar: sandig,
			type: "faculty",
			tags: ["is"],
			specialization: ["Open Data Processing", "UX Design", "Data Analytics", "Information Management", "MySQL Database Development", "Linux Proficiency"],
			advisory: ["isa 2a"],
		},
		{
			name: "Mark Joseph J. Solidarios",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master of Science in Computer Science (on-going)"],
			avatar: solidarios,
			type: "faculty",
			tags: ["emc"],
			specialization: ["3D Graphics", "Open-Source Technologies", "App and Games Development", "Linux Proficiency"],
			advisory: [],
		},
		{
			name: "John Rey Alipe",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master of Science in Computer Science"],
			avatar: alipe,
			type: "faculty",
			tags: ["cs"],
			specialization: ["Systems Development", "Micro Controllers", "Java Programming", "Game Development", "Software Engineering"],
			advisory: ['cs 3a'],
		},
		{
			name: "Remegio S. Soqueño II",
			description: "",
			position: ["Part-time Instructor"],
			education: ["Master of Science in Computer Science (on-going)"],
			avatar: sequijo,
			type: "faculty",
			tags: ["emc"],
			specialization: ["Multimedia Systems", "Web App Development"],
			advisory: ['emc 1a'],
		},
		{
			name: "Mr. Louie F. Cervantes",
			description: "",
			position: ["Director, University MIS", "IT Officer II", "Lecturer"],
			education: ["Master of information and Knowledge Engineering"],
			avatar: cervantes,
			type: "faculty",
			tags: ["it", "cs"],
			specialization: ["Information Engineering", "Distributed Systems", "Artificial Intelligence"],
			advisory: [],
		},
		{
			name: "Ms. Elra Madalogdog",
			description: "",
			position: ["University Library Officer"],
			education: ["Master in Library and Information Science"],
			avatar: madalogdog,
			type: "faculty",
			tags: ["admin", "blis"],
			specialization: ["Library and Information Science"],
			advisory: ['blis 1a', 'blis 2a'],
		},
		{
			name: "Felizardo Ygot Jr.",
			description: "",
			position: ["Laboratory Custodian"],
			education: [],
			avatar: ygot,
			type: "staff",
			tags: ["admin", "staff"],
			specialization: [],
			advisory: [],
		},
		{
			name: "Russel Laurence Ferrer",
			description: "",
			position: ["Assistant Laboratory Custodian"],
			education: [],
			avatar: ferrer,
			type: "staff",
			tags: ["admin", "staff"],
			specialization: [],
			advisory: [],
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
			advisory: [],
		},
		{
			name: "Genebem Gantala",
			description: "",
			position: ["Office Staff, Graduate School"],
			avatar: gantala,
			education: [],
			type: "staff",
			tags: ["admin", "staff"],
			specialization: [],
			advisory: [],
		}
	]

const fuseOptions = {
	// isCaseSensitive: false,
	// includeScore: false,
	// shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	// threshold: 0.6,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	keys: [
		"name",
		"advisory"
	]
};

export default () => {
	const [theme, setTheme] = useState(DEFAULT_THEME);
	const [list] = useState(filter(team, o => o.advisory.length > 0))
	const [search, setSearch] = useState('')
	const filteredList = useFuse(list, search, fuseOptions)

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	useEffect(()=>{
		sanityClient.fetch(`*[type == post]`).then(res=>console.log(res))
	})



	const themeModeHandler = () => (theme === 'base' ? setTheme('dark') : setTheme('base'));

	return (
		<>
			<SEO
				title="WVSU CICT | Faculty and Staff"
				description="Get to know your college professors and staffs."
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
								<p>Get to know our college professors and staff.</p>
								<Tabs defaultActiveKey="1">
									<TabPane tab={<span className={`${theme !== 'base' && 'text-white'}`}>Class Advisers</span>} key="1">
										<div className="p-4">
											<Input.Search value={search} onChange={e => setSearch(e.target.value)} placeholder="Search a section or faculty" />
										</div>
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
												{(search ? filteredList : list).map((i: any) => (
													<Card className="card-component" style={{ backgroundColor: theme === 'base' ? '#fff' : '#111', border: "none" }}>

														<img src={i.item ? i.item.avatar : i.avatar} className="rounded-full mb-8 w-24 h-24" />
														<Card.Meta title={<span className={`${theme !== 'base' && 'text-white'}`}>{i.item ? i.item.name : i.name}</span>} description={
															<>
																<p className={`${theme !== 'base' && 'text-gray-600'} mb-2`}>{i.position && i.position.join(', ')}</p>
															</>
														} />
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															{i.item ? i.item.education : i.education && i.item ? i.item.education : i.education.join(', ')}
														</p>
														<Divider orientation="left"><small className="text-gray-500">Advisory</small></Divider>
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															<span>
																{
																	i.item ? i.item.advisory.map((m: string) => <Tag color="magenta">{upperCase(m)}</Tag>) :
																		i.advisory.map((m: string) => <Tag color="magenta">{upperCase(m)}</Tag>)
																}</span>
														</p>
													</Card>
												)
												)}
											</Masonry>
										</div>
									</TabPane>
									<TabPane tab={<span className={`${theme !== 'base' && 'text-white'}`}>All Faculty and Staff</span>} key="2">
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
													<Card className="card-component" style={{ backgroundColor: theme === 'base' ? '#fff' : '#111', border: "none" }}>
														<img src={i.avatar} className="rounded-full mb-8 w-24 h-24" />
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
														{i.specialization.length > 0 && <Divider orientation="left"><small className="text-gray-500">{`Specialization${i.specialization.length === 1 ? '' : 's'}`}</small></Divider>}
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															{i.specialization.map(l => <Tag style={{ marginBottom: '0.5rem' }} color="blue">{l}</Tag>)}
														</p>
													</Card>
												))}
											</Masonry>
										</div>
									</TabPane>
								</Tabs>

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
