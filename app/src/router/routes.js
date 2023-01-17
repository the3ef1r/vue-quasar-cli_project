const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'main-page', path: '', component: () => import('pages/main'), props: true,
      },
    ],
  },
  {
    path: '/form',
    component: () => import('layouts/RootLayout.vue'),
    children: [
      {
        name: 'form-page', path: '', component: () => import('pages/form'), props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
