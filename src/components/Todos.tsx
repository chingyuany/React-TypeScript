import React from "react";
import ToDo from "../models/todo";
import TodoItem from "./ToDoItem";
import classes from './Todos.module.css';
const Todos: React.FC<{items: ToDo[]}> = (props) => {
	return (
		<ul className={classes.todos}>
			{props.items.map((item) => (
				<TodoItem key={item.id} text={item.text} />
			))}
		</ul>
	)
}

export default Todos;