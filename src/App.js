
import { useState, useEffect, useRef } from "react";
import TaskItem from "./components/TaskItem";


function App() {
    const mounted = useRef(false);
        useEffect(( ) => {
          if (mounted.current === false) {
              mounted.current = true ;
          } else {
            console.log("component was updated!")
          }
        })
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

      const hendleClearTasks = () => {
        setTasks([ ]);
      }
      
      return(
        <>
          {tasks.map((task)=> (
             <TaskItem task={task} key={task.id}/>
          ))};
          <button onClick={hendleClearTasks}>Clicar</button>
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
