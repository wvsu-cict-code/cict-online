const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const ghead = require('gulp-header');
const fs = require('fs');

const siteRoot = '_site';
const cssFiles = '_css/**/*.?(s)css';
const pkg = require('./package.json');

// gulp.task('css', () => {
//   gulp.src(cssFiles)
//     .pipe(concat('all.css'))
//     .pipe(gulp.dest('css'));
// });


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

//Add documentation header
gulp.task('header', () => {
  gulp.src('_site/index.html')
    .pipe(ghead(fs.readFileSync('_includes/doc.html', 'utf8'), { pkg : pkg }))
    .pipe(gulp.dest('_site/'))
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 8081,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task('default', ['jekyll', 'header', 'serve']);
