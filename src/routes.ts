import express from 'express';
import UserController from './controllers/UserController';

export const router = express.Router();

router.post('/NOME_DA_ROTA', UserController.create);
router.get('/NOME_DA_ROTA', UserController.findAll); //getAll
router.get('/NOME_DA_ROTA/:id', UserController.findOne); //getOne
router.put('/NOME_DA_ROTA/:id', UserController.update);
router.delete('/NOME_DA_ROTA/:id', UserController.delete);