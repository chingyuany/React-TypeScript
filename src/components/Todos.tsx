import React from "react";
import ToDo from "../models/todo";
import TodoItem from "./ToDoItem";
import classes from './Todos.module.css';
const Todos: React.FC<{items: ToDo[]; onRemoveTodo: (id:string) => void}> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>
			))}
		</ul>
	)
}

export default Todos;