import {useState} from "react"
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
      return(
        <>
          {tasks.map((task, index)=> (
             <TaskItem task={task} key={index}/>
          ))};
        </>
      )
};
  /*  const [message, setMessage] = useState('Hello word!')

    const rendleChangeMessage = () => {
        setMessage('Olá mundo!');

    };
return(
  <>
    <h1>{message}</h1>
    <button onClick={rendleChangeMessage}>Change message</button>
  </>
)
 */


  


export default App;
