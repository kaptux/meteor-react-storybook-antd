import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import Media from 'react-media';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';

import SiderMenu from '../components/SiderMenu';
import Header from './Header';
import Footer from '../components/Footer/Footer';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

import styles from './BasicLayout.less';

const logo = 'logo.svg';

const { Content } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

class App extends React.Component {
  state = { collapsed: false };

  getLayoutStyle = () => {
    const { fixSiderbar, isMobile, collapsed, layout } = this.props;
    if (fixSiderbar && layout !== 'topmenu' && !isMobile) {
      return {
        paddingLeft: collapsed ? '80px' : '256px',
      };
    }
    return null;
  };

  handleMenuCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { navTheme, layout: PropsLayout, isMobile, fixedHeader } = this.props;
    const { collapsed } = this.state;

    const isTop = PropsLayout === 'topmenu';
    const contentStyle = !fixedHeader ? { paddingTop: 0 } : {};
    const layout = (
      <Layout>
        {isTop && !isMobile ? null : (
          <SiderMenu
            logo={logo}
            theme={navTheme}
            onCollapse={this.handleMenuCollapse}
            menuData={[]}
            isMobile={isMobile}
            collapsed={collapsed}
            {...this.props}
          />
        )}
        <Layout
          style={{
            ...this.getLayoutStyle(),
            minHeight: '100vh',
          }}
        >
          <Header
            menuData={[]}
            handleMenuCollapse={this.handleMenuCollapse}
            logo={logo}
            isMobile={isMobile}
            theme={navTheme}
            collapsed={collapsed}
            {...this.props}
          />
          <Content className={styles.content} style={contentStyle}>
            <Switch>
              <Route exact path="/" component={Page1} />
              <Route exact path="/Page1" component={Page1} />
              <Route exact path="/Page2" component={Page2} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );

    return (
      <React.Fragment>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </React.Fragment>
    );
  }
}

export default props => (
  <Media query="(max-width: 599px)">
    {isMobile => <App {...props} isMobile={isMobile} />}
  </Media>
);
