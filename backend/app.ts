import express from "express";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.init();
  }

  init() {
    this.app.get("/", (req, res) => {
      res.send("Hello, world!");
    });
    console.log("App initialized");
  }
}

export default App;