// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Notes on the Starter',
  siteDescription: 'A small page for notes on the sourdough starter',
  titleTemplate: 'Notes on the Starter',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './src/content/notes',
        path: '*.md',
        pathPrefix: '/note',
        typeName: 'Note'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      externalLinksTarget: '_blank'
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        use: [require('nib')(), require('rupture')()],
        import: ['~nib/lib/nib/index.styl']
      }
    }
  }
}
