import React from 'react';
import { Layout } from 'antd';
import MealList from './pages/MealList';
import './App.css';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '13x 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 10 }}>
            <MealList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Abc da cozinha ©2020</Footer>
      </Layout>
    </>
  );
}

export default App;
