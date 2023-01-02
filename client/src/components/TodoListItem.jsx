import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoListItem({ id, isDone, title, handleToggle, handleDelete }) {
    return (
        <div id={id} className="rounded-lg  p-4 bg-foreground text-bright select-none">
            <div onClick={() => handleToggle(id)} className="flex">
                <div className={`w-2 h-2 rounded-full my-auto ${isDone ? 'bg-neutral' : 'bg-success'}`}></div>
                <span className={`my-auto ml-2 ${isDone ? 'line-through' : ''}`}>{title}</span>
                {/* delete icon */}
                <div
                    onClick={(e) => handleDelete(e, id)}
                    className="px-2 py-1 my-auto ml-auto cursor-pointer hover:bg-gray-50 rounded-full hover:text-error">
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </div>
    );
}

export default TodoListItem;
