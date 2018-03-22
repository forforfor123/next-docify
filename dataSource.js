export default [{
  title: '首页',
  id: 'home',
  href: '/',
}, {
  title: '功能和服务',
  id: 'services',
  href: '/',
  header1: '地图六大功能和服务',
  display: 'default',
  children: [{
    title: '定位',
    href: '#',
  }, {
    title: '地图',
    href: '#',
  }, {
    title: '出行',
    href: '#',
  }, {
    title: '轨迹',
    href: '#',
  }, {
    title: '数据',
    href: '#',
  }, {
    title: '分析',
    href: '#',
  }]
}, {
  title: '解决方案',
  id: 'solution',
  href: '/',
  header1: '各行各业都在用图聚地图',
  header2: '提供丰富的行业解决方案，结合核心场景快速接入地图能力',
  display: 'default',
  children: [{
    title: '共享出行',
    href: '#',
  }, {
    title: '上门服务',
    href: '#',
  }, {
    title: '智慧交通',
    href: '#',
  }, {
    title: '快递物流',
    href: '#',
  }, {
    title: '房产行业',
    href: '#',
  }, {
    title: '商业地理',
    href: '#',
  }]
}, {
  title: '开发文档',
  id: 'docs',
  href: '/',
  header1: '开发文档',
  header2: '查询开发文档',
  display: 'nested',
  children: [{
    title: 'Web开发',
    children: [{
     title: 'JavaScript API',
     href: './template',
    }, {
      title: '微信小程序JavaScript API',
      href: './template',
    }]
  }, {
    title: 'Android开发',
    children: [{
      title: 'Android地图开发',
      href: '/docs?title=android-sdk',
    }, {
      title: 'Android定位SDK',
      href: '/docs?title=android-sdk',
    }, {
      title: 'Android鹰眼轨迹SDK',
      href: '/docs?title=android-sdk',
    }, {
      title: 'Android导航SDK',
      href: '/docs?title=android-sdk',
    }, {
      title: 'Android全景SDK',
      href: '/docs?title=android-sdk',
    }]
  }, {
    title: 'iOS开发',
    children: [{
      title: 'iOS地图开发',
      href: '/docs/ios-sdk',
    }, {
      title: 'iOS定位SDK',
      href: '/docs/ios-sdk',
    }, {
      title: 'iOS鹰眼轨迹SDK',
      href: '/docs/ios-sdk',
    }, {
      title: 'iOS导航SDK',
      href: '/docs/ios-sdk',
    }, {
      title: 'iOS全景SDK',
      href: '/docs/ios-sdk',
    }]
  }, {
    title: '服务接口',
    children: [{
      title: 'LBS云',
      href: './template',
    }, {
      title: '鹰眼轨迹服务',
      href: './template',
    }, {
      title: 'Web服务API',
      href: './template',
    }, {
      title: '地图调用API',
      href: './template',
    }]
  }, {
    title: '工具支持',
    children: [{
      title: '数据管理平台',
      href: './template',
    }, {
      title: '鹰眼轨迹管理台',
      href: './template',
    }]
  }]
}, {
  title: '合作咨询',
  id: 'consultance',
  href: '/',
}, {
  title: '控制台',
  id: 'console',
  href: '/',
}];
