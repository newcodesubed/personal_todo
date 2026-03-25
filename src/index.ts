
import { createDay, getDays } from "./repositories/day.repository";
import { createTodo, getTodosByDay, updateTodo, deleteTodo, getTodosByDate, getTodoStatsByDate } from "./repositories/todo.repository";

const start = async () => {
  // const newTodo = await createTodo('1', 'go to gym');
  // console.log("Inserted", newTodo);
  // const todos = await getTodosByDay(1);
  // console.log("All todos", todos);
  // const updatedTodo = await updateTodo(2, 'Buy milks', true);
  // console.log("Updated", updatedTodo);
  // const deletedTodo = await deleteTodo('1');
  // console.log("Deleted", deletedTodo);
  // const todos = await getTodosByDate("2026-03-25");
  // console.log(todos);
  const stats = await getTodoStatsByDate("2026-03-25");
  console.log(stats);

};

start();