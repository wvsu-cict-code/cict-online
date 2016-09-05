const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const distCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');
const gutil = require('gulp-util');
const ghead = require('gulp-header');
const clean = require('gulp-clean');
const fs = require('fs');

const siteRoot = '_site';
const cssFiles = 'css/**/*.?(s)css';
const jsFiles = 'js/*.js';
const pkg = require('./package.json');

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

// combine and clean all css files
gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(concat('styles.min.css'))
    .pipe(distCSS({compatibility: 'ie8'}))
    .pipe(ghead(fs.readFileSync('_includes/doc.css', 'utf8'), { pkg : pkg }))
    .pipe(gulp.dest('_site/css/'));
});

//combine and clean all js files
gulp.task('js', (cb) => {
  pump([
        gulp.src(jsFiles),
        uglify(),
        ghead(fs.readFileSync('_includes/doc.js', 'utf8'), { pkg : pkg }),
        gulp.dest('_site/js/')
    ],
    cb
  );
})

//Add documentation headers
gulp.task('document_html', () => {
  return gulp.src('_site/index.html')
    .pipe(ghead(fs.readFileSync('_includes/doc.html', 'utf8'), { pkg : pkg }))
    .pipe(gulp.dest('_site/'));
});

//Combine documentation tasks
gulp.task('code_docs',['document_html']);

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 8081,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('default', [
  'jekyll', 
  'css',
  'js',
  'code_docs', 
  'serve'
  ]);
