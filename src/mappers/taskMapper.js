import Task from "../models/taskModel"

const PRIORITY_TO_VIEW = {
    "L": "Baixa",
    "M": "Media",
    "H": "Alta"
}

const STATUS_TO_VIEW = {
    "P": "Pendente",
    "D": "Concluida",
    "C": "Cancelada"
}

function _dateToStorage(date) {
    const strDay = String(date.getDate()).padStart(2, "0")
    const strMonth = String(date.getMonth()).padStart(2, "0")
    const strYear = String(date.getFullYear())


    return strDay+strMonth+strYear
}

function _storageToDate(storageDate) {

    const strDay = storageDate.substring(0, 2)
    const strMonth = storageDate.substring(2, 4)
    const strYear = storageDate.substring(4, 8)

    return new Date(strYear, strMonth, strDay)
}

function _dateToView(date) {
    const strDay = String(date.getDate()).padStart(2, "0")
    const strMonth = String(date.getMonth() + 1).padStart(2, "0")
    const strYear = String(date.getFullYear())


    return strDay+"/"+strMonth+"/"+strYear
}

export function taskModelToStorage(taskModel) {
  return {
    id: taskModel.id,
    title: taskModel.title,
    description: taskModel.description,
    priority: taskModel.priority,
    status: taskModel.status,
    author: taskModel.author,
    creationDate: _dateToStorage(taskModel.creationDate),
    dueDate: _dateToStorage(taskModel.dueDate)
  };
}

export function storageToTaskModel(taskData) {

  return new Task(
    taskData.id,
    taskData.title,
    taskData.description,
    taskData.priority,
    taskData.status,
    taskData.author,
    _storageToDate(taskData.creationDate),
    _storageToDate(taskData.dueDate)
  )
  
}

export function taskModelToView(taskModel) {
  return {
    id: taskModel.id,
    title: taskModel.title,
    description: taskModel.description,
    priority: PRIORITY_TO_VIEW[taskModel.priority],
    status: STATUS_TO_VIEW[taskModel.status],
    author: taskModel.author,
    creationDate: _dateToView(taskModel.creationDate),
    dueDate: _dateToView(taskModel.dueDate)
  };
}