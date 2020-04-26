import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const Footerbar: React.FC = () => (
    (
        <Footer style={{ backgroundColor: '#fff' }}>
            <div className="w-full text-center">
                <span className="font-normal text-gray-500">
                    CICT Online ©2020 by CICTzens
                  </span>
            </div>
        </Footer>
    )
)
export default Footerbar