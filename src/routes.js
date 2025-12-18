import { Router } from "express";

import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import ProductsController from "./app/controllers/ProductsController.js";
import multerconfig from "./config/multer.cjs";
import multer from "multer";

const routes = new Router()

const upload = multer(multerconfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)
routes.post('/products', upload.single("file") ,ProductsController.store)
routes.get('/products', ProductsController.index)

export default routes;