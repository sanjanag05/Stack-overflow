import Questions from '../models/Question.js';
import mongoose from 'mongoose';

export const askQuestion =  async(req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions({...postQuestionData})
    try {
        await postQuestion.save();
        res.status(200).json('Question posted succesfully') 
    } catch (error) {
        console.log(error);
        res.status(409).json('Couldn\'t post Question')
        
    }

}

export const getAllQuestions = async (req, res) =>{
    try {
        const questionsList = await  Questions.find();
        res.status(200).json(questionsList)
        
    } catch (error) {
        res.status(404).json({error: error.message});
        
    }
}

export const deleteQuestion = async (req, res) =>{
    const {id : _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable')
    }
    try {
        await Questions.findByIdAndRemove(_id);
        res.status(200).json({message :'succesfully deleted'})

    } catch (error) {
        res.status(404).json({message: error.message});
    }

}

export const voteQuestion = async (req, res) =>{
    const {id : _id} = req.params;
    const {value, userId} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable')
    }
    try {
        const question = await Questions.findById(_id)
        const upIndex = question.upVote.findIndex((id)=> id=== String(userId))
        const downIndex = question.downVote.findIndex((id)=> id=== String(userId))


        if(value === 'upVote'){
            if(downIndex !== -1){
                question.downVote = question.downVote.filter((id)=> id !== String(userId))
            }
            if(upIndex !== -1){
                question.upVote.push(userId)
            }else{
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
        }
        if(value === 'downVote'){
            if(upIndex !== -1){
                question.upVote = question.upVote.filter((id)=> id !== String(userId))
            }
            if(downIndex !== -1){
                question.downVote.push(userId)
            }else{
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
        }

        await Questions.findByIdAndUpdate(_id, question)
        res.status(200).json({message: 'Voted Succesfully'})
    } catch (error) {
        res.status(404).json({message: 'id not found'})
        
    }
}

/* await Questions.find() here  questions is question schema8*/
/* req.param is the parameter available in the url */