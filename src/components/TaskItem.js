const TaskItem = ({task}) => {
    return (
        <>
            <h1>{task.description}</h1>
            <p>{task.isCompleted? "Completa" : "Incompleta"}</p>
        </>
    )
};


export default TaskItem;