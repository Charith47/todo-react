import { useState, useEffect } from 'react';
import TodoListItem from './TodoListItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

import todoService from '../services/todo.service';

function TodoList() {
    const [isLoading, setLoadingStatus] = useState(true);
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todos = await todoService.getTodoList();
                setTodoItems(todos);

                setLoadingStatus(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTodos();
    }, []);

    const handleToggle = async (id) => {
        const arr = [...todoItems];
        const idx = arr.findIndex((item) => item.id === id);

        try {
            const task = arr[idx];
            const item = await todoService.updateTask({ id: task.id, isDone: !task.isDone });

            console.log(item)

            arr[idx] = item;
            setTodoItems(arr);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = (e, id) => {
        e.stopPropagation();
        let arr = [...todoItems];
        arr = arr.filter((item) => item.id !== id);
        setTodoItems(arr);
    };

    const addTask = async () => {
        const task = prompt('Add new task');

        if (task) {
            try {
                const newTask = await todoService.addTask(task);
                let arr = [...todoItems, newTask];

                setTodoItems(arr);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const listItems = todoItems.map((item) => {
        return (
            <TodoListItem
                key={item.id}
                id={item.id}
                title={item.title}
                isDone={item.isDone}
                handleToggle={handleToggle}
                handleDelete={handleDelete}></TodoListItem>
        );
    });

    return (
        <div className="max-w-xl mx-auto p-4 h-full relative">
            <h1 className="text-3xl text-info font-bold text-center">Todo list 📃</h1>

            {isLoading ? (
                <div className="absolute left-1/2 top-1/2 -m-4">
                    <span className="text-white text-lg">
                        <FontAwesomeIcon
                            className="animate-spin text-neutral"
                            icon={faSpinner}
                            size="2xl"></FontAwesomeIcon>
                    </span>
                </div>
            ) : (
                <div className="py-8 space-y-4">{listItems}</div>
            )}

            <div className="flex absolute bottom-10 right-4">
                <button
                    onClick={() => addTask()}
                    aria-label="New task"
                    type="button"
                    className="mx-auto bg-info hover:bg-primary text-white p-4 rounded-full w-16 h-16 max-w-sm uppercase">
                    <FontAwesomeIcon icon={faPlus} size="2xl" />
                </button>
            </div>
        </div>
    );
}

export default TodoList;
