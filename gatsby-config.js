module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {}
    }
  ],
  siteMetadata: {
    title: 'BInfo',
    description: 'Beace Info',
    siteUrl: 'https://beace.info',
    githubUrl: 'https://github.com/BeAce',
    logoUrl: 'https://imgs.beacelee.com/logo.jpg',
    showLanguageSwitcher: false,
    showAntVProductsCard: false,
    navs: [],
    docs: [],
    examples: [],
    showSearch: false, // 是否展示搜索框
    showChinaMirror: false, // 是否展示国内镜像链接
    showAntVProductsCard: false, // 是否展示 AntV 系列产品的卡片链接
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    playground: {
      container: '<div id="container" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");'
    },
    redirects: []
  }
};
