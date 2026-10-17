import { FiEye, FiEdit2, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Task({task, onDelete}) {
    
    function jsonDateToDate(jsonDate) {
        const timestamp = Date.parse(jsonDate)
        return new Date(timestamp)
    }

    function formatDate(date) {
        return Number.isNaN(date.getTime())
            ? "—"
            : new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(date)
    }

    const creationDate = jsonDateToDate(task.creationDate)
    const dueDate = jsonDateToDate(task.dueDate)
    const priorityStyles = {
        baixa: "bg-[#eff8f3] text-[#438665]",
        media: "bg-[#fff7e9] text-[#b77b23]",
        alta: "bg-[#fff0ef] text-[#cf6258]"
    }
    const statusStyles = {
        pending: "bg-[#f1f2f6] text-[#677286]",
        complete: "bg-[#eaf7f0] text-[#438665]",
        canceled: "bg-[#fff0ef] text-[#bf625a]"
    }
    
    return (
        <div className="grid min-h-[69px] grid-cols-[minmax(170px,1.55fr)_minmax(95px,0.8fr)_minmax(105px,0.9fr)_minmax(120px,1fr)_minmax(112px,0.95fr)_minmax(112px,0.95fr)_104px] items-center gap-[15px] border-t border-[#f0f1f5] px-[22px] text-[0.79rem] text-[#566176]">
            <div className="flex min-w-0 items-center gap-[10px]">
                <span className="grid size-[33px] shrink-0 place-items-center rounded-[9px] bg-[#f0efff] text-[0.81rem] font-bold text-[var(--primary)]">{task.name?.charAt(0)?.toUpperCase() || "T"}</span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-[#30394e]">{task.name}</span>
            </div>
            <div>
                <span className={`inline-flex min-h-6 items-center gap-1.5 rounded-full px-2 text-[0.71rem] font-semibold whitespace-nowrap ${priorityStyles[task.priority] || priorityStyles.baixa}`}>
                    <span className="size-1.5 rounded-full bg-current" />
                    {task.priority === "alta" ? "Alta" : task.priority === "media" ? "Média" : "Baixa"}
                </span>
            </div>
            <div>
                <span className={`inline-flex min-h-6 items-center rounded-full px-2 text-[0.71rem] font-semibold whitespace-nowrap ${statusStyles[task.status] || statusStyles.pending}`}>
                    {task.status === "complete" ? "Concluída" : task.status === "canceled" ? "Cancelada" : "Pendente"}
                </span>
            </div>
            <div className="flex min-w-0 items-center gap-[10px]">
                <span className="inline-grid size-[25px] shrink-0 place-items-center rounded-full bg-[#f2edff] text-[0.65rem] font-bold text-[#8061c7]">{task.author?.charAt(0)?.toUpperCase() || "?"}</span>
                <span className="overflow-hidden text-ellipsis whitespace-nowrap">{task.author}</span>
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <p className="m-0">{formatDate(creationDate)}</p>
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <p className="m-0">{formatDate(dueDate)}</p>
            </div>
            <div className="flex items-center gap-px">
                <Link className="inline-grid size-[30px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#f1f2f7] hover:text-[var(--ink)]" to={"/detail/"+task.id} aria-label={`Ver tarefa ${task.name}`}><FiEye /></Link>
                <Link className="inline-grid size-[30px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#f1f2f7] hover:text-[var(--ink)]" to={"/edit/"+task.id} aria-label={`Editar tarefa ${task.name}`}><FiEdit2 /></Link>
                <button className="inline-grid size-[30px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#fff0ef] hover:text-[#c6534b]" type="button" onClick={()=>{onDelete(task.id)}} aria-label={`Excluir tarefa ${task.name}`}>
                    <FiTrash/>
                </button>
            </div>
        </div>
    )
}