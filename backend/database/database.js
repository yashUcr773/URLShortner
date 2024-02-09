const mongoose = require("mongoose");
const { CONSTANTS } = require("../config/constants.config");

mongoose.connect(CONSTANTS.MONGODBCONNECTION + "urlShortner");

const ShortenedURLsSchema = new mongoose.Schema({
    shortenedURL: {
        type: String,
        required: true,
    },
    completeURL: {
        type: String,
        required: true,
    },
});

const ShortenedURLDB = mongoose.model("ShortenedURLs", ShortenedURLsSchema);

module.exports = {
    ShortenedURLDB,
};
