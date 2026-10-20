import { FiCheck, FiEye, FiEdit2, FiTrash, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Task({task, onDelete, onComplete, onCancel}) {
    
    const priorityStyles = {
        "Baixa": "bg-[#eff8f3] text-[#438665]",
        "Media": "bg-[#fff7e9] text-[#b77b23]",
        "Alta": "bg-[#fff0ef] text-[#cf6258]"
    }
    const statusStyles = {
        "Pendente": "bg-[#f1f2f6] text-[#677286]",
        "Concluida": "bg-[#eaf7f0] text-[#438665]",
        "Cancelada": "bg-[#fff0ef] text-[#bf625a]"
    }
    
    return (
        <div className="grid min-h-[69px] grid-cols-[minmax(170px,1.55fr)_minmax(95px,0.8fr)_minmax(105px,0.9fr)_minmax(120px,1fr)_minmax(112px,0.95fr)_minmax(112px,0.95fr)_164px] items-center gap-[15px] border-t border-[#f0f1f5] px-[22px] text-[0.79rem] text-[#566176]">
            <div className="flex min-w-0 items-center gap-[10px]">
                <span className="grid size-[33px] shrink-0 place-items-center rounded-[9px] bg-[#f0efff] text-[0.81rem] font-bold text-[var(--primary)]">{task.title?.charAt(0)?.toUpperCase() || "T"}</span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-[#30394e]">{task.title}</span>
            </div>
            <div>
                <span className={`inline-flex min-h-6 items-center gap-1.5 rounded-full px-2 text-[0.71rem] font-semibold whitespace-nowrap ${priorityStyles[task.priority] || priorityStyles.baixa}`}>
                    <span className="size-1.5 rounded-full bg-current" />
                    {task.priority}
                </span>
            </div>
            <div>
                <span className={`inline-flex min-h-6 items-center rounded-full px-2 text-[0.71rem] font-semibold whitespace-nowrap ${statusStyles[task.status] || statusStyles.pending}`}>
                    {task.status}
                </span>
            </div>
            <div className="flex min-w-0 items-center gap-[10px]">
                <span className="inline-grid size-[25px] shrink-0 place-items-center rounded-full bg-[#f2edff] text-[0.65rem] font-bold text-[#8061c7]">{task.author?.charAt(0)?.toUpperCase() || "?"}</span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">{task.author}</span>
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <p className="m-0">{task.creationDate}</p>
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <p className="m-0">{task.dueDate}</p>
            </div>
            <div className="flex items-center gap-px">
                <Link className="inline-grid size-[30px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#f1f2f7] hover:text-[var(--ink)]" to={"/detail/"+task.id} aria-label={`Ver tarefa ${task.title}`}><FiEye /></Link>
                <Link className="inline-grid size-[30px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#f1f2f7] hover:text-[var(--ink)]" to={"/edit/"+task.id} aria-label={`Editar tarefa ${task.title}`}><FiEdit2 /></Link>
                <button 
                    className="inline-grid size-[30px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#fff0ef] hover:text-[#c6534b]" 
                    type="button" 
                    onClick={()=>{onDelete(task.id)}} 
                    aria-label={`Excluir tarefa ${task.title}`}
                >
                    <FiTrash/>
                </button>
                {task.status === "Pendente" && (
                    <>
                        <button
                            className="inline-grid size-[30px] place-items-center rounded-lg text-[#438665] transition-colors hover:bg-[#eaf7f0]"
                            type="button"
                            aria-label={`Concluir tarefa ${task.title}`}
                            title="Concluir tarefa"
                            onClick={()=>{onComplete(task.id)}}
                        >
                            <FiCheck />
                        </button>
                        <button
                            className="inline-grid size-[30px] place-items-center rounded-lg text-[#bf625a] transition-colors hover:bg-[#fff0ef]"
                            type="button"
                            aria-label={`Cancelar tarefa ${task.title}`}
                            title="Cancelar tarefa"
                            onClick={()=>{onCancel(task.id)}}
                        >
                            <FiX />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}