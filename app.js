const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const devices = ["phone", "tablet", "computer"];

const randomBounceRate = () => Math.random();
const randomTimeOnPage = () => Math.floor(Math.random() * 600);
const randomDeviceType = () =>
  devices[Math.floor(Math.random() * devices.length)];
const randomGender = () => (Math.random() < 0.5 ? "male" : "female");

let data = [];

const generateData = () => {
  data = [];
  for (let i = 0; i < 100000; i++) {
    data.push({
      date: new Date().toISOString().slice(0, 10),
      ctr: Math.random(),
      cpc: Math.random() * 10,
      roas: Math.random() * 5,
      spend: Math.random() * 1000,
      AOV: Math.random() * 200,
      bounceRate: randomBounceRate(),
      timeOnPage: randomTimeOnPage(),
      deviceType: randomDeviceType(),
      revenue: Math.random() * 5000,
      orders: Math.floor(Math.random() * 100),
      gender: randomGender(),
    });
  }
};

generateData(); // Generate initial data
setInterval(generateData, 10000); // Generate new data every 10 seconds

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:\${port}`);
});
