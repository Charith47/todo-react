import { Request, Response } from 'express';
import mongoose from 'mongoose';

import Todo from '../models/todo';
import { getErrorMessage } from '../util/error-handler';

export const getAllTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        res.status(200).json(todos);
    } catch (error) {
        let msg = getErrorMessage(error);
        res.status(500).json({ error: msg });
    }
};

export const createTodo = async (req: Request, res: Response) => {
    const { title } = req.body;

    try {
        const todo = await Todo.create({ title });
        res.status(200).json(todo);
    } catch (error) {
        let msg = getErrorMessage(error);
        res.status(500).json({ error: msg });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { isDone } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Todo item not found' });
    }

    try {
        const todo = await Todo.findOneAndUpdate({ _id: id }, { isDone }, { new: true });

        console.log(todo?.toJSON());

        return res.status(200).json();
    } catch (error) {
        return res.sendStatus(500);
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Todo item not found' });
    }

    try {
        const todo = await Todo.findByIdAndDelete({ _id: id });
        res.status(200).json(todo);
    } catch (error) {
        let msg = getErrorMessage(error);
        res.status(500).json({ error: msg });
    }
};
