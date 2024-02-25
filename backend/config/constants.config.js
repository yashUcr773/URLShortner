require('dotenv').config()
const CONSTANTS = {
    MONGO_DB_CONNECTION: process.env.MONGO_DB_CONNECTION,
    JWT_SECRET: process.env.JWT_SECRET,
    EXPIRYTIME: 1000 * 60 * 60 * 24,
    FEURL: "https://app.shtr.dev/",
    NOTFOUND: "https://app.shtr.dev/notfound",
};

module.exports = {
    CONSTANTS,
};
