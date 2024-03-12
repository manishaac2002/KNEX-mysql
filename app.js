import express from "express";
import controller from './controller.js';
import middleware from "./middleware.js";

const application = express();

// Define routes
application.get('/getMessages', middleware.triggerApi, controller.getMessages,);

const port = 6000;
application.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
