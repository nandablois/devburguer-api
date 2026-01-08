import { Router } from "express";

import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import CategoryController from "./app/controllers/CategoryController.js";
import ProductsController from "./app/controllers/ProductsController.js";
import multerconfig from "./config/multer.cjs";
import multer from "multer";
import authMiddleware from "./middlewares/auth.js";
import adminMiddleware from "./middlewares/admin.js";

const routes = new Router()

const upload = multer(multerconfig)

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware)
routes.post('/products', adminMiddleware, upload.single("file") ,ProductsController.store);
routes.put('/products/:id', adminMiddleware, upload.single("file") ,ProductsController.update);
routes.get('/products', ProductsController.index);


routes.post('/categories', adminMiddleware, upload.single("file"), CategoryController.store);
routes.put('/categories/:id', adminMiddleware, upload.single("file"), CategoryController.update);
routes.get('/categories', CategoryController.index);

export default routes;