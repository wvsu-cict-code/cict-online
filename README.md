# CICT Online
> Source code of the CICT official website.

[![GitHub version](https://badge.fury.io/gh/wvsu-cict-code%2Fcict-online.svg)](https://badge.fury.io/gh/wvsu-cict-code%2Fcict-online)

## CICTzens!
Help us develop our website! If you found a bug or you want to contribute, please submit an [issue](https://help.github.com/articles/creating-an-issue/), contact the faculty or email your concern at [cict@wvsu.edu.ph](cict@wvsu.edu.ph). Student contributions are welcome!

## Building
> The build process will require you to use a GitHub account and knowledge of using Git. Please visit this [git tutorial](https://try.github.io/levels/1/challenges/1) to learn more.

### Prerequisites
> The following tools and systems are needed to test and deploy the website. Please search the unfamiliar terms in Google.

  * **ruby** - a dynamic, reflective, object-oriented, general-purpose programming language.
  * **jekyll** - simple, blog-aware, static site generator.
  * **node.js** - a JavaScript runtime.
  * **bower** - a package manager for the web.
  * **gulp** - build system.

### Your First Build

1. Clone the repo using Git:
```
git clone https://github.com/wvsu-cict-code/cict-online.git
```

1. Go to the repository directory
```
cd cict-online
```

1. Install the dependencies.
```
npm install
```

1. Run the build system. The output will be available inside the ```_site``` directory.
```
gulp
```

## Testing
> Test the website.

### Local Server
1. Edit the configuration file ```_config.yml```.
1. Make sure that the url value is 127.0.0.1:8081.
1. Test the site on a local server.
```
gulp serve
```

## Deploying
> Make it available online.

1. Edit the gulp file ```gulpfile.js```
1. Look for ```gulp.task( 'deploy'...``` code block.
1. Provide the ftp username and password in the connection settings. **Note:** The ftp username and password are only given to privileged users.
1. Deploy the website using gulp.
```
gulp deploy
```

## License
&copy; 2016, College of Information and Communications Technology, West Visayas State University. Licensed under an [Apache-2](https://github.com/wvsu-cict-code/cict-online/blob/master/LICENSE) license.
