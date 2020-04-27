import React from 'react';
import { Layout, Divider } from 'antd';
import { Link } from '@reach/router';
const { Footer } = Layout;

const Footerbar: React.FC = () => (
    (
        <>
        <Footer style={{ backgroundColor: '#fff' }}>
        <Divider />
            <div className="w-full text-center">
                <span className="font-normal text-gray-700">
                    CICT Online ©2020 by CICTzens | <Link target="_blank" to="https://github.com/wvsu-cict-code/cict-online">Contribute to Code</Link> | <Link to="https://spectrum.chat/cict-online" target="_blank">Join in Spectrum</Link>
                </span>
            </div>
        </Footer>
        </>
    )
)
export default Footerbar