import { Router } from 'express';
import {
  getAllNotionCompanies,
  getNotionCompanyById,
  postNotionCompany,
  putNotionCompany,
  deleteNotionCompany,
  getNotionCompaniesByCountry
} from '../controllers/notion.controllers.js';

const router = Router();

router.get('/', getAllNotionCompanies);
router.post('/', postNotionCompany);
router.get('/pais/:pais', getNotionCompaniesByCountry);
router.get('/:id', getNotionCompanyById);
router.put('/:id', putNotionCompany);
router.delete('/:id', deleteNotionCompany);

export default router;
