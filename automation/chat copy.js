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

const API_KEY = "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";

const openai = new OpenAI({
    apiKey: API_KEY,
});

const response = await axios.get(`${wordpressUrl}/wp-json/wp/v2/press?lang=en&per_page=100`, {
    auth,
});

response.data.forEach(async (post) => {
    const content = {
        format: post.format,
        url: post.url,
        type: post.type,
    };
    // const update = await axios.post(
    //     `${wordpressUrl}/wp-json/wp/v2/press/?lang=pt&translations[en]=${post.id}`,
    //     {
    //         lang: "pt",
    //         ...result,
    //     },
    //     {
    //         auth,
    //     }
    // );
    // console.log(update.data);

    if (post.translations.en > post.translations.pt) {
        const update = await axios.post(`${wordpressUrl}/wp-json/wp/v2/press/${post.id}`, content, {
            auth,
        });
        console.log(update.url);
    }
});
