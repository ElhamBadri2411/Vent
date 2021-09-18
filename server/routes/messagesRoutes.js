import express from 'express';
import { getMessage, createMessage } from '../controllers/messagesControllers.js'


const router = express.Router();
// put all routes in here

router.get('/', getMessage);
router.post('/', createMessage);


export default router;