    // A page that does not require permission verification, such as a landing page
    export default [{
            path: '/',
            redirect:'/agent'
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/modules/errorPage/views/404')
        },
        {
            path: '/redirect:path*',
            component: () =>
                import ('@/modules/tool/views/redirect'),
            name: 'redirect',
            meta: { model:'redirect',title: 'redirect' }
        },
    ]