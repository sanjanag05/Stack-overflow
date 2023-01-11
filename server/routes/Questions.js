import express from 'express'

import { askQuestion ,getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/Questions.js';
// import auth from '../middleware/auth.js'





const router = express.Router();
router.post('/ask', askQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id', deleteQuestion);
router.patch('/vote/:id', voteQuestion);


export default router;