import bodyParser from "body-parser";
import express from "express";
import db from "./config/db.js";
import routes from "./routes/index.js";

const app = express();
const PORT= 3693

// body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Router
app.use('/v1',routes)

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on http://localhost:${PORT}`);
    } else {
        console.error('Error starting the server:', err);
    }
});