import express from 'express';
import AuthController from '../controller/AuthController.js';

const routes = express.Router();

routes.post('/signup', AuthController.signup);
routes.post('/verify', AuthController.verify);
routes.post('/signin', AuthController.signin);

export default routes;
