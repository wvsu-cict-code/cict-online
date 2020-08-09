import imageUrlBuilder from '@sanity/image-url';
import { Card, Divider, Input, Layout, Tabs, Tag } from 'antd';
import Footerbar from 'components/Footerbar';
import Navbar from 'components/Navbar';
import SEO from 'components/SEO';
import SocialSection from 'components/SocialSection';
import { upperCase, filter } from 'lodash';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import useFuse from 'use-fuse';
import ReactTypingEffect from '../components/ReactTypingEffect';
import sanityClient from '../config/sanityClient';
import { DEFAULT_THEME } from '../themes';
import { applyTheme } from '../themes/utils';


const { Content } = Layout;


const { TabPane } = Tabs;


const fuseOptions = {
	keys: [
		"name",
		"advisory"
	]
};

function urlFor(source: string) {
	return imageUrlBuilder(sanityClient).image(source)
}

export default () => {
	const [theme, setTheme] = useState(DEFAULT_THEME);
	const [list, setList] = useState([])
	const [search, setSearch] = useState('')
	const filteredList = useFuse(list, search, fuseOptions)

	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	useEffect(() => {
		sanityClient.fetch(`*[_type == "team"]`).then(res => {
			console.log(res)
			return setList(res)
		})
	}, [list])



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
												{(search ? filteredList : (filter(list, o => o.advisory)).reverse()).map((i: any) => (
													<Card className="card-component" style={{ backgroundColor: theme === 'base' ? '#fff' : '#111', border: "none" }}>

														<img src={urlFor(i.item ? i.item.avatar : i.avatar).url()} className="rounded-full mb-8 w-24 h-24" />
														<Card.Meta title={<span className={`${theme !== 'base' && 'text-white'}`}>{i.item ? i.item.name : i.name}</span>} description={
															<>
																<p className={`${theme !== 'base' && 'text-gray-600'} mb-2`}>{i.item ? i.item.position.join(', ') : i.position.join(', ')}</p>
															</>
														} />
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															{i.item ? (i.item.education && i.item.education.join(', ')) : i.education && i.education.join(', ')}
														</p>
														<Divider orientation="left"><small className="text-gray-500">Advisory</small></Divider>
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															<span>
																{
																	i.item ? i.item.advisory && i.item.advisory.map((m: string) => <Tag color="magenta">{upperCase(m)}</Tag>) :
																		i.advisory && i.advisory.map((m: string) => <Tag color="magenta">{upperCase(m)}</Tag>)
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
												{list && list.reverse().map(i => (
													<Card className="card-component" style={{ backgroundColor: theme === 'base' ? '#fff' : '#111', border: "none" }}>
														<img src={urlFor(i.avatar).url()} className="rounded-full mb-8 w-24 h-24" />
														<Card.Meta title={<span className={`${theme !== 'base' && 'text-white'}`}>{i.name}</span>} description={
															<>
																<p className={`${theme !== 'base' && 'text-gray-600'} mb-2`}>{i.item && i.item.position.join(', ')}</p>
															</>
														} />
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															{i.education && i.education.join(', ')}
														</p>
														<Divider orientation="left"><small className="text-gray-500">Department/Functions</small></Divider>
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															{i.tags.map((k: any) => <Tag color="orange">{k.toUpperCase()}</Tag>)}
														</p>
														{i.specialization && i.specialization.length > 0 && <Divider orientation="left"><small className="text-gray-500">{`Specialization${i.specialization.length === 1 ? '' : 's'}`}</small></Divider>}
														<p className={`${theme !== 'base' && 'text-white'} mb-2`}>
															{i.specialization && i.specialization.map((l: any) => <Tag style={{ marginBottom: '0.5rem' }} color="blue">{l}</Tag>)}
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
