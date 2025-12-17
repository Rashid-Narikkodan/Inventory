import express from "express";

export const app = express();

/* Global middleware */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* Temporary test route */
app.get("/", (req, res) => {
  res.send("Inventory API running");
});
