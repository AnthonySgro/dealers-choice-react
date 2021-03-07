// Server initialization
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Database

// Logging
app.use(morgan("dev"));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message || "Internal server error");
});

// Dev feedback
app.listen(PORT, () =>
    console.log(`

    Listening on port ${PORT}
    http://localhost:${PORT}/

`),
);
