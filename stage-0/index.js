const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      email: "jane.eloundou@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/jane-ahone/HNG-12-Stage-0",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again later.",
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
