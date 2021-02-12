export default [
    {
        path: '',
        component: require('../components/Layouts/AppLayout').default,
        meta: {public: true},
        children: [
            {path: '', component: require('../components/Common/IndexPage').default},
        ]
    },
    {path: '*', redirect: '/'}
];
