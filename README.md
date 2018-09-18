# gatsby-source-published-google-sheets

Gatsby plugin that pulls data from a published Google sheet.

## Install

Use Yarn or npm.

```
yarn add gatsby-source-published-google-sheets
# or
npm install --save gatsby-source-published-google-sheets
```

## How to use

Just add it to `plugins` in your `gatsby-config.js`. It should look something like:

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
