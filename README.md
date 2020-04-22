# CICT Online
> Source code of the CICT official website.

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

## CICTzens!
Help us develop our website! If you found a bug or you want to contribute, please submit an [issue](https://help.github.com/articles/creating-an-issue/), contact the faculty or email your concern at [cict@wvsu.edu.ph](mailto:cict@wvsu.edu.ph). Student contributions are welcome!

## Contributing to its Development

### Design
If you are a UI/UX designer, you may help us by improving the base design or proposing your own. Any design tool is accepted. To view the proposed design aka **CICT Next**, please check this Figma [link](https://www.figma.com/file/vgB1dLsVDOISTApGFk50qs/CICT-Next?node-id=0%3A1). You may also [email the maintainer](mailto:mjsolidarios@wvsu.edu.ph) to gain editing access to the design.
<br />
![cict-next](/docs/cict-next.jpg "CICT Next")
* Illustrators are also welcome! You can create drawings that can be utilized for our page. We are still composing the guidelines for the illustrations but you may post an [issue](https://help.github.com/articles/creating-an-issue/) for early submissions. Currently, the illustrations are added by kit-bashing assets from free online illustration providers (e.g.[Undraw](https://undraw.co/), [ManyPixels](https://www.manypixels.co), etc...).
* For animators, we are using the Lottie [animation library](https://airbnb.io/lottie). 
![cict-lottie](/docs/ae-lottie.png "Animation")

### Code
Contributing to the code may require you to use a GitHub account and knowledge of using Git. Please visit this [git tutorial](https://try.github.io/levels/1/challenges/1) to learn more.
<br />
* This website follows the [JAMstack architecture](https://jamstack.org) focusing on ReactJS as the UI framework. By using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

* To begin, head on to the [issues tab](https://github.com/wvsu-cict-code/cict-online/issues) and look for a task that you want to help.
* Fork the base code and resolve the issue.
* Submit a pull request and await for approval.

### Content
You can also help build our website in other ways like submitting articles, spelling / grammar fixes, white space and formatting changes. You may [post an issue](https://github.com/wvsu-cict-code/cict-online/issues) for your intent to contribute.


## Todo
- [x] Redesign the landing page.
- [ ] Add Light and Dark mode.
- [ ] Add After Effects animation to the line arts utilizing Lottie.
- [x] Improve page responsiveness.
- [ ] About Page Design
- [ ] Students Page (Student's Works) Design
- [ ] Admission Page Design for Applicants
- [ ] Faculty & Staff Page Design
- [ ] CICT Online Forms and Registration    
- [ ] Code Cleanup
- [ ] Tools and Resources Page
- [x] Omni Updates Section (Medium Blog, Facebook, Twitter)
- [x] Footer Section
- [ ] Credits in About Page
- [ ] Integrate Tracer Study App
- [x] Use Ant Design UI
- [ ] Restore Faculty and Staff Page

## Milestones
- [ ] **Geek mode**: Implement a geeky way to browse the website [DOS Mode](http://kristopolous.github.io/BOOTSTRA.386/), [Terminal Mode](http://kristopolous.github.io/BOOTSTRA.386/) or [Window Mode](http://www.marianopascual.me/index.html#)
- [ ] Learning Management System / e-Class 
- [ ] Student/Alumni Support Page
- [ ] CICT Online Forum
- [ ] CICT Spotlight
- [ ] Matching, Placement and Career Support


## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [React Static CLI](https://github.com/react-static/react-static)

## Getting Started (Recommended)

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. The example here is the Kaldi coffee company template (adapted from [One Click Hugo CMS](https://github.com/netlify-templates/one-click-hugo-cms)). Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/gatsby-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run start
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ npm run serve
```

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Contributors
We specially want to recognize the following for helping us develop and maintain our website:
* WVSU MIS Office - Official University Subdomain
* CICT PTA - Domain and App Store Funding
* Regin C. Cabacas - Hosting & Domain Manager
* Shem Durst Elijah B. Sandig - Content Review
* ICON Publication - Content Management
* Link.exe - Photos & Videos
* Nouriel John Cariño - Official CICT Mascot
* Wilson Olivier C. Gazer - Volunteer Animator
* Nina Ricci Marie Benite - Code Contributor
* Anelie Decomotan - Code Contributor
* Mark Anthony Lumbao - Code Contributor

## License
&copy; 2016-Present, College of Information and Communications Technology, West Visayas State University. Licensed under an [Apache-2](https://github.com/wvsu-cict-code/cict-online/blob/master/LICENSE) license.

