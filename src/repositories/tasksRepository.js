class TasksRepository{
    constructor() {
        const strKeys = localStorage.getItem("keys")

        if(!strKeys){
            const keys = []
            localStorage.setItem("keys", JSON.stringify(keys))
        }

        const strTasks = localStorage.getItem("tasks")

        if(!strTasks){
            const tasks = []
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }

    _getKeys(){
        const strKeys = localStorage.getItem("keys")
        return JSON.parse(strKeys)
    }

    _createId(){
        const keys = this._getKeys()

        if(keys.length == 0)
            return 0

        return keys[keys.length-1] + 1
    }
    
    addTask(taskData){
        const keys = this._getKeys()
        const newKey = this._createId()
        
        keys.push(newKey)
        taskData.id = newKey

        localStorage.setItem("keys", JSON.stringify(keys))
        localStorage.setItem(String(taskData.id), JSON.stringify(taskData))
    }

    deleteTask(taskId){
        const keys = this._getKeys()

        const newKeys = keys.filter((key)=> key !== taskId)

        localStorage.setItem("keys", JSON.stringify(newKeys))
    }

    updateTask(taskData){
        localStorage.setItem(String(taskData.id), JSON.stringify(taskData))
    }

    getTask(taskId){
        const strTask = localStorage.getItem(String(taskId))
        return JSON.parse(strTask)
    }

    getTasks(){
        const keys = this._getKeys()

        return keys.map((key)=> this.getTask(key))
    }
}

export default TasksRepository;