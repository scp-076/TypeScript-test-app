import React from 'react';
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[];
    onToggle(id: number): void; // like this
    onRemove: (id: number) => void // or like that
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    if (props.todos.length === 0) {
        return <p className="center">No todos</p>
    }

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        props.onRemove(id);
    }

    return (
        <ul>
            {props.todos.map(todo => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed');
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed}
                                   onChange={props.onToggle.bind(null, todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={(e) => removeHandler(e, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}