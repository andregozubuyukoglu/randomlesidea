const express = require("express");
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: "Positive Newsletter,",
    tag: "Technology",
    username: "TonyStark",
    date: "2023-01-02",
  },
  {
    id: 2,
    text: "Positive Newsletter,",
    tag: "Inventions",
    username: "SteveRogers",
    date: "2023-01-02",
  },
  {
    id: 3,
    text: "Positive Newsletter,",
    tag: "Chemistry",
    username: "BruceBanner",
    date: "2023-01-02",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

//Get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, date: ideas });
});

app.get("/api/ideas/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({ success: false, error: "Not Found" });
  }

  res.json({ success: true, date: idea });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
