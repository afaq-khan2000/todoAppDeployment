import GenericService from "./GenericService";
class TodosService extends GenericService {
  constructor() {
    super();
  }
  addTodo = (data) => this.post("todos", data);
  deleteTodo = (_id) => this.delete("todos/" + _id);
  updateTodo = (_id, data) => this.put("todos/" + _id, data);
  getTodos = (page = 1, perPage = 10) =>
    this.get("todos?page=" + page + "&perPage=" + perPage);
  getSingleTodo = (id) => this.get("todos/" + id);
}

let todoService = new TodosService();
export default todoService;
