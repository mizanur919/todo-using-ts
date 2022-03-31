import React from 'react';
import { ITask } from '../../Interfaces';
import './TodoTask.css';

// interface iTask {
//     task?: string;
// }
interface Props {
    task: ITask;
    completeTask(taskNameToDelete: String): void;
}
const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="display-area">
            <span className="display-todo">
                {task?.taskName}
            </span>
            <span className="display-todo">
                {task?.deadline}
            </span>
            <span>
                <button onClick={() => {
                    completeTask(task?.taskName)
                }} className="todo-btn">X</button>
            </span>
        </div>
    )
}

export default TodoTask