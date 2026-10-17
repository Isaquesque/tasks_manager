import TaskForm from "../TaskForm"

export default function TaskCreate() {

    function getTasks() {
        const tasks = localStorage.getItem("tasks")

        if(tasks){
            return JSON.parse(tasks)
        }
        
        return []
    }
    
    function createTask(taskData) {
        
        const tasks = getTasks()

        const task = {
            id: tasks.length,
            name: taskData.name,
            description: taskData.description,
            priority: taskData.priority,
            status:"pending",
            author: "isaque",
            creationDate: new Date(),
            dueDate: new Date()
        }

        tasks.push(task)

        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-gray-900">
                Cadastrar task
            </h1>
            <TaskForm onSubmit={createTask}/>
        </>
        

        
    )
}