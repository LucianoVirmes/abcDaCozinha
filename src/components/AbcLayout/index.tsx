import React, { FunctionComponent } from 'react';
import './style.css';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;


const AbcLayout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '13x 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Abc da cozinha ©2020</Footer>
            </Layout>
        </>
    )
}

export default AbcLayout;
