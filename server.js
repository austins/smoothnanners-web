const path = require("path");
const express = require("express");
const app = express();

const PORT = 3000;
const BUILD_PATH = process.env.NODE_ENV === "production" ? path.join(__dirname) : path.join(__dirname, "build");

app.use(
    express.static(BUILD_PATH, {
        maxAge: "365d", // Cache max age for static files.
        setHeaders: (res, path) => {
            // Custom caching for index.html.
            if (path.endsWith("index.html")) res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");
        },
    })
);

app.get("/", function (req, res) {
    res.sendFile(path.join(BUILD_PATH, "index.html"), {});
});

app.get("*", function (req, res) {
    res.status(404).redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
