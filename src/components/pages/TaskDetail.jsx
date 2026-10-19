import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiCalendar, FiEdit2, FiUser } from "react-icons/fi"
import {TaskMapper} from "../../mappers/taskMapper"

export default function TaskDetail({tasksRepository}) {
    const {id} = useParams()

    const task = TaskMapper.toTaskViewFormat(tasksRepository.getTask(id))

    return (
        <section className="mx-auto max-w-[920px]">
            <Link to="/" className="mb-[25px] inline-flex items-center gap-2 text-[0.83rem] font-medium text-[#707b90] hover:text-[var(--primary)]"><FiArrowLeft /> Voltar para tarefas</Link>
            <div className="mb-[27px] flex items-end justify-between gap-6 max-[480px]:flex-col max-[480px]:items-stretch max-[480px]:gap-4">
                <div>
                    <p className="mb-2 text-[0.68rem] font-bold tracking-[0.12em] text-[var(--primary)]">DETALHES DA TAREFA</p>
                    <h1 className="m-0 text-[clamp(1.7rem,2.6vw,2.05rem)] font-bold tracking-[-0.045em] text-[var(--ink)]">{task.name}</h1>
                    <p className="mt-2 text-[0.91rem] text-[var(--muted)]">Criada por {task.author}</p>
                </div>
                <Link to={`/edit/${id}`} className="inline-flex min-h-[42px] items-center justify-center gap-[9px] rounded-lg border border-[#dedfeb] bg-white px-4 text-[0.86rem] font-semibold text-[#454c61] transition-colors hover:border-[#c7c5f3] hover:bg-[#f8f7ff] hover:text-[var(--primary)]"><FiEdit2 /> Editar tarefa</Link>
            </div>
            <article className="overflow-hidden rounded-[11px] border border-[var(--line)] bg-white p-[25px] shadow-[0_2px_7px_rgb(20_29_54_/_2%)] max-[480px]:p-[19px]">
                <div className="border-b border-[var(--line)] pb-6">
                    <h2 className="m-0 text-base font-semibold text-[var(--ink)]">Descrição</h2>
                    <p className="mt-3 text-[0.91rem] leading-[1.75] whitespace-pre-wrap text-[#667187]">{task.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-[23px] pt-[23px] max-[480px]:grid-cols-1">
                    <div className="flex items-center gap-3">
                        <span className="grid size-[37px] shrink-0 place-items-center rounded-[10px] bg-[#f3f3fa] text-[#6e6cbd]"><FiUser /></span>
                        <div className="grid gap-[5px]"><span className="text-[0.74rem] text-[#8b94a5]">Responsável</span><strong className="text-[0.84rem] font-semibold text-[#354056]">{task.author}</strong></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="grid size-[37px] shrink-0 place-items-center rounded-[10px] bg-[#f3f3fa] text-[#6e6cbd]"><FiCalendar /></span>
                        <div className="grid gap-[5px]"><span className="text-[0.74rem] text-[#8b94a5]">Criada em</span><strong className="text-[0.84rem] font-semibold text-[#354056]">{task.creationDate}</strong></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="grid size-[37px] shrink-0 place-items-center rounded-[10px] bg-[#f3f3fa] text-[#6e6cbd]"><FiCalendar /></span>
                        <div className="grid gap-[5px]"><span className="text-[0.74rem] text-[#8b94a5]">Prazo</span><strong className="text-[0.84rem] font-semibold text-[#354056]">{task.dueDate}</strong></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="grid size-[37px] shrink-0 place-items-center rounded-[10px] bg-[#f3f3fa] text-[#6e6cbd]"><FiEdit2 /></span>
                        <div className="grid gap-[5px]"><span className="text-[0.74rem] text-[#8b94a5]">Prioridade</span><strong className="text-[0.84rem] font-semibold text-[#354056]">{task.priority === "alta" ? "Alta" : task.priority === "media" ? "Média" : "Baixa"}</strong></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="grid size-[37px] shrink-0 place-items-center rounded-[10px] bg-[#f3f3fa] text-[#6e6cbd]"><FiEdit2 /></span>
                        <div className="grid gap-[5px]"><span className="text-[0.74rem] text-[#8b94a5]">Status</span><strong className="text-[0.84rem] font-semibold text-[#354056]">{task.status === "complete" ? "Concluída" : task.status === "canceled" ? "Cancelada" : "Pendente"}</strong></div>
                    </div>
                </div>
            </article>
        </section>
    )
}