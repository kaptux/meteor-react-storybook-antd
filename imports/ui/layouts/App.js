
import React from 'react';
import { Layout, Breadcrumb} from 'antd';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar'
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      menuOption: 1,
      menuCollapsed: false,
    };

    this.onCollapse = this.onCollapse.bind(this);
  }
  onCollapse(menuCollapsed) {
    this.setState({ menuCollapsed })
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={Page1}/>
                <Route exact path="/Page1" component={Page1}/>
                <Route exact path="/Page2" component={Page2}/>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
