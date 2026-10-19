import {taskModelToStorage, storageToTaskModel} from "../mappers/taskMapper"

class TasksRepository{
    constructor() {
        const strKeys = localStorage.getItem("keys")

        if(!strKeys){
            const keys = []
            localStorage.setItem("keys", JSON.stringify(keys))
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
    
    addTask(taskModel){
        const keys = this._getKeys()
        const newKey = this._createId()
        keys.push(newKey)
        
        taskModel.id = newKey
        const storageTask = taskModelToStorage(taskModel)
        

        localStorage.setItem("keys", JSON.stringify(keys))
        localStorage.setItem(String(storageTask.id), JSON.stringify(storageTask))
    }

    deleteTask(taskId){
        const keys = this._getKeys()

        const newKeys = keys.filter((key)=> key !== taskId)

        localStorage.setItem("keys", JSON.stringify(newKeys))
    }

    updateTask(taskModel){
        const storageTask = taskModelToStorage(taskModel)

        localStorage.setItem(String(storageTask.id), JSON.stringify(storageTask))
    }

    getTask(taskId){
        const strStorageTask = localStorage.getItem(String(taskId))
        const storageTask = JSON.parse(strStorageTask)
        return storageToTaskModel(storageTask)
    }

    getTasks(){
        const keys = this._getKeys()

        return keys.map((key)=> this.getTask(key))
    }
}

export default TasksRepository;