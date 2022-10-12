import { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

import "./Tasks.scss"

import TaskItem from "./TaskItem";
import AddTask from "./AddTask"



const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const alert = useAlert();

    const fechTasks = async () => {
        try {
            const { data } = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")
            setTasks(data)
        } catch (error) {
            alert.error("Não foi possível recuperar as tarefas.")
        }
    }

    useEffect(() => {
        fechTasks()
    }, [])

    return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask  fechTasks={fechTasks}/>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem key={lastTask._id} task={lastTask} fechTasks={fechTasks} />
                        ))}
                </div>

            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {tasks
                        .filter((task) => task.isCompleted === true)
                        .map((completedTask) => (
                            <TaskItem key={completedTask._id} task={completedTask} fechTasks={fechTasks}/>
                        ))}
                </div>
            </div>

        </div>
    );
};



export default Tasks;