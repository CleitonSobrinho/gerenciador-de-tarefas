import { useState, useEffect, useMemo, useCallback } from 'react'
import axios from 'axios'
import { useAlert } from 'react-alert'

import './Tasks.scss'

import TaskItem from './TaskItem'
import AddTask from './AddTask'

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  const alert = useAlert()

  const fechTasks = useCallback(async () => {
    try {
      const { data } = await axios.get('https://fsc-task-manager-backend.herokuapp.com/tasks')
      setTasks(data)
    } catch (error) {
      alert.error('Não foi possível recuperar as tarefas.')
    }
  }, [alert])

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === false)
  }, [tasks])

  const completedTask = useMemo(() => {
    return tasks.filter((task) => task.isCompleted === true)
  }, [tasks])

  useEffect(() => {
    fechTasks()
  }, [fechTasks])

  return (
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>
            <div className="last-tasks">
                <h3>Últimas tarefas</h3>
                <AddTask fechTasks={fechTasks} />
                <div className="tasks-list">
                    {lastTasks.map((lastTask) => (
                        <TaskItem key={lastTask._id} task={lastTask} fechTasks={fechTasks} />
                    ))}
                </div>

            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluídas</h3>
                <div className="tasks-list">
                    {completedTask.map((completedTask) => (
                        <TaskItem key={completedTask._id} task={completedTask} fechTasks={fechTasks} />
                    ))}
                </div>
            </div>

        </div>
  )
}

export default Tasks
