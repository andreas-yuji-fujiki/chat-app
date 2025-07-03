import App from "./app";

const appInstance = new App();

const PORT = process.env.PORT || 3001;
appInstance.app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default appInstance;