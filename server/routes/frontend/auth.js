import express from 'express';
import AuthController from '../../controller/frontend/AuthController.js';

const routes = express.Router();

routes.post('/signup', AuthController.signup);
routes.post('/signin', AuthController.signin);

export default routes;
