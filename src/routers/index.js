
import List from '../container/connectApp'
import Home from '../component/Home'
import Topics from '../component/Topics'
import Content from '../component/Content'
import Alert from '../component/Alert'

const routes = [
    {
        path: '/',
        name: '首页',
        component: Home,
        children: [],
        exact: true
    },
    {
        path: '/list',
        name: '列表页',
        component: List,
        children: [],
        exact: false
    },
    {
        path: '/topics',
        name: 'Topics',
        component: Topics,
        children: [
            {
                path: '/rendering',
                name: 'rendering',
                component: Content,
            },
            {
                path: '/Components',
                name: 'Components',
                component: Content,
            }
        ],
        exact: false
    },
]

export default routes

export const otherRoutes = [
    {
        path: '/topics/:id',
        name: 'TopicsList',
        component: Content,
        children: [],
        exact: false
    },
]