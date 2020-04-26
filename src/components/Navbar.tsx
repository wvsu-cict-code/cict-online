import { MenuOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';
import { Button, Drawer, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import BrandIcon from '../assets/brand.svg';

const { Header } = Layout;

const Navbar: React.FC = () => {
    let [collapsed, toggleMenu] = useState(false)
    return (
        <div className="border-1 border-gray-200">
            <Header className="w-full">
                <div className="container mx-auto">
                    <Link to="/"><div className="brand-icon" style={{ backgroundImage: `url(${BrandIcon})` }} /></Link>
                    <Menu mode="horizontal" defaultSelectedKeys={['1']} className="navbar" >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Button href="/applynow" type="primary">Apply to CICT</Button>
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
                <Menu defaultSelectedKeys={['3']} >
                    <Menu.Item key="1"><Button href="/applynow" className="w-full" type="primary"><span className="text-white">Apply to CICT</span></Button></Menu.Item>
                </Menu>
            </Drawer>
        </div>
    )
}

export default Navbar