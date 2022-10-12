import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";
import axios from "axios";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";



const AddTask = ({fechTasks}) => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0){
                return alert.error("A tarefa precisa de uma descrição para ser adcionada." );
            }
            await axios.post("https://fsc-task-manager-backend.herokuapp.com/tasks", {
                description: task,
                isCompleted: false,
            });
            await fechTasks();

            setTask("");

        } catch (error) {
            alert.error("Algo deu errado.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar Tarefa..."
                value= {task}
                onChange={onChange} />

            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    )
};



export default AddTask;