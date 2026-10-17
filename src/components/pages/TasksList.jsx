import { Link } from "react-router-dom"
import { useState} from "react"
import Task from "../Task"

export default function TasksList() {
    const [tasks, setTasks] = useState(getTasks())

    function getTasks() {
        const tasks = localStorage.getItem("tasks")

        if(tasks){
            return JSON.parse(tasks)
        }
        
        return []
    }

    function deleteTask(id) {
        const newTasks = tasks.filter((t)=> t.id !== id)
        localStorage.setItem("tasks", JSON.stringify(newTasks))
        setTasks(newTasks)
    }

    return (
        <>
            <h1 className="text-3xl font-bold">Tasks</h1>

            {/* categories */}
            <div className="w-full flex flex-row gap-4 py-6">

                <button 
                className="font-mono font-semibold cursor-pointer py-2 px-4 rounded bg-blue-500"
                >
                Assigned Taks
                </button>
                <button 
                className="font-mono font-semibold cursor-pointer py-2 px-4 rounded bg-blue-500"
                >
                Accepted Tasks
                </button>
                <button 
                className="font-mono font-semibold cursor-pointer py-2 px-4 rounded bg-blue-500"
                >
                Review Tasks
                </button>
                
            </div>


            {/* filter */}
            <div className="w-full flex flex-row py-6 justify-between">
                
                <div className="flex gap-4">
                <input 
                    name="task_date" 
                    id="task_date" 
                    type="date" 
                    className="border rounded py-2 px-4"
                />
                <select 
                    name="task_status" 
                    id="status"
                    className="border rounded py-2 px-4"
                >
                    <option value="complete">Complete</option>
                    <option value="pending">Pending</option>
                    <option value="canceled">Canceled</option>
                </select>


                <button
                    className="font-mono font-semibold cursor-pointer py-2 px-4 rounded bg-blue-500"
                >
                    Filter
                </button>
                </div>

                <div>
                <button
                    className="font-mono font-semibold cursor-pointer py-2 px-4 rounded bg-blue-500"
                >
                    <Link to="/create">Create New Task</Link>
                    
                </button>
                </div>
            </div>


            {/* tasks list container*/}
            <div className="grow">
                {/* task list */}

                {/* task list header */}
                <div className="w-full grid grid-cols-7 gap-4 py-4 px-8 bg-[#ddd]">
                    <div>
                        <p className="font-mono font-semibold">Title</p>
                    </div>

                    <div className="font-mono font-semibold">
                        <p>Priority</p>
                    </div>

                    <div className="font-mono font-semibold">
                        <p>Status</p>
                    </div>

                    <div className="font-mono font-semibold">
                        <p>Created By</p>
                    </div>

                    <div className="font-mono font-semibold">
                        <p>Date Assigned</p>
                    </div>
                    
                    <div className="font-mono font-semibold">
                        <p>Due Date</p>
                    </div>

                    <div className="font-mono font-semibold">
                        <p>Actions</p>
                    </div>
                </div>

                {tasks.map((task, index)=>{
                    return <Task task={task} onDelete={deleteTask} key={index} />
                })}
            </div>
        </>
    )
}