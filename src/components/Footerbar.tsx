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
                        CICT Online ©2020 by CICTzens | <Link target="_blank" to="https://github.com/wvsu-cict-code/cict-online">Contribute to Code</Link> | <Link to="https://spectrum.chat/cict-online" target="_blank">Join in Spectrum</Link>
                    </span>
                    <p className="mt-2">
                        <Link to="https://wvsu.edu.ph/" target="_blank">West Visayas State University</Link>
                    </p>
                </div>
            </Footer>
        </>
    )
)
export default Footerbar