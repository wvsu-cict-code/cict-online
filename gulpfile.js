const child = require('child_process');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const concat = require('gulp-concat');
const distCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const pump = require('pump');
const gutil = require('gulp-util');
const ghead = require('gulp-header');
const clean = require('del');
const fs = require('fs');
const pkg = require('./package.json');
const runSequence = require('run-sequence');

var siteRoot = '_site';
var siteDist = '_site/';
var cssDist = 'css/';
var jsDist = 'js/';
var cssFiles = 'cssjs_src/css/**/*.?(s)css';
var jsFiles = 'cssjs_src/js/**/*.js';


gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// Clean
gulp.task('clean', () => {
  return clean(['_site/**/*'])
});

// Process css
gulp.task('css', (cb) => {
  pump([
      gulp.src(cssFiles),
      concat('styles.min.css'),
      distCSS({compatibility: 'ie8'}),
      ghead(fs.readFileSync('_includes/doc.css', 'utf8'), { pkg : pkg }),
      gulp.dest(cssDist)
    ],cb)
});

// Process js
gulp.task('js', (cb) => {
  pump([
        gulp.src(jsFiles),
        uglify(),
        rename('main.min.js'),
        ghead(fs.readFileSync('_includes/doc.css', 'utf8'), { pkg : pkg }),
        gulp.dest(jsDist)
    ],cb
  );
});

//Add documentation headers
gulp.task('document_html', () => {
  return gulp.src('_site/index.html')
    .pipe(ghead(fs.readFileSync('_includes/doc.html', 'utf8'), { pkg : pkg }))
    .pipe(gulp.dest(siteDist));
});

//Combine documentation tasks
gulp.task('docs',[
  'document_html',
  'css',
  'js'
  ]);

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 8081,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('default', () => {
  runSequence('clean', ['jekyll','docs','serve'])
});
