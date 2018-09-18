"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const crypto_1 = require("crypto");
exports.sourceNodes = ({ actions: { createNode }, createNodeId }, options) => __awaiter(this, void 0, void 0, function* () {
    const url = `https://spreadsheets.google.com/feeds/list/${options.sheetID}/od6/public/values?alt=json`;
    const response = yield node_fetch_1.default(url);
    const data = yield response.json();
    for (let [index, entry] of data.feed.entry.entries()) {
        let cleanEntry = {};
        for (let key in entry) {
            if (key.startsWith('gsx$')) {
                cleanEntry[key.slice(4)] = entry[key].$t;
            }
        }
        createNode(Object.assign({}, cleanEntry, { id: createNodeId(`google-sheet-row-${index}`), parent: null, children: [], internal: {
                type: 'GoogleSheetRow',
                content: JSON.stringify(cleanEntry),
                contentDigest: crypto_1.createHash('md5')
                    .update(JSON.stringify(cleanEntry))
                    .digest('hex'),
            } }));
    }
});
