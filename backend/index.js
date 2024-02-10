const express = require("express");
const rootRouter = require("./routes/index.routes");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const { ShortenedURLDB } = require("./database/database");
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
            return res.redirect("https://app.shtr.dev/notfound");
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Some error occured. Try Again Later",
        });
    }
});
app.use("/", (req, res) => {
    res.send(
        "Express app hosted on vercel. Code at https://github.com/yashUcr773/URLShortner/tree/master/backend"
    );
});
app.listen(PORT, () => console.log("server started on port", PORT));
