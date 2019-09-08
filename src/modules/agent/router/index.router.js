export default [{
    path: '',
    component: 'layout/index',
    name: 'dashboard',
    meta: {
        title: 'DASHBOARD',
        icon: 'icon-dashboard',
        type: "menu",
        hidden: false,
    },
    children: [{
        path: '/dashboard',
        component: 'modules/dashboard/views/index',
        name: 'dashboardIndex',
        meta: { title: 'DASHBOARD', icon: 'icon-dashboard', type: "menu", hidden: false }
    }, {
        path: '/agent',
        component: 'modules/agent/views/index',
        name: 'agentIndex',
        meta: { title: 'AGENT', icon: 'icon-sitemap', type: "menu", hidden: false }
    }, {
        path: '/cruise',
        component: 'modules/cruise/views/index',
        name: 'cruiseIndex',
        meta: { title: 'MY CRUISE', icon: 'icon-coffee', type: "menu", hidden: false }
    }, {
        path: '/help',
        component: 'modules/help/views/index',
        name: 'helpIndex',
        meta: { title: 'HELP', icon: 'icon-life-bouy', type: "menu", hidden: false }
    }]
}, ]