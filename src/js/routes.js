import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';

import LeftPage1 from '../pages/left-page-1.vue';
import LeftPage2 from '../pages/left-page-2.vue';
import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';
import tao from '../pages/tao.vue';
import myPublish from '../pages/myPublish.vue';
import add from '../pages/add';
import map from '../pages/map'
import visitIndex from '../pages/visit/visitIndex'
import visitMyPublish from '../pages/visit/visitMyPublish'
import visitAdd from '../pages/visit/visitAdd'
import visitMyGuide from '../pages/visit/visitMyGuide'
import visitSchoolTour from '../pages/visit/visitSchoolTour'
import visitTourGuides from '../pages/visit/visitTourGuides'
import visitGuideDetail from '../pages/visit/visitGuideDetail'
import visitModify from '../pages/visit/visitModify'
import interestIndex from '../pages/intersetGroop/intersetIndex'
import intersetGroopFind from '../pages/intersetGroop/intersetGroopFind'
import intersetGroopManage from '../pages/intersetGroop/intersetGroopManage'
import intersetMyGroop from '../pages/intersetGroop/intersetMyGroop'
import intersetGroupAdd from '../pages/intersetGroop/intersetGroopAdd'
import intersetGroopApplicant from '../pages/intersetGroop/intersetGroopApplicant'
import interestGroopInside from '../pages/intersetGroop/interestGroopInside'

var routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/form/',
        component: FormPage,
    },

    {
        path: '/left-page-1/',
        component: LeftPage1,
    },
    {
        path: '/left-page-2/',
        component: LeftPage2,
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '/request-and-load/user/:userId/',
        async: function (routeTo, routeFrom, resolve, reject) {
            // Router instance
            var router = this;

            // App instance
            var app = router.app;

            // Show Preloader
            app.preloader.show();

            // User ID from request
            var userId = routeTo.params.userId;

            // Simulate Ajax Request
            setTimeout(function () {
                // We got user data from request
                var user = {
                    firstName: 'Vladimir',
                    lastName: 'Kharlampidi',
                    about: 'Hello, i am creator of Framework7! Hope you like it!',
                    links: [
                        {
                            title: 'Framework7 Website',
                            url: 'http://framework7.io',
                        },
                        {
                            title: 'Framework7 Forum',
                            url: 'http://forum.framework7.io',
                        },
                    ]
                };
                // Hide Preloader
                app.preloader.hide();

                // Resolve route to load page
                resolve(
                    {
                        component: RequestAndLoad,
                    },
                    {
                        context: {
                            user: user,
                        }
                    }
                );
            }, 1000);
        },
    },
    {
        path: '/request-and-load/tao/',
        component: tao,
    },
    {
        path: '/request-and-load/myPublish/',
        component: myPublish,
    },
    {
        path: '/request-and-load/add/',
        component: add,
    },
    {
        path: '/request-and-load/map/',
        component: map,
    },
     {
        path: '/interestIndex/',
        component: interestIndex,
         routes:[
             {
                path:'intersetGroopFind/',
                 component:intersetGroopFind,
             },
             {
                 path:'intersetGroopManage/',
                 component:intersetGroopManage,
                 routes:[
                     {
                         path:'intersetGroupAdd/',
                         component:intersetGroupAdd,

                     },
                     {
                         path:'intersetGroopApplicant/',
                         component:intersetGroopApplicant,
                     }
                 ]
             },
             {
                 path:'intersetMyGroop/',
                 component:intersetMyGroop,
                 routes:[
                     {
                         path:'interestGroopInside/',
                         component:interestGroopInside,
                     }
                 ]
             }
         ]
    },
    {
        path: '/visitIndex/',
        component: visitIndex,
        routes: [
            {
                path:'visitMyPublish/',
                component:visitMyPublish,
                routes: [
                    {
                        path:'visitAdd/',
                        component:visitAdd,
                        name:'visitAdd',
                    },
                    {
                        path:'visitModify/:goodId/',
                        component:visitModify,
                        name:'visitModify',
                    },

                ]
            },
            {
                path:'visitMyGuide/',
                component:visitMyGuide,
                routes: [
                    {
                        path:'visitSchoolTour/',
                        component:visitSchoolTour,
                    }

                ]
            },
            {
                path:'visitTourGuides/',
                component:visitTourGuides,
                routes: [
                    {
                        path:'visitGuideDetail/',
                        component:visitGuideDetail,
                    }

                ]
            },
        ],

    },

    {
        path: '(.*)',
        component: NotFoundPage,
    },

];

export default routes;
