import { MenuOutlined, HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Link, navigate } from '@reach/router';
import { Button, Drawer, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import BrandIcon from '../assets/brand.svg';

const { Header } = Layout;

const Navbar: React.FC<{
    showApplication?: boolean,
    defaultSelected?: any
}> = (props) => {
    let [collapsed, toggleMenu] = useState(false)
    const { defaultSelected, showApplication } = props
    return (
        <div className="border-1 border-gray-200">
            <Header className="w-full">
                <div className="container mx-auto">
                    <Link to="/"><div className="brand-icon" style={{ backgroundImage: `url(${BrandIcon})` }} /></Link>
                    <Menu mode="horizontal" defaultSelectedKeys={defaultSelected ? defaultSelected : []} className="navbar" >
                        <Menu.Item onClick={() => navigate('/')} key="1"><HomeOutlined /></Menu.Item>
                        <Menu.Item onClick={() => navigate('https://medium.com/cictwvsu-online/our-story-87a461c14ab')} key="2"><QuestionCircleOutlined /></Menu.Item>
                        {showApplication && <Button href="/applynow" type="primary">Admission Form</Button>}
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
                    {showApplication && <Menu.Item key="1"><Button href="/applynow" className="w-full" type="primary"><span className="text-white">Admission Form</span></Button></Menu.Item>}
                </Menu>
            </Drawer>
        </div>
    )
}

export default Navbar