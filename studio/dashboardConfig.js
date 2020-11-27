export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc0c83099a34e57d7692909',
                  title: 'Sanity Studio',
                  name: 'sanity-2-studio',
                  apiId: '18ec3da6-da98-4936-975a-e6a08a3d3fe9'
                },
                {
                  buildHookId: '5fc0c830b5d07ea228d86a21',
                  title: 'Landing pages Website',
                  name: 'sanity-2',
                  apiId: 'dc8a0815-f7e2-417e-b7e2-17f89efc6a68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OstapKlin/sanity2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
