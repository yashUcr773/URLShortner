const express = require("express");
const rootRouter = require("./routes/index.routes");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { ShortenedURLDB } = require("./database/database");
const { CONSTANTS } = require("./config/constants.config");
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
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
app.listen(PORT, () => console.log("server started on port", PORT));
