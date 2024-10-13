const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//ROUTES
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//rest object
const app = express();

//middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
//PORT
const PORT = process.env.PORT || 8081;

//listen
connectDB().then(() => {
  app.listen(8081, () => {
    console.log(
      `Server is running on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan
        .white
    );
  });
});
