const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const sampleData = [
  {
    campaignName: "Campaign 1",
    adGroupName: "Ad Group 1",
    impressions: 1000,
    clicks: 200,
    cost: 50,
    lastUpdated: new Date(),
  },
  {
    campaignName: "Campaign 1",
    adGroupName: "Ad Group 2",
    impressions: 1500,
    clicks: 300,
    cost: 75,
    lastUpdated: new Date(),
  },
  {
    campaignName: "Campaign 2",
    adGroupName: "Ad Group 1",
    impressions: 800,
    clicks: 100,
    cost: 30,
    lastUpdated: new Date(),
  },
];

function updateAdsData() {
  const now = new Date();
  sampleData.forEach((ad) => {
    ad.impressions += Math.floor(Math.random() * 100);
    ad.clicks += Math.floor(Math.random() * 10);
    ad.cost += Math.floor(Math.random() * 5);
    ad.lastUpdated = now;
  });
}

setInterval(updateAdsData, 10000); // 10000 milliseconds = 10 seconds

app.get("/daily-data", (req, res) => {
  res.json(sampleData);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:\${port}`);
});
