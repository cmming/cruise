export default [{
    path: '',
    component: 'layout/index',
    name: 'dashboard',
    meta: {
        title: 'dashboard',
        icon: 'dashboard',
        type: "menu",
        hidden: false,
    },
    children: [{
        path: '/dashboard',
        component: 'modules/dashboard/views/index',
        name: 'dashboardIndex',
        meta: { title: 'dashboard', icon: 'dashboard', type: "menu", hidden: false }
    },{
        path: '/agent',
        component: 'modules/agent/views/index',
        name: 'agentIndex',
        meta: { title: 'agent', icon: 'agent', type: "menu", hidden: false }
    }]
}, ]