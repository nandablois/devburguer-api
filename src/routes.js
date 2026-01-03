import { Router } from "express";

import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import CategoryController from "./app/controllers/CategoryController.js";
import ProductsController from "./app/controllers/ProductsController.js";
import multerconfig from "./config/multer.cjs";
import multer from "multer";
import authMiddleware from "./middlewares/auth.js";

const routes = new Router()

const upload = multer(multerconfig)

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware)
routes.post('/products', upload.single("file") ,ProductsController.store);
routes.get('/products', ProductsController.index);


routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);

export default routes;