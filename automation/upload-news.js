import { createReadStream } from "fs";
import csv from "csv-parser";
import axios from "axios";

// Load environment variables
const wordpressUrl = "https://rogerjunior.com/stage";
const wordpressUsername = "admin";
const wordpressPassword = "admin";

// Basic Authentication for WordPress
const auth = {
    username: wordpressUsername,
    password: wordpressPassword,
};

// Function to upload a row to WordPress
async function uploadRow(row, sources) {
    try {
        // Example structure, adjust this according to your needs and the CSV structure
        const postData = {
            ...row,
            date: new Date(row.date),
            meta: { content: row.content },
            source: sources
                .filter((source) => source.name == row.sources)
                .map((source) => source.id),
            lang: row.lang,
            format: "link",
            status: "publish", // or 'draft', 'pending', etc.
        };

        // Upload to WordPress
        const response = await axios.post(`${wordpressUrl}/wp-json/wp/v2/press`, postData, {
            auth,
        });

        // console.log(sources);

        console.log(`Uploaded: ${row.title} - ID: ${response.data.id}`);
    } catch (error) {
        console.error(
            `Failed to upload: ${row.title}`,
            error.response ? error.response.data : error.message
        );
    }
}

// Function to process the CSV file
async function processCsv(filePath) {
    const { data: sources } = await axios.get(`${wordpressUrl}/wp-json/wp/v2/source`);

    var i = 0;
    createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
            // console.log(row);
            uploadRow(row, sources);

            i++;
        })
        .on("end", () => {
            console.log("CSV file successfully processed.");
        });
}

// Start processing the CSV
const csvFilePath = "news.csv"; // Replace with your CSV file path
processCsv(csvFilePath);
