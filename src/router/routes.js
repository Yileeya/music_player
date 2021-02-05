export default [
    {
        path: '',
        component: require('../components/HelloWorld').default,
        meta: {public: true},
        children: [
            // {path: '', component: require('../components/Bulletin/HomePage').default},
        ]
    },
    {path: '*', redirect: '/'}
];
