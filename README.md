# gatsby-source-published-google-sheets

[![npm](https://img.shields.io/npm/v/gatsby-source-published-google-sheets.svg)](https://www.npmjs.com/package/gatsby-source-published-google-sheets)

Gatsby plugin that pulls data from a published Google sheet.

## Install

Use Yarn or npm.

```
yarn add gatsby-source-published-google-sheets
# or
npm install --save gatsby-source-published-google-sheets
```

## How to use

1. Make sure your spreadsheet is [published](https://support.google.com/docs/answer/183965).
2. Note your [spreadsheet's id](https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id). This is the random string that's in the middle of your spreadsheet's url. Google
3. Add the plugin to `plugins` in your `gatsby-config.js`. It should look something like:

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-published-google-sheets',
      options: {
        sheetID: 'Google sheet id',
      },
    },
  ],
}
```
