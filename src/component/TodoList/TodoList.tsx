import React, { ChangeEvent, FC, useState } from 'react';
import TodoTask from '../TodoTask/TodoTask';
import './TodoList.css';
import { ITask } from "../../Interfaces";

// interface iTask {
//     taskName: string,
//     deadline: number,
// }
const TodoList: FC = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDeadline(Number(event.target.value))
        }

    }

    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline }
        setTodoList([...todoList, newTask])
        setTask("")
        setDeadline(0)
        console.log(task, deadline)
        localStorage.setItem(task, JSON.stringify(deadline))

    }

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName !== taskNameToDelete
        }));
    };
    return (
        <div>
            <h2>My Todo List</h2>
            <div className="input-area">
                <input className="custom-style" type="text" name="task" value={task} placeholder="Task Here" onChange={handleChange} /><br />
                <input className="custom-style" type="number" name="deadline" value={deadline} placeholder="Deadline" onChange={handleChange} /><br />
                <button className="custom-style button-style" onClick={addTask}>Add Task</button>
            </div>
            <div>
                {
                    todoList.map((task: ITask, key: number) => {
                        return <TodoTask key={key} task={task} completeTask={completeTask} />
                    })
                }
            </div>
        </div>
    )
}

export default TodoList