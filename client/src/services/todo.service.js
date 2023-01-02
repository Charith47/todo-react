import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

class TodoService {
    async getTodoList() {
        try {
            const response = await http.get('todos/');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch todo list', { cause: error });
        }
    }

    async addTask(title) {
        try {
            const response = await http.post('todos/', {
                title,
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to add task', { cause: error });
        }
    }

    async updateTask({ id, isDone }) {
        try {
            const response = await http.patch(`todos/${id}`, { isDone });
            return response.data;
        } catch (error) {
            throw new Error('Failed to update task', { cause: error });
        }
    }

    async deleteTask(id) {
        try {
        } catch (error) {}
    }
}

export default new TodoService();
