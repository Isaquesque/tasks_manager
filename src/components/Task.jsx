import { FiEye } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Task({task, onDelete}) {
    
    function jsonDateToDate(jsonDate) {
        const timestamp = Date.parse(jsonDate)
        return new Date(timestamp)
    }

    function formatDate(date) {
        const formatedDate = (date.getDate()) +"/"+ (date.getMonth()+1) +"/"+ (date.getFullYear())
        return formatedDate
    }

    const creationDate = jsonDateToDate(task.creationDate)
    const dueDate = jsonDateToDate(task.dueDate)
    
    return (
        <div className="w-full grid grid-cols-7 gap-4 py-4 px-8 border-b">
            <div className="flex">
                <p>{task.name}</p>
            </div>

            <div className="flex">
                <p>{task.priority}</p>
            </div>

            <div className="flex">
                <p>{task.status}</p>
            </div>

            <div className="flex">
                <p>{task.author}</p>
            </div>

            <div className="flex">
                <p>{formatDate(creationDate)}</p>
            </div>
            
            <div className="flex">
                <p>{formatDate(dueDate)}</p>
            </div>

            <div className="flex gap-4">
                <button 
                className="cursor-pointer"
                >
                    <Link to={"/detail/"+task.id}><FiEye/></Link>
                </button>

                <button 
                className="cursor-pointer"
                >
                    <Link to={"/edit/"+task.id}><FiEdit2/></Link>
                </button>

                <button 
                className="cursor-pointer"
                onClick={()=>{onDelete(task.id)}}
                >
                    <FiTrash/>
                </button>
            </div>
        </div>
    )
}