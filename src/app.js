import express from "express";
// Creating an instance of the Express application
const app = express();
// Middleware for handling CORS

// Middleware to parse JSON data from the frontend form
app.use(express.json({ limit: "16kb" }));
// Middleware to parse URL-encoded data from the frontend form
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// Middleware to serve static files from the "public" directory
app.use(express.static("public"));
export default app;
