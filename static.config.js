// import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () =>
    [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/admission',
        component: 'src/containers/Admission',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  ,
}
