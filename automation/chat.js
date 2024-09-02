import { createReadStream } from "fs";
import csv from "csv-parser";
import axios from "axios";
import OpenAI from "openai";

// Load environment variables
const wordpressUrl = "https://rogerjunior.com/stage";
const wordpressUsername = "admin";
const wordpressPassword = "admin";

// Basic Authentication for WordPress
const auth = {
    username: wordpressUsername,
    password: wordpressPassword,
};

const results = [];

const a = await axios.get(`${wordpressUrl}/wp-json/wp/v2/source/?per_page=100`, {
    auth,
});
const b = await axios.get(`${wordpressUrl}/wp-json/wp/v2/source/?per_page=100&page=2`, {
    auth,
});

const sources = [...a.data, ...b.data];

createReadStream("news.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
        for (let index = 0; index < results.length; index++) {
            const row = results[index];

            const sourceIds = sources
                .filter((item) => {
                    return item.name == row.source;
                })
                .map((item) => item.id);

            const update = await axios.post(
                `${wordpressUrl}/wp-json/wp/v2/press/`,
                {
                    title: row.title,
                    lang: row.lang,
                    content: row.content,
                    url: row.url,
                    type: row.source == "Press Release" ? "release" : "media",
                    status: "publish",
                    date: new Date(row.date),
                    sources: sourceIds,
                    source: sourceIds,
                },
                {
                    auth,
                }
            );

            const translation = await axios.post(
                `${wordpressUrl}/wp-json/wp/v2/press/`,
                {
                    title: row.title_translated,
                    lang: row.lang == "en" ? "pt" : "en",
                    content: row.content_translated,
                    url: row.url,
                    type: row.source == "Press Release" ? "release" : "media",
                    status: "publish",
                    date: new Date(row.date),
                    sources: sourceIds,
                    source: sourceIds,
                    translations: [update.data.id],
                },
                {
                    auth,
                }
            );

            const updateTranslation = await axios.post(
                `${wordpressUrl}/wp-json/wp/v2/press/${translation.data.id}?lang=${
                    row.lang == "en" ? "pt" : "en"
                }&translations[${row.lang}]=${update.data.id}`,
                {},
                {
                    auth,
                }
            );

            console.log(translation.data.id, update.data.id, updateTranslation.data.id);
        }
    });

// response.data.forEach(async (post) => {
//     if (Object.keys(post.translations).length == 1) {
//         const content = {
//             content: post.content,
//             title: post.title.rendered,
//             url: post.url,
//             type: post.type,
//             format: post.format,
//         };

//         const update = await axios.post(
//             `${wordpressUrl}/wp-json/wp/v2/press/?lang=pt&translations[en]=${post.id}`,
//             {
//                 lang: "pt",
//                 ...result,
//             },
//             {
//                 auth,
//             }
//         );
//         console.log(update.data);
//     }
// });
