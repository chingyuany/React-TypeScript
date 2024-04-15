import ToDo from "../models/todo";
import React, {useState } from "react";

type TodosContextObj = {
	items: ToDo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<ToDo[]>([]);
	const addTodoHandler = (todoText: string) => {
		const NewTodo = new ToDo(todoText);
		setTodos((prevTodos) => {
			return prevTodos.concat(NewTodo);
	});

	};
	const removeTodohandler = (todoId: string) =>{
	setTodos((prevTodos) => {
		return prevTodos.filter(todo => todo.id !== todoId);
	});
	};

	const contextValue:TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodohandler
	};


	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);

};


export  default TodosContextProvider;