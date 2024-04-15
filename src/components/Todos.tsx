import React from "react";
import ToDo from "../models/todo";
import TodoItem from "./ToDoItem";
const Todos: React.FC<{items: ToDo[]}> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<TodoItem key={item.id} text={item.text} />
			))}
		</ul>
	)
}

export default Todos;