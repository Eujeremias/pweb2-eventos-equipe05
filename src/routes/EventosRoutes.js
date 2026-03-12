import express from "express";
import { EventosController } from "../controllers/EventosController.js";

const router = express.Router();

// Rotas estáticas devem vir ANTES das rotas com parâmetro dinâmico (:id)
router.get('/ativos', EventosController.listarEventosAtivos);
router.get('/filtrar', EventosController.getAllEvents);

// Rotas Inicias - Listar | Listar por Id | Criar Evento
router.get('/', EventosController.listarEventos);
router.post('/', EventosController.criarEvento);
router.get('/:id', EventosController.listarEventosPorId);

// Rotas Intermediárias - Atualizar | Remover
router.put('/:id', EventosController.atualizarEvento);
router.delete('/:id', EventosController.removerEvento);

// Última Rotas - Realiza Inscrição | Cancela Evento
router.patch('/:id/cancelar', EventosController.cancelarEvento);
router.post('/:id/inscricao', EventosController.inscricaoEvento);

export { router as EventosRoutes };