import React from 'react';
import { Layout, Divider } from 'antd';
import { Link } from '@reach/router';
const { Footer } = Layout;

interface themeProps {
    themeState: string
}

const Footerbar = (props: themeProps) => (
    (
        <>
            <Footer style={{ backgroundColor: props.themeState === 'base' ? '#FCFCFC' : '#000' }}>
                {props.themeState === 'base' && <Divider />}
                <div className="w-full text-center">
                    <span className={`font-normal ${props.themeState == 'base' ? 'text-gray-700' : 'text-gray-300'}`}>
                        CICT Online ©2020 by CICTzens | <Link to="/volunteers" target="_blank">Volunteers</Link>
                    </span>
                    <p className={`mt-2 ${props.themeState == 'base' ? 'text-gray-700' : 'text-gray-300'}`}>
                        <a href="https://wvsu.edu.ph/" target="_blank">West Visayas State University</a>
                    </p>
                </div>
            </Footer>
        </>
    )
)
export default Footerbar