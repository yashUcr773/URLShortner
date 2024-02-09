const express = require("express");

const router = express.Router();
const { URL } = require("../validation/URL.validation");
const { ShortenedURLDB } = require("../database/database");

router.post("/shorten", async (req, res) => {
    console.log("here");
    const shortenedURL = req.body.shortenedURL;
    const completeURL = req.body.completeURL;
    try {
        const { success } = URL.safeParse({ shortenedURL, completeURL });

        if (!success) {
            return res.status(400).json({
                message: "Invalid URL(s)",
            });
        }

        const existingUrl = await ShortenedURLDB.findOne({
            shortenedURL,
        });

        if (existingUrl) {
            return res.status(409).json({
                message: "Short URL Already Taken",
            });
        }

        const url = await ShortenedURLDB.create({
            shortenedURL,
            completeURL,
        });

        console.log(url);

        return res.status(200).json({
            message: "Success",
            url: {
                shortenedURL: url.shortenedURL,
                completeURL: url.completeURL,
            },
        });
    } catch (e) {
        return res.status(500).json({
            message: "Some error occured. Try Again Later",
        });
    }
});

module.exports = router;
