# MindRdr — a mock NLP app

MindRdr is a simple single-page application that leverages [MeaningCloud APIs](https://www.meaningcloud.com/developer/apis) to show the results of a textual analysis.

### This project showcases the following front-end dev skills:
 - Use of **Express** as a back-end framework 
 - Use of **Fetch API** for web requests
 - Use of **Webpack** module bundler as a build tool, in concert with the following plugins:
 - - **Babel**, to translate ES6 JavaScript into vanilla JS compatible with any browser
 - - **Loaders**, to translate **Sass** stylesheets into vanilla CSS
 - - **Minimizers**, to reduce file sizes of built assets for browser optimization
 - - **Webpack Dev Server**, to view live updates during development
 - - **dotenv**, to keep private information (like API keys) hidden from client view in production

## Contents

- [Project Requirements](#project-requirements)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Development Mode](#development-mode)
- [Known Issues / Debugging](#known-issues-/-debugging)


## Project Requirements
[(Back to top)](#contents)

This project was completed for the [Udacity Front End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011). 

Criteria are listed in this [rubric](https://review.udacity.com/#!/rubrics/3626/view).

## Dependencies
[(Back to top)](#contents)

To run this app, you'll need the following installed globally on your machine:
- [Node.js](https://nodejs.org/en/)
- [NPM](https://nodejs.org/en/)

Additional dependencies (build tools & plugins, all listed in [package.json](./package.json)) will be installed locally within the directory containing the project files.

## Installation
[(Back to top)](#contents)

1. Clone this repo into the directory of your choice:

```git clone https://github.com/neutralpearl/NLP_App.git```

2. From that directory, use the following command to initiate installation of each of the project dependencies listed in the package.json folder:

```npm install```

3. [Create a "Developer" account with MeaningCloud](https://www.meaningcloud.com/developer/login). MeaningCloud will then generate a license key you can use to access their APIs, which is listed under ["Your subscriptions"](https://www.meaningcloud.com/developer/account/subscriptions).

4. From the root folder for the project, create a new file named ".env". (Do not modify this filename!) In this new file, copy-paste the following, replacing the asterisks with your MeaningCloud API key.

```API_KEY=**************************```

3. Run the Express server by inputting this command into one terminal:

```npm run start```

The server will then start running on port 8081.

4. Open a 2nd terminal and build the production version of the app using this command;

```npm run build-prod```

5. View the live app

In a browser window (ideally in incognito mode), navigate to [http://localhost:8081](http://localhost:8081).

## Development Mode
[(Back to top)](#contents)

If you'd like to make adjustments to this project and see the impact of those changes in real time, first start the server with:

```npm run start```

...otherwise the app will not be able to fetch your stored API key from the server.

Then, enter this command in a 2nd terminal:

```npm run build-dev```

This will launch the app using Webpack Dev Server on port 8080. Navigate to [http://localhost:8080](http://localhost:8080) to view the app. 

Note that the dev server automatically reloads the app when changes are made to JS or CSS files within the project, but you will have to manually refresh the page in your browser to see any changes made to the src/client/views/index.html file.

## Known Issues / Debugging
[(Back to top)](#contents)

If using the Chrome browser, please open the app in an incognito window. Otherwise, you may see the following error in the console: *"ReferenceError: "process" is not defined*. This runtime error was introduced with [Webpack 5](https://webpack.js.org/migrate/5/#upgrade-webpack-to-5) — see section titled "Level 5: Runtime Errors" for troubleshooting advice, or see this related [Stack Overflow thread](https://stackoverflow.com/questions/41359504/webpack-bundle-js-uncaught-referenceerror-process-is-not-defined).
