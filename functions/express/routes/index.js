import { Router } from "express";
const routes = Router();
routes.get("/", (req, res) => {
  return res.send({ message: "Hello :)" });
});
export default routes;
