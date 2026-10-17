import { useParams } from "react-router-dom"

export default function TaskDetail() {
    const {id} = useParams()

    function getTasks() {
        const tasks = localStorage.getItem("tasks")

        if(tasks){
            return JSON.parse(tasks)
        }
        
        return []
    }

    const task = getTasks()[id]

    return (
        <>
            <h1 className="text-3xl font-bold">Task {task.name}</h1>

            <div className="flex gap-4 content-end">
                <h1 className="text-xl font-bold">created by: </h1>
                <p className="font-mono">{task.author}</p>
            </div>

            <div className="flex gap-4 content-end">
                <h1 className="text-xl font-bold">Description: </h1>
                <p className="font-mono">{task.description}</p>
            </div>

            <div className="flex gap-4 content-end">
                <h1 className="text-xl font-bold">Status: </h1>
                <p className="font-mono">{task.status}</p>
            </div>

            <div className="flex gap-4 content-end">
                <h1 className="text-xl font-bold">Priority: </h1>
                <p className="font-mono">{task.priority}</p>
            </div>

            <div className="flex gap-4 content-end">
                <h1 className="text-xl font-bold">Creation Date: </h1>
                <p className="font-mono">{task.creationDate}</p>
            </div>

            <div className="flex gap-4 content-end">
                <h1 className="text-xl font-bold">Due Date: </h1>
                <p className="font-mono">{task.dueDate}</p>
            </div>
            
        </>
        
    )
}