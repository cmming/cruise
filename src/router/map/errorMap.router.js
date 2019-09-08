// In the case of no match, 404 is returned, and the routes are matched in order from top to bottom. The last * can match all
export default [{
        path: '*',
        component: () =>
            import ('@/modules/errorPage/views/404')
    }

]