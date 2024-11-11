// path '/api'

import { Router } from 'express';
import { authCtrl } from '../controllers/auth.controller.js';
import { validateLogin, validateRegister } from '../utils/expressValidator.util.js';
import { applyExpressValidator } from '../middlewares/applyExpressValidator.middleware.js';
import { validateJWT } from '../middlewares/validateJWT.middleware.js';

export const authRouter = Router();

// Registrar ususarios
authRouter.post('/sign-up', [
    validateRegister,
    applyExpressValidator
], authCtrl.register);

// Iniciar sesión
authRouter.post('/sign-in', [
    validateLogin,
    applyExpressValidator
], authCtrl.login);

// Revalidar token
authRouter.get('/me', validateJWT, authCtrl.me);

// Cerrar sesión
authRouter.get('/sign-out', authCtrl.logout);