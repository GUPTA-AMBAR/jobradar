const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/jobs", async (req, res) => {
    const keyword = req.query.search || 'sde';

    const count = 100;
    const cursor = null;

    try {
        const targetUrl = "https://x.com/i/api/graphql/JyATh-zc07YHeyDDl3rDgg/JobSearchQueryScreenJobsQuery";

        const headers = {
            Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA`, // Hardcoded Bearer token
            "Content-Type": "application/json",
            "Accept-Language": "en-US,en;q=0.9",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
            Cookie: `guest_id=v1%3A169969079503527858; twid=u%3D1779042672050655232; auth_token=0107b9320d7d5e0ca49cfbcc1d2aeb12b9429aca; guest_id_ads=v1%3A169969079503527858; guest_id_marketing=v1%3A169969079503527858; ct0=a75319cb51d7500295a75afa6df8ed5cc8b35f42b25218ee7cd90b47b815a53f40659a8ca9366a738b5c84eb000c5a32b306532f3ea7e8a9e6b083635b9fae1d03b82f91a189f10cd2b080cf1dbfafd0; personalization_id="v1_JNXf/20aOsgAzp956xobKg=="; external_referer=vC8TI7P7q9UHtLBqrmGBr69ZIZ0kcYBq|0|8e8t2xd8A2w%3D; lang=en`,
            "x-csrf-token": `a75319cb51d7500295a75afa6df8ed5cc8b35f42b25218ee7cd90b47b815a53f40659a8ca9366a738b5c84eb000c5a32b306532f3ea7e8a9e6b083635b9fae1d03b82f91a189f10cd2b080cf1dbfafd0`,
            "x-twitter-auth-type": "OAuth2Session",
            "x-twitter-active-user": "yes",
            "x-twitter-client-language": "en",
        };

        const variables = {
            count,
            cursor,
            searchParams: {
                keyword,
                job_location_id: null,
                job_location: null,
                job_location_type: [],
                seniority_level: [],
                company_name: null,
                employment_type: [],
                industry: null,
            },
        };

        // Make the API call
        const response = await axios.get(targetUrl, {
            headers,
            params: { variables: JSON.stringify(variables) },
        });

        // Return the fetched data
        res.json(response.data || []);
    } catch (error) {
        console.error("Error fetching jobs:", error.message);
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
