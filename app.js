const express = require("express");
const app = express();
const port = 3000;

const devices = ["phone", "tablet", "computer"];

const randomBounceRate = () => Math.random();
const randomTimeOnPage = () => Math.floor(Math.random() * 600);
const randomDeviceType = () =>
  devices[Math.floor(Math.random() * devices.length)];
const randomGender = () => (Math.random() < 0.5 ? "male" : "female");

const headers = [
  "Date",
  "CTR",
  "CPC",
  "ROAS",
  "Spend",
  "AOV",
  "Bounce Rate",
  "Time on Page",
  "Device Type",
  "Revenue",
  "Orders",
  "Gender",
];

let data = [];

const generateData = () => {
  data = [];
  data.push(headers); // Add headers to the data array
  for (let i = 0; i < 100000; i++) {
    data.push([
      new Date().toISOString().slice(0, 10),
      Math.random(),
      Math.random() * 10,
      Math.random() * 5,
      Math.random() * 1000,
      Math.random() * 200,
      randomBounceRate(),
      randomTimeOnPage(),
      randomDeviceType(),
      Math.random() * 5000,
      Math.floor(Math.random() * 100),
      randomGender(),
    ]);
  }
};

generateData(); // Generate initial data
setInterval(generateData, 10000); // Generate new data every 10 seconds

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:\${port}`);
});
