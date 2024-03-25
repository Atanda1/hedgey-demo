import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '620'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fcc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '042'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'df0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'f76'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a0b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '40b'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'dc4'),
            routes: [
              {
                path: '/contracts/TokenVestingPlans',
                component: ComponentCreator('/contracts/TokenVestingPlans', '565'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'd5c'),
                exact: true,
                sidebar: "contractSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
