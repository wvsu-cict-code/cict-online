import { HomeOutlined, MenuOutlined, QuestionCircleOutlined, FormOutlined } from '@ant-design/icons';
import { Link, navigate } from '@reach/router';
import { Button, Drawer, Layout, Menu, Badge, Tooltip } from 'antd';
import React, { useState } from 'react';
import BrandIconDark from '../assets/brand.svg';
import BrandIconLight from '../assets/brand-light.svg';
import { Sun, Moon } from "react-feather";

const { Header } = Layout;

const Navbar: React.FC<{
    showApplication?: boolean,
    defaultSelected?: any
    themeModeHandler?: () => void,
    themeState?: string,
}> = (props) => {
    let [collapsed, toggleMenu] = useState(false)
    const { defaultSelected, showApplication } = props
    return (
        <div className="border-1 border-gray-200">
            <Header className={`w-full ${props.themeState !== 'base' && 'navbar-dark'}`}>
                <div className="container mx-auto">
                    <Link to="/"><div className="brand-icon" style={{ backgroundImage: `url(${props.themeState === 'base' ? BrandIconDark : BrandIconLight})` }} /></Link>
                    <Menu theme={props.themeState === 'base' ? 'light' : 'dark'} mode="horizontal" defaultSelectedKeys={defaultSelected ? defaultSelected : []} className="navbar" >
                        <Menu.Item onClick={() => navigate('/')} key="1"><Tooltip title="Home"><HomeOutlined /></Tooltip></Menu.Item>
                        <Menu.Item onClick={() => props.themeModeHandler()} key="2"><Tooltip title="Switch Theme">{props.themeState === 'base' ? <Sun size={17} className="navbar-theme-icon" /> : <Moon size={17} className="navbar-theme-icon" />}</Tooltip></Menu.Item>
                        <Menu.Item onClick={() => navigate('https://medium.com/cictwvsu-online/our-story-87a461c14ab')} key="3"><Tooltip title="About CICT"><QuestionCircleOutlined /></Tooltip></Menu.Item>
                        {showApplication && <Menu.Item onClick={() => navigate('/applynow')} key="3"><Badge dot><Tooltip title="Online Application"><FormOutlined /></Tooltip></Badge></Menu.Item>}
                    </Menu>
                    <Button style={{ lineHeight: '10px' }} className="mobile-menu-button" icon={<MenuOutlined />} onClick={() => toggleMenu(collapsed = !collapsed)} />
                </div>
            </Header>
            <Drawer
                title="CICT Online"
                placement="right"
                closable
                onClose={() => toggleMenu(collapsed = !collapsed)}
                visible={collapsed}
            >
                <Menu defaultSelectedKeys={[]} >
                    <Menu.Item key="1" onClick={() => navigate("/")}>Home</Menu.Item>
                    <Menu.Item key="2" onClick={() => navigate("/admission")}>Admission Guide</Menu.Item>
                    <Menu.Item key="3" onClick={() => navigate("/team")}>Faculty and Staff</Menu.Item>
                    <Menu.Item key="4" onClick={() => navigate("https://medium.com/cictwvsu-online/our-story-87a461c14ab")}>About</Menu.Item>
                    <Menu.Item key="5" onClick={() => props.themeModeHandler()}>{`Switch to ${props.themeState === 'base' ? 'Dark' : 'Light'} Mode`}</Menu.Item>
                    {showApplication && <Menu.Item key="3" onClick={() => navigate('/applynow')}><Badge dot>Admission Form&nbsp;</Badge></Menu.Item>}
                </Menu>
            </Drawer>
        </div>
    )
}

export default Navbar