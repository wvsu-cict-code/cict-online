import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import tailwindcss from 'tailwindcss';

export default {
  webpack: (config, { stage, defaultLoaders }) => {
    let loaders = [
      {
        loader: 'css-loader',
        options: {
          minimize: stage !== 'dev',
          sourceMap: stage === 'dev',
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebookincubator/create-react-app/issues/2677
          sourceMap: true,
          ident: 'postcss',
          plugins: () => [
            postcssFlexbugsFixes,
            tailwindcss(path.resolve(__dirname, './tailwind.config.js')),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9', // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009',
            }),            
          ],
        },
      },
    ]

    if (stage === 'dev') {
      loaders = ['style-loader'].concat(loaders)
    } else if (stage === 'prod') {
      loaders = ExtractTextPlugin.extract({
        fallback: {
          loader: 'style-loader',
          options: {
            sourceMap: false,
            hmr: false,
          },
        },
        use: loaders,
      })
    }

    config.module.rules = [
      {
        oneOf: [
          defaultLoaders.jsLoader,
          {
            test: /\.css$/,
            use: loaders,
          },
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
  getRoutes: async () =>
    [
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        path: '/geek-mode',
        component: 'src/pages/GeekMode'
      },
      {
        path: '/faculty-staff',
        component: 'src/pages/FacultyStaff'
      },
      {
        path: '/alumni',
        component: 'src/pages/Alumni'
      },
      {
        path: '/homecoming2019',
        component: 'src/pages/Homecoming2019'
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ],
}
