import TaskForm from "../TaskForm"
import { useParams } from "react-router-dom"

export default function TaskEdit() {
    const {id} = useParams()
    const taskData = getTasks()[id]

    function getTasks() {
        const tasks = localStorage.getItem("tasks")

        if(tasks){
            return JSON.parse(tasks)
        }
        
        return []
    }
    
    function editTask(newTaskData) {

        const updatedTask = {
            id: id,
            name: newTaskData? newTaskData.name: taskData.name,
            description: newTaskData? newTaskData.description: taskData.description,
            priority: newTaskData? newTaskData.priority: taskData.priority,
            status:"pending",
            author: "isaque",
            creationDate: taskData.creationDate,
            dueDate: taskData.dueDate
        }

        const tasks = getTasks()
        tasks[id] = updatedTask

        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-900">
                Editar task
            </h1>
            <TaskForm taskData={taskData} onSubmit={editTask}/>
        </>
    )
}