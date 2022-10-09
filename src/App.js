
import { useEffect, useState} from "react";
import axios, { Axios } from "axios";


import TaskItem from "./components/TaskItem";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar programação.",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Ler",
      isCompleted: true,
    }]);

    const fechTasks = async ( ) => {
      try {
        const {data} = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks")
        setTasks(data)
      } catch (error) {
        console.log(error)
      }
  }
    
    useEffect(( ) => {
      fechTasks()
    }, [])

   
  return (
    <>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))};
    </>
  )
};



export default App;
