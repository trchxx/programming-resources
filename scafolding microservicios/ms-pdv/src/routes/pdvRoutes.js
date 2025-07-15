import express from 'express';
import {createPdv, getAllPdvs} from '../controllers/pdvController.js';

const router = express.Router();

router.post('/', createPdv);
router.get('/', getAllPdvs);

export default router;