import fetch from 'node-fetch'
import { createHash } from 'crypto'

interface Options {
  sheetID: string
}

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId }: any,
  options: Options
) => {
  const url = `https://spreadsheets.google.com/feeds/list/${
    options.sheetID
  }/od6/public/values?alt=json`
  const response = await fetch(url)
  const data = await response.json()

  for (let [index, entry] of data.feed.entry.entries()) {
    let cleanEntry: { [key: string]: { value: string } } = {}

    // Clean data
    for (let key in entry) {
      if (key.startsWith('gsx$')) {
        cleanEntry[key.slice(4)] = entry[key].$t
      }
    }

    // Create
    createNode({
      ...cleanEntry,
      id: createNodeId(`google-sheet-row-${index}`),
      parent: null,
      children: [],
      internal: {
        type: 'GoogleSheetRow',
        content: JSON.stringify(cleanEntry),
        contentDigest: createHash('md5')
          .update(JSON.stringify(cleanEntry))
          .digest('hex'),
      },
    })
  }
}
