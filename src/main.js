// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// importing global css
import 'sanitize.css'
import '~/styles/index.styl'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Gaegu:wght@400&family=Nunito:ital,wght@0,200;0,300;0,700;1,300;1,700&display=swap'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}