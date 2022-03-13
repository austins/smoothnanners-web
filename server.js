const path = require("path");
const express = require("express");
const app = express();

const PORT = 3000;

// Prevent viewing the asset-manifest.json file.
app.get("/asset-manifest.json", function (req, res) {
    res.status(403).redirect("/");
});

app.use(
    express.static(path.join(__dirname, "build"), {
        index: "index.html",
        maxAge: "365d", // Cache max age for static files.
        setHeaders: (res, filePath) => {
            // Custom caching for index.html.
            if (filePath.endsWith("index.html")) res.setHeader("Cache-Control", "s-maxage=5, stale-while-revalidate");
        },
    })
);

// Handling for not found. This should be the last route.
app.get("*", function (req, res) {
    res.status(404).redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
