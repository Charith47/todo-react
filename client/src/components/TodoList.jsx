import TodoListItem from './TodoListItem';

function TodoList() {
    // use a map :)
    const toDoItems = [
        {
            id: '1',
            title: 'Go to sleep at 11 pm',
            isDone: false,
        },
        {
            id: '2',
            title: 'Do assignment 1',
            isDone: false,
        },
        {
            id: '3',
            title: 'Brush up basics',
            isDone: true,
        },
    ];

    const handleToggle = (id) => {
        // flip state
        console.log(id);
    };

    const listItems = toDoItems.map((item) => {
        return (
            <TodoListItem
                key={item.id}
                id={item.id}
                title={item.title}
                isDone={item.isDone}
                handleToggle={handleToggle}></TodoListItem>
        );
    });

    return (
        <div className="max-w-xl mx-auto p-4 h-full">
            <h1 className="text-3xl text-info font-bold text-center">Todo list 📃</h1>
            <div className="py-8 space-y-4">{listItems}</div>
        </div>
    );
}

export default TodoList;
