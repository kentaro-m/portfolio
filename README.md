# :smile_cat: Portfolio
A my portfolio site that fetch data and display from various services such as GitHub, Qiita, SpeakerDeck.

## :computer: Technology Stacks
* Next.js
* Firebase Hosting
* Cloud Functions for Firebase

## :warning: Requirement
* Node.js v8 

## :floppy_disk: Installation

### Fork and Clone 
```
$ git clone https://github.com/kentaro-m/portfolio
$ cd portfolio
```

### Install dependencies
```
$ yarn install
```

### Update `.env.example` file and `config.js` file
Rename `.env.example` to `.env`. Get the token from each service and input.
```
# Scope: public_repo
GITHUB_API_TOKEN=<Your GitHub Token>
# Scope: read_qiita
QIITA_API_TOKEN=<Your Qiita Token>
# Error Tracking Tool
SENTRY_PUBLIC_DSN=<Your Sentry Public DSN> 
```

Input user info on `src/app/lib/config.js`.
```js
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  // Input site description to display meta tags
  site: {
    url: prod ? 'https://kentarom.com' : 'http://localhost:3000',
    title: 'Kentaro Matsushita - @kentaro-m',
    description: '',
    image: 'og_image.png'
  },
  // Input user info to display social account links
  user: {
    name: 'Kentaro Matsushita',
    github: 'kentaro-m',
    qiita: 'kentaro-m',
    speaker_deck: 'kentarom',
    twitter: '_kentaro_m',
    facebook: 'kentaro.m9',
    linkedin: 'kentarom'
  },
  // Input your skills
  skills: [
    {type: "JavaScript (ES2015)", level: 80},
    {type: "Node.js", level: 70},
    {type: "AWS", level: 70},
    {type: "React.js", level: 60},
    {type: "HTML", level: 60},
    {type: "CSS", level: 60},
    {type: "Java", level: 50},
    {type: "Go", level: 40},
    {type: "TypeScript", level: 40}
  ],
  // Search your repository with username and topic name
  github: {
    topic: 'my-portfolio'
  },
  // Input the number of items to display
  qiita: {
    item_count: '5'
  },
  // Input blog url and the number of items to display
  blog: {
    url: 'https://kentarom.hatenablog.com/',
    feed_url: 'https://kentarom.hatenablog.com/feed',
    article_count: '5'
  },
  // Input the number of items to display
  speaker_deck: {
    slides_count: '6'
  }
}
```

### Update `site_description.md`
Input your profile on `src/app/content/site_description.md`.

```
### Kentaro Matsushita
I'm working as a software engineer in Kanazawa, Japan.
```

### Next.js Development
```
$ yarn run dev
```

## :rocket: Deploy to Firebase

### Create a new project
Create a new project on the [Firebase web console](https://console.firebase.google.com/) and note the project id (`https://console.firebase.google.com/project/<projectId>`). 

**Please change firebase pricing plan to Blaze from Spark.** Spark plan is external network is not accessible and can not call the services api. 

### Update `.firebaserc` file
Input your project id.

```
{
  "projects": {
    "default": "<Your Project ID>"
  }
}
```

### Login to FIrebase CLI
```
$ yarn run firebase-login
```

### Deploy Hosting resources and Cloud Functions
```
$ yarn run deploy
```

## :shower: Clean `dist` folder
```
$ yarn run clean
```

## :memo: License
MIT