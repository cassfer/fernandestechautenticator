import express = require('express');
import AuthController from './controller/authcontroller';
const router = express.Router();

const authController = new AuthController();

router.get('/', authController.index);

router.get('/cria-autenticacao-segredo', authController.criaAutenticacaoSegredo.bind(authController));

router.post('/gera-autenticacao-qrcode', authController.geraAutenticacaoQrcode.bind(authController));

router.post('/gera-autenticacao-token', authController.geraAutenticacaoToken.bind(authController));

router.post('/autenticacao', authController.validaAutenticacao.bind(authController));

export default router;