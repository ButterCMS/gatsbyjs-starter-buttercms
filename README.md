# Gatsby + ButterCMS Starter Project

This Gatsby starter project fully integrates with dynamic sample content from your ButterCMS account, including main menu, pages, blog posts, categories, and tags, and all with a beautiful, custom theme with already-implemented search functionality. All of the included sample content is automatically created in your account dashboard when you sign up for a free trial of ButterCMS.

You can view a [live demo hosted on Vercel](https://gatsbyjs-starter-buttercms-vercel.vercel.app/), or you can click a button below to deploy your own copy of our starter
project to the provider of your choice.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FButterCMS%2Fgatsbyjs-starter-buttercms&env=BUTTER_CMS_API_KEY&envDescription=Your%20ButterCMS%20API%20Token&envLink=https%3A%2F%2Fbuttercms.com%2Fsettings%2F&project-name=gatsbyjs-starter-buttercms&repo-name=gatsbyjs-starter-buttercms&redirect-url=https%3A%2F%2Fbuttercms.com%2Fonboarding%2Fvercel-starter-deploy-callback%2F&production-deploy-hook=Deploy%20Triggered%20from%20ButterCMS&demo-title=ButterCMS%20Gatsby%20Starter&demo-description=Fully%20integrated%20with%20your%20ButterCMS%20account&demo-url=https%3A%2F%2Fgatsbyjs-starter-buttercms.vercel.app%2F&demo-image=https://cdn.buttercms.com/r0tGK8xFRti2iRKBJ0eY&repository-name=gatsbyjs-starter-buttercms)

[![Deploy with Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ButterCMS/gatsbyjs-starter-buttercms&env%5BBUTTER_CMS_API_KEY%5D=check%20https://buttercms.com/settings)

## 1. Installation

First, clone the repo and install the dependencies by running `npm install`

```bash
git clone https://github.com/ButterCMS/gatsbyjs-starter-buttercms.git
cd gatsbyjs-starter-buttercms
npm install
```

### 2. Set API Token

To fetch your ButterCMS content, add your API token as an environment variable.

```bash
$ echo 'BUTTER_CMS_API_KEY=<Your API Token>' >> .env
```

### 3. Run local server

To view the app in the browser, you'll need to run the local development server:

```bash
$ npm run develop
```

Congratulations! Your starter project is now live at [http://localhost:8000/](http://localhost:8000/).

## 4. Deploy With A Click

Deploy your Gatsby app using Vercel, the creators of Next.js, with Gatsby Cloud, or with Heroku. With a single click, you'll create a copy of our starter project in your Git provider account, instantly deploy it, and institute a full content workflow connected to your ButterCMS account. Smooth.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FButterCMS%2Fgatsbyjs-starter-buttercms&env=BUTTER_CMS_API_KEY&envDescription=Your%20ButterCMS%20API%20Token&envLink=https%3A%2F%2Fbuttercms.com%2Fsettings%2F&project-name=gatsbyjs-starter-buttercms&repo-name=gatsbyjs-starter-buttercms&redirect-url=https%3A%2F%2Fbuttercms.com%2Fonboarding%2Fvercel-starter-deploy-callback%2F&production-deploy-hook=Deploy%20Triggered%20from%20ButterCMS&demo-title=ButterCMS%20Gatsby%20Starter&demo-description=Fully%20integrated%20with%20your%20ButterCMS%20account&demo-url=https%3A%2F%2Fgatsbyjs-starter-buttercms.vercel.app%2F&demo-image=https://cdn.buttercms.com/r0tGK8xFRti2iRKBJ0eY&repository-name=gatsbyjs-starter-buttercms)

[![Deploy with Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ButterCMS/gatsbyjs-starter-buttercms&env%5BBUTTER_CMS_API_KEY%5D=check%20https://buttercms.com/settings)

⚠️ **Don't forget to set the BUTTER_CMS_API_KEY environment variable in Gatsby Cloud.**

### 5. Webhooks

In order for your deployed app to pull in content changes from your ButterCMS account, you'll need to follow your hosting provider's steps for setting up webhooks. The ButterCMS webhook settings are located at https://buttercms.com/webhooks/. 

### 6. Previewing Draft Changes

By default, your starter project is set up to allow previewing of draft changes saved in your ButterCMS.com account. To disable this functionality, set the following value in your .env file: BUTTER_CMS_PREVIEW=false

Note that if you deployed with heroku and you want to use the iframe previewing ability on the ButterCMS.com website, you'll need to include trailing slashes when specifying your URLS in
[your ButterCMS.com settings](https://buttercms.com/settings/previews).

```
mydomain.com/blog/<slug>   <-- Won't work for previewing
mydomain.com/blog/<slug>/  <-- Will work for previewing.
```

