// path api/messages

import { Router } from 'express';
import { validateJWT } from '../middlewares/validateJWT.middleware.js';
import { messagesCtrl } from '../controllers/messages.controller.js';

export const messageRouter = Router();

messageRouter.get('/:de', validateJWT, messagesCtrl.getMessages);