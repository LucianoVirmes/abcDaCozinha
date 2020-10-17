import React, { FunctionComponent } from 'react';
import './style.css';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;


const AbcLayout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Layout style={{minHeight: "100vh"}}>
                <Header style={{height: "5.5vh"}} className="site-layout-sub-header-background" />
                <Content style={{ margin: '0 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 10, height: "calc: (100% - 70px)" }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', paddingTop: 30}}>Abc da cozinha ©2020</Footer>
            </Layout>
        </>
    )
}

export default AbcLayout;
