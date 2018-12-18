const Purgecss = require('purgecss')
const fs = require('fs')

const purgecss = new Purgecss({
  content: ['./dist/**/*.html', './src/**/*.js', './dist/templates/src/pages/*.js', './*.js', './node_modules/antd/lib/**.js'],
  css: ['./dist/*.css'],
  whitelist: ['body', 'html'],
  extractors: [
    {
      extractor: class {
        static extract (content) {
          return content.match(/[A-z0-9-:\/]+/g)
        }
      },
      extensions: ['html', 'js'],
    },
  ],
})
const purgecssResult = purgecss.purge()

Object.keys(purgecssResult).map(i => fs.writeFile(purgecssResult[i].file, purgecssResult[i].css, err => console.log(err)))