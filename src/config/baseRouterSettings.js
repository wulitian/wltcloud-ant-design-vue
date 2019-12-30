//基础路由
export const baseRouterMap = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld'),
  }
]
//异步路由
export const asyncRouterMap = [

  {
    path: '/',
    name: 'main',
    component: () => import('@/components/Main'),
    redirect: '/main/workplace',
    meta: { title: '首页' },
    children:[
      {
        path: '/main/workplace',
        name: 'workplace',
        component: () => import('@/components/Workplace'),
        meta: { title: '工作区' },
      }
    ]
  }
]
