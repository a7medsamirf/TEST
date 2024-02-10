# SoumTech

# GitHub Pages
```bash
npm i gh-pages -D
# 1. Set .env variable to repo name. i.e. replace /nuxt3-generate/ with your repo name
NUXT_APP_BASE_URL=/nuxt3-generate/
# 1.1 Set env in github repo secrets (havent verified if needed)
# 2. .nojekyll in public. or config gh-pages to generate the file before pushing
# 3. SSR
  ssr:false,

# 4. run
npm run generate
npm run gh-pages-deploy
# gh-pages --dotfiles --dist dist
# --dotfiles is important. or it wont push .nojekyll
```

Look at the [Content documentation](https://content.nuxt.com/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.