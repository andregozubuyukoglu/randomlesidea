const express = require("express");
const router = express.Router();

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

//Get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, date: ideas });
});

//Get single idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({ success: false, error: "Not Found" });
  }

  res.json({ success: true, date: idea });
});

//add an idea (Put)
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
});

module.exports = router;
