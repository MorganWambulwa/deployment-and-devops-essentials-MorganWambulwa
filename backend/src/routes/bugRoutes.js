import express from 'express';
import { getBugs, addBug, updateBug, deleteBug } from '../controllers/bugController.js';

const router = express.Router();

router.get('/', getBugs);
router.post('/', addBug);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);

export default router;
