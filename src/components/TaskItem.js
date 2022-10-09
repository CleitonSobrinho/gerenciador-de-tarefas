import { useEffect} from "react";
const TaskItem = ({task}) => {
      useEffect(( ) => {
        console.log("Component was mounted");
        return (
          console.log('i will unmount!')
        )
      })
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted? "Completa" : "Incompleta"}</p>
        </>
    )
};


export default TaskItem;