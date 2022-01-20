# Gatsby + ButterCMS Starter Project

<!-- Brackets [] are placeholders. When readme is complete, all brackets should be
updated with the correct value and comments deleted from the file. Please number
sections accordingly to move people through the process as cleanly as possible.-->

This Gatsby starter project fully integrates with dynamic sample content from your ButterCMS account, including main menu, pages, blog posts, categories, and tags, all with a beautiful, custom theme with already-implemented search functionality. All of the included sample content is automatically created in your account dashboard when you sign up for a free trial of ButterCMS.

<!-- If there is a live deployment/demo, e.g. vercel:
Live Demo: [link]
 -->

<!-- If there's a quick deployment method set up:
Once created, this project can be easily and quickly deployed to [location] from [method,
e.g., "the CLI" ] (see instructions below)
-->

## 1. Installation

First, clone the repo and install the dependencies by running `npm install`

```bash
git clone git@github.com:ButterCMS/gatsby-applifting.git gatsby-starter-buttercms

cd gatsby-starter-buttercms
npm install
```

### 2. Set API Token

To fetch your ButterCMS content, add your API token as an environment variable.

```bash
$ echo 'BUTTER_CMS_API_KEY=<Your API Token>' >> .env
```

<!-- Optional build step for frameworks that require a separate build
command, e.g., npm:

### Build App

Run the following command to the build the app and get it ready for running locally:

[command]
-->

### 3. Run local server

To view the app in the browser, you'll need to run the local development server:

```bash
npm run develop
```

Congratulations! Your starter project is now live.

<!-- Note - this example below was written with Vercel; please update instructions
to fit whatever quick deployment host was specified. Please
used button based deployment if available; see specifications documents to
links to button workflows-->
## 4. Deploy on [ host name ]

Deploy your [framework] app using [Vercel], the creators of Next.js. With the click of a button, you'll create a copy of your starter project in your Git provider account, instantly deploy it, and institute a full content workflow connected to your ButterCMS account. Smooth.

<!-- Here's an example of the Vercel Button. Note that the link is configured to
allow for a smooth and easy deployment, including necessary environmental variables.
For hosts that don't allow you to specify environmental variables in the button link,
make sure a config file is present in the repo that feeds the names of environmental
variables to the host.
-->

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FButterCMS%2Fnextjs-starter-buttercms&env=NEXT_PUBLIC_BUTTER_CMS_API_KEY&envDescription=Your%20ButterCMS%20API%20Token&envLink=https%3A%2F%2Fbuttercms.com%2Fsettings%2F&project-name=nextjs-starter-buttercms&repo-name=nextjs-starter-buttercms&redirect-url=https%3A%2F%2Fbuttercms.com%2Fonboarding%2Fvercel-starter-deploy-callback%2F&production-deploy-hook=Deploy%20Triggered%20from%20ButterCMS&demo-title=ButterCMS%20Next.js%20Starter&demo-description=Fully%20integrated%20with%20your%20ButterCMS%20account&demo-url=https%3A%2F%2Fnextjs-starter-buttercms.vercel.app%2F&demo-image=https://cdn.buttercms.com/r0tGK8xFRti2iRKBJ0eY&repository-name=nextjs-starter-buttercms)
