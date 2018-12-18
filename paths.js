

import { resolve } from 'path';
import { realpathSync } from 'fs';
import { parse } from 'url';

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } 
    return path;
  
}

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

export const dotenv = resolveApp('.env');
export const appBuild = resolveApp('dist');
export const appPublic = resolveApp('public');
export const appHtml = resolveApp('public/index.html');
export const appIndexJs = resolveApp('src/index.js');
export const appPackageJson = resolveApp('package.json');
export const appSrc = resolveApp('src');
export const yarnLockFile = resolveApp('yarn.lock');
export const appNodeModules = resolveApp('node_modules');
export const publicUrl = getPublicUrl(resolveApp('package.json'));
export const servedPath = getServedPath(resolveApp('package.json'));