# charlesbucquet.com

Personal portfolio site for Charles Bucquet — home, projects, career timeline, and about page. Built with React and deployed on Firebase Hosting.

## Stack

- [Create React App](https://github.com/facebook/create-react-app) (react-scripts)
- React Router for page navigation
- Framer Motion for scroll-triggered animations
- react-responsive-carousel for the photo gallery on the About page

## Local development

```
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000) with hot reload.

## Build

```
npm run build
```

Outputs a production build to `build/`. This folder is currently committed to the repo, since the deploy workflow (below) doesn't run its own build step — it deploys whatever is in `build/` as-is. If you change that, remember to run this and commit the output before pushing.

## Deployment

Hosted on Firebase Hosting (project `charles-website-bd690`) at [charles-website-bd690.web.app](https://charles-website-bd690.web.app). Deployment is automated via GitHub Actions:

- **Push to `main`** → `.github/workflows/firebase-hosting-merge.yml` deploys straight to the live site.
- **Open a pull request** → `.github/workflows/firebase-hosting-pull-request.yml` deploys a preview channel and comments the preview URL on the PR.

No manual `firebase deploy` needed — just push.
