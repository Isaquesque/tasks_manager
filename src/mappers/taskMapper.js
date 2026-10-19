import Task from "../models/taskModel"
import { DateMapper } from "./dateMapper";

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

function toStorageFormat(taskModel) {
  return {
    id: taskModel.id,
    title: taskModel.title,
    description: taskModel.description,
    priority: taskModel.priority,
    status: taskModel.status,
    author: taskModel.author,
    creationDate: DateMapper.toStorageFormat(taskModel.creationDate),
    dueDate: DateMapper.toStorageFormat(taskModel.dueDate)
  };
}

function fromStorageFormat(taskData) {

  return new Task(
    taskData.id,
    taskData.title,
    taskData.description,
    taskData.priority,
    taskData.status,
    taskData.author,
    DateMapper.fromStorageFormat(taskData.creationDate),
    DateMapper.fromStorageFormat(taskData.dueDate)
  )
  
}

function toTaskViewFormat(taskModel) {
  return {
    id: taskModel.id,
    title: taskModel.title,
    description: taskModel.description,
    priority: PRIORITY_TO_VIEW[taskModel.priority],
    status: STATUS_TO_VIEW[taskModel.status],
    author: taskModel.author,
    creationDate: DateMapper.toDateViewFormat(taskModel.creationDate),
    dueDate: DateMapper.toDateViewFormat(taskModel.dueDate)
  };
}

export const TaskMapper = {
  toStorageFormat: toStorageFormat,
  fromStorageFormat: fromStorageFormat,
  toTaskViewFormat: toTaskViewFormat
}