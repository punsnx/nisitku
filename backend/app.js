const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
// const newsApi = require("./api/news");
// const host = "192.168.50.128";

const port = 3000;
const secretKey = "secretKey";
const users = [
  {
    id: 1,
    username: "b6610402230",
    password: "1234",
    fname: "Sirisuk",
    lname: "Tharntham",
    profileImg: "noImg",
    nisitid: "6610402230",
    year: "1",
    role: "Nisit",
    email: "sirisuk.t@ku.th",
  },
];
// Enable CORS for all routes
app.set("trust proxy", 1);
app.use(cors());
app.get("/", (req, res) => res.json({ message: "Hello JWT" }));

app.get("/token", (req, res) => {
  const payload = {
    id: 1,
    displayName: "John Doe",
    role: "admin",
  };
  // sign ด้วย default HMAC SHA256
  const token = jwt.sign(payload, secretKey, { expiresIn: "24h" });
  res.json({
    token: token,
  });
});

app.post("/api/verifyToken/:token", (req, res) => {
  const token = req.params.token;

  try {
    const decoded = jwt.verify(token, secretKey);

    res.json({
      status: true,
      message: "Authorized PASS",
      decoded,
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      message: "Unauthorized",
      error: error.message,
    });
  }
});
app.post("/api/login/:user/:pass", (req, res) => {
  const username = req.params.user;
  const password = req.params.pass;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    const payload = {
      id: user.id,
      username: user.username,
      fname: user.fname,
      lname: user.lname,
      profileImg: user.profileImg,
      nisitid: user.nisitid,
      year: user.year,
      role: user.role,
      email: user.email,
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: "10s" });
    res.json({
      status: "success",
      token: token,
    });
  } else {
    res.json({
      status: "fail",
    });
  }
});
app.post("/api/getTokenData/:token", (req, res) => {
  const token = req.params.token;
  try {
    const decoded = jwt.verify(token, secretKey);
    res.json({
      status: "success",
      decoded,
    });
  } catch (error) {
    res.json({
      status: "fail",
      error: error.message,
    });
  }
});
// app.get("/getNews", async (req, res) => {
//   const news = await newsApi.getNews(2);

//   res.json(news);
// });
// const httpsServer = https.createServer(app);
// httpsServer.listen(port, () => {
//   console.log(`Server is running on https://localhost:${port}`);
// });
app.listen(port, () => console.log(`Application is running on port ${port}`));
