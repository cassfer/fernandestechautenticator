import express = require('express');
import AuthService from '../service/authservice';
export default class AuthController {

    private authService;

    constructor() {
        this.authService = new AuthService();
    }

    public async index(req: express.Request, res: express.Response): Promise<void> {
        res.json({ 'method': "index", 'response': "Server is up!" });
    }

    public async criaAutenticacaoSegredo(req: express.Request, res: express.Response): Promise<void> {
        const response = this.authService.criaAutenticacaoSegredo();
        res.json({ 'method': "criaAutenticacao", 'response': response });
    }

    public async geraAutenticacaoQrcode(req: express.Request, res: express.Response): Promise<void> {
        const response = this.authService.geraAutenticacaoQrcode(req.body.segredo, req.body.user);
        res.json({ 'method': "criaAutenticacao", 'response': response });
    }

    public async geraAutenticacaoToken(req: express.Request, res: express.Response): Promise<void> {
        const response = this.authService.geraAutenticacaoToken(req.body.segredo, req.body.user);
        res.json({ 'method': "criaAutenticacao", 'token': response });
    }

    public async validaAutenticacao(req: express.Request, res: express.Response): Promise<void> {
        const response = this.authService.confirmaAutenticacaoToken(req.body.token, req.body.segredo);
        res.json({ 'method': "criaAutenticacao", 'Autenticado': response });
    }

    

}