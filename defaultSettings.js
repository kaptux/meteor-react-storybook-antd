module.exports = {
  navTheme: 'dark', // theme for nav menu
  primaryColor: '#1890FF', // primary color of ant design
  layout: 'sidemenu', // nav menu position: sidemenu or topmenu
  contentWidth: 'Fluid', // layout of content: Fluid or Fixed, only works when layout is topmenu
  fixedHeader: false, // sticky header
  autoHideHeader: false, // auto hide header
  fixSiderbar: false, // sticky siderbar
  menu: {
    disableLocal: false,
  },
  menuData: [
    {
      key: 'activity',
      icon: 'thunderbolt',
      name: 'Activity',
      path: '/Dashboard/Activity',
    },
    { key: 'lists', icon: 'ordered-list', name: 'Lists', path: '/Page1' },
    { key: 'resources', icon: 'database', name: 'Resources', path: '/Page2' },
  ],
  title: 'Challenge',
  pwa: false,
  // Your custom iconfont Symbol script Url
  // eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js
  // Usage: https://github.com/ant-design/ant-design-pro/pull/3517
  iconfontUrl: '',
};
