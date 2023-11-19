const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const scrabIGAPI = require("./api/scrabIG");
const host = "192.168.50.253";
const options = {
  key: fs.readFileSync("key.pem"), // Replace with your private key file
  cert: fs.readFileSync("cert.pem"), // Replace with your certificate file
};

const port = 5000;
const secretKey = "secretKey";
const users = [
  {
    id: 1,
    username: "b6610402230",
    password: "1234",
    fname: "Sirisuk",
    lname: "Tharntham",
    profileImg:
      "https://cdn.discordapp.com/attachments/1083040320033411134/1175460635551744180/OK_PERFECT_SKIN_BG_GREY_TIGHT_500x631.jpg",
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
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
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
    // , { expiresIn: "24h" }
    const token = jwt.sign(payload, secretKey);
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
app.get("/getIG/:ig_name/:n", async (req, res) => {
  const ig = await scrabIGAPI.getIG(req.params.ig_name, req.params.n);

  res.json(ig);
});

const server = https.createServer(options, app);
server.listen(port, host, () => {
  console.log(`Server running at https://xxx:${port}/`);
});
// app.listen(5080, host, () =>
//   console.log(`Application is running on port http://${host}${5080}`)
// );
