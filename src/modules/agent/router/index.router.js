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
    }]
}, ]