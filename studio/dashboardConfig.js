export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62a755dcfd9c4100bc2f0e6f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-29zqyxwd',
                  apiId: '281fd758-fbcf-4737-8014-9884bb9a2002'
                },
                {
                  buildHookId: '62a755dd20401260bcf5bb03',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3k7o73fe',
                  apiId: '3864f2aa-9424-4a56-9378-41e465c9ed1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dusted/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3k7o73fe.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
