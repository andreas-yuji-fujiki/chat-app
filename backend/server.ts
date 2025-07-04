import App from "./app";
import registerRoute from "./routes/public/register_route";
import loginRouter from "./routes/public/login_route";
import express from "express";

const appInstance = new App();
appInstance.app.use(express.json());

appInstance.app.use("/register", registerRoute);
appInstance.app.use("/login", loginRouter);

const PORT = process.env.PORT || 3001;
appInstance.app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default appInstance;