import axios from 'axios'
import path from 'path'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const {
      data: posts
    } /* :{ data: Post[] } */ = await axios.get(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cictwvsu'
    )
    return [{
      path: '/',
      getData: () => ({
        posts,
      }),
      children: posts.items.map((post /* : Post */ ) => ({
        path: `/post/${post.id}`,
        template: 'src/containers/Post',
        getData: () => ({
          post,
        }),
      })),
    }, ]
  },
  plugins: [
    'react-static-plugin-typescript',
    ['react-static-plugin-less',
      {
        javascriptEnabled: true,
      }
    ],
    ['css-loaders-plugin', {
      purgecss: false // enable when publishing
    }],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}