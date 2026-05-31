import express from 'express';
import {
  crearNotion,
  obtenerNotions,
  obtenerNotionPorId,
  actualizarNotion,
  eliminarNotion
} from '../controllers/notion.controllers.js';

const router = express.Router();

router.post('/', crearNotion);
router.get('/', obtenerNotions);
router.get('/:id', obtenerNotionPorId);
router.put('/:id', actualizarNotion);
router.delete('/:id', eliminarNotion);

export default router;
