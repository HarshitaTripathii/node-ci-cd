import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

app.use("/", (req, res) => {
  return res.json({
    text: "hello Harshita at port 3000 and hello crazy guys... harshit",
  });
});
