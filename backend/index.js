const { CONSTANTS } = require("./config/constants.config");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = CONSTANTS.PORT || 3000;
const cookieParser = require("cookie-parser");
const rootRouter = require("./routes/index.routes");
const { ShortenedURLDB } = require("./database/database");
const corsOptions = require("./config/corsOptions");

// Cross-Origin Resource Sharing
app.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
        // Use CORS with options for other routes
        cors(corsOptions)(req, res, next);
    } else {
        // Allow all origins for the root path
        cors()(req, res, next);
    }
});

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// to parse cookies sent with request
app.use(cookieParser());

app.use("/api/v1", rootRouter);

app.use("/:shortenedURL", async (req, res) => {
    try {
        const shortenedURL = req.params.shortenedURL;

        const url = await ShortenedURLDB.findOne(
            { shortenedURL },
            { completeURL: 1, shortenedURL: 1, _id: 0 }
        );

        if (url) {
            return res.redirect(url.completeURL);
        } else {
            return res.redirect(CONSTANTS.NOTFOUND);
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Some error occured. Try Again Later",
        });
    }
});

app.use("/", (req, res) => {
    return res.redirect(CONSTANTS.FEURL);
});

// global router catcher
app.all("*", (req, res) => {
    return res.redirect(CONSTANTS.NOTFOUND);
});

app.listen(PORT, () => console.log("server started on port", PORT));
