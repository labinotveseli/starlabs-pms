const express = require("express");
const index = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
index.use(express.json());
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: "./config.env" });
app.use(cors());
const createError = require("http-errors");


const io = require("socket.io")(5000, {
  cors: {
    origin: "http://127.0.0.1:5173",
  },
});

io.on("connection", (socket) => {
  io.emit("welcome", `user with socket id ${socket.id} has connected`);
});

const chatSocket = require("./Socket/Chat")(io);

const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");

    const database = mongoose.connection.db;
    index.locals.database = database;
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });

const userApi = require("./Controllers/UserController");
const projectAPI = require("./Controllers/ProjectController");
const reportAPI = require("./Controllers/ReportController");
const sprintAPI = require("./Controllers/SprintController");
const emailAPI = require("./Controllers/EmailController");
const cardAPI = require("./Controllers/CardController");
const { authRoute } = require("./Controllers/AuthController");
const jiraAPI = require("./Controllers/JiraApiController");
const conversationAPI = require("./Controllers/Conversation");
const messageAPI = require("./Controllers/Messsage");
const teamAPI = require("./Controllers/TeamController");
const trelloAPI = require("./Controllers/TrelloController");



app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Endpoint to retrieve Jira statistics
//
// const fetch = require('node-fetch');

// fetch('https://team7pm.atlassian.net/rest/api/2/search?jql=project=firstprj%20AND%20status%20changed%20to%20Done%20during%20(-7d,%20now())&maxResults=0', {
//   method: 'GET',
//   headers: {
//     'Authorization': `Basic ${Buffer.from(
//       'bh51556@ubt-uni.net:ATATT3xFfGF0f1YpdHyoYaA5i4eItXkNtCEDaWa8ZlWmY_vKtVETmdqJ2tNrA_FIqDtsSjCl2R8XaNA3q-fYVlSI4iLNg6wW5slxGNl5YsjUUz-moR9QI1keAfXeIkfGOfynt7r9A9rjcqkXMDDCCfPtXHvztp_PYKyoobFVZNkr5IrWLHJpG0E=36C8B09C'
//     ).toString('base64')}`,
//     'Accept': 'application/json'
//   }
// })
//   .then(response => {
//     console.log(
//       `Response: ${response.status} ${response.statusText}`
//     );
//     return response.text();
//   })
//   .then(text => console.log(text))
//   .catch(err => console.error(err));

app.use("/api", userApi);
app.use("/api", projectAPI);

app.use("/api", reportAPI);
app.use("/api", sprintAPI);
app.use("/api", emailAPI);
app.use("/api", cardAPI);
app.use("/api", authRoute);
app.use("/api", teamAPI);
app.use("/api", sprintAPI);
app.use("/api", jiraAPI);
app.use("/api", conversationAPI);
app.use("/api", messageAPI);
app.use("/api", trelloAPI);


const port = process.env.PORT || 2000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
app.use((req, res, next) => {
  next(createError(404));
});

// SameSite attribute cookies handler
// app.get('/login', (req, res) => {
//   res.setHeader('Set-Cookie', 'cookieName=value; SameSite=None; Secure');
//   res.status(200).json({ message: 'Login page accessed successfully' });
// });
// error handler
