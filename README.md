# 10 Hacker News

## Overview

10 Hacker News App retrieves and presents 10 random from the most recent stories on HN using the [Ycombinator's API](https://github.com/HackerNews/API). 

## Implementation Notes

- The app is written in Vanilla JavaScript (ES6)

- Uses MVC pattern

- The stories are saved in the Local Storage

- Cache invalidation time is 2 minutes (by default)

## Quick Start

1. Install dependencies
```
npm install
```

2. Build
```
npm run build
```

3. Start a development server (webpack-dev-server is used under the hood)
```
npm start
```

4. Run e2e test (mocha, chai, selenium-webdriver are used)
```
npm test
```

