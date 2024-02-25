require("dotenv").config();
const { allowedOrigins } = require("./allowedOrigins");
const corsOptions = {
    origin: (origin, callback) => {
        console.log(origin, allowedOrigins, allowedOrigins.indexOf(origin));
        if (
            allowedOrigins.indexOf(origin) !== -1 ||
            process.env.ENV == "development"
        ) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};

module.exports = corsOptions;
