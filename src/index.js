import dbConnection from "./db/database.connection.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

app.listen(process.env.PORT, async () => {
  try {
    const connectdb = await dbConnection();
    console.log(`app listening on ${process.env.PORT}`);
  } catch (error) {
    console.log("app is not listening on ${process.env.PORT}", error);
  }
});
