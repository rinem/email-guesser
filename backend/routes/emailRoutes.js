import express from 'express';
import emailController from '../controllers/emailController.js';

const router = express.Router();

router.post('/derive', emailController.getEmail);

export default router;

