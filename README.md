# reactandsass
Get to the fun part faster with this basic dev environment for React and Sass.

What's Included:
* Babel
** This environment is to be used with ES6.
** Set up with basic loader as well as a React loader.
* NPM
** Scripts: 'dev` runs your webpack-dev-server in hot mode, `commit` has webpack generate a bundle.js, `Git add` all changes to the staging area, and `Git commit` all changes.
** Remember to change pertinent information in package.json!
* Git
** Remember to go into ./.git/config and change the url to whatever it should be
* Webpack
** Entry is ./main.js, outputs to ./bundle.js
** Naturally, set to ignore node_modules
** ./css/master.sass is your default Sass file
** Only transpiles Sass with the .sass extension, but will work with normal CSS using .css just fine also
* React
** Default target div for Rendering is #app
** Sets you up with a Layout component and a Starter component with all the boilerplate you need to get going quickly
