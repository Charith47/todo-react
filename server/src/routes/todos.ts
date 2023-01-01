import { Router } from 'express';

import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

// get all todos
router.get('/', getAllTodos);

// create a new todo
router.post('/', createTodo);

// update a todo
router.patch('/:id', updateTodo);

// Delete a todo
router.delete('/:id', deleteTodo);

export default router;
