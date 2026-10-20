import { Link } from "react-router-dom"
import { useState} from "react"
import Task from "../layout/Task"
import FilterForm from "../layout/FilterForm"
import { FiClipboard, FiPlus } from "react-icons/fi"
import {TaskMapper} from "../../mappers/taskMapper"
import { DateMapper } from "../../mappers/dateMapper"

const EMPTY_FILTERS = {
    title: "",
    priority: "all",
    dueDate: "",
    status: "all",
}

export default function TasksList({tasksRepository}) {
    const [tasks, setTasks] = useState(tasksRepository.getTasks())
    const [filters, setFilters] = useState(EMPTY_FILTERS)

    const filteredTasks = tasks.filter((task) => {
        const matchesTitle = task.title.toLowerCase().includes(filters.title.trim().toLowerCase())
        const matchesPriority = filters.priority === "all" || task.priority === filters.priority
        const matchesDueDate = !filters.dueDate || DateMapper.toDateInputFormat(task.dueDate) === filters.dueDate
        const matchesStatus = filters.status === "all" || task.status === filters.status

        return matchesTitle && matchesPriority && matchesDueDate && matchesStatus
    })

    function resetFilters() {
        setFilters({ ...EMPTY_FILTERS })
    }

    function deleteTask(taskId) {
        tasksRepository.deleteTask(taskId)

        setTasks(tasksRepository.getTasks())
    }

    function completeTask(taskId) {
        const task = tasks.find((task)=> task.id === taskId)
        tasksRepository.updateTask({...task, status:"D"})
        setTasks(tasksRepository.getTasks())
    }

    function cancelTask(taskId) {
        const task = tasks.find((task)=> task.id === taskId)
        tasksRepository.updateTask({...task, status:"C"})
        setTasks(tasksRepository.getTasks())
    }

    return (
        <section>
            <div className="mb-[27px] flex items-center justify-between gap-6 max-[480px]:flex-col max-[480px]:items-stretch max-[480px]:gap-4">
                <div>
                    <p className="mb-2 text-[0.68rem] font-bold tracking-[0.12em] text-[var(--primary)]">OVERVIEW</p>
                    <h1 className="m-0 text-[clamp(1.7rem,2.6vw,2.05rem)] font-bold tracking-[-0.045em] text-[var(--ink)]">Minhas tarefas</h1>
                    <p className="mt-2 text-[0.91rem] text-[var(--muted)]">Acompanhe e organize o que precisa ser feito.</p>
                </div>
                <Link to="/create" className="inline-flex min-h-[42px] items-center justify-center gap-[9px] rounded-lg bg-[var(--primary)] px-4 text-[0.86rem] font-semibold text-white transition-colors hover:bg-[var(--primary-dark)] max-[480px]:w-full">
                    <FiPlus /> Nova tarefa
                </Link>
            </div>

            <div className="mb-6 grid grid-cols-3 gap-[17px] max-[760px]:gap-[9px] max-[480px]:grid-cols-1">
                <article className="grid min-h-32 content-center gap-[7px] rounded-[11px] border border-[var(--line)] bg-white px-[21px] py-[18px] shadow-[0_2px_7px_rgb(20_29_54_/_2%)] max-[760px]:min-h-[108px] max-[760px]:px-3 max-[760px]:py-[14px] max-[480px]:min-h-[94px]">
                    <span className="text-[0.81rem] font-medium text-[#687389] max-[760px]:text-[0.72rem]">Total de tarefas</span>
                    <strong className="text-[1.8rem] leading-none font-bold tracking-[-0.05em] text-[var(--ink)] max-[760px]:text-[1.55rem]">{tasks.length}</strong>
                    <span className="text-[0.76rem] text-[#9aa2b2] max-[760px]:text-[0.67rem]">tarefas cadastradas</span>
                </article>
                <article className="grid min-h-32 content-center gap-[7px] rounded-[11px] border border-[var(--line)] bg-white px-[21px] py-[18px] shadow-[0_2px_7px_rgb(20_29_54_/_2%)] max-[760px]:min-h-[108px] max-[760px]:px-3 max-[760px]:py-[14px] max-[480px]:min-h-[94px]">
                    <span className="text-[0.81rem] font-medium text-[#687389] max-[760px]:text-[0.72rem]">Em andamento</span>
                    <strong className="text-[1.8rem] leading-none font-bold tracking-[-0.05em] text-[var(--ink)] max-[760px]:text-[1.55rem]">{tasks.filter((task) => task.status === "P").length}</strong>
                    <span className="text-[0.76rem] text-[#9aa2b2] max-[760px]:text-[0.67rem]">aguardando conclusão</span>
                </article>
                <article className="grid min-h-32 content-center gap-[7px] rounded-[11px] border border-[var(--line)] bg-white px-[21px] py-[18px] shadow-[0_2px_7px_rgb(20_29_54_/_2%)] max-[760px]:min-h-[108px] max-[760px]:px-3 max-[760px]:py-[14px] max-[480px]:min-h-[94px]">
                    <span className="text-[0.81rem] font-medium text-[#687389] max-[760px]:text-[0.72rem]">Prioridade alta</span>
                    <strong className="text-[1.8rem] leading-none font-bold tracking-[-0.05em] text-[var(--ink)] max-[760px]:text-[1.55rem]">{tasks.filter((task) => task.priority === "H").length}</strong>
                    <span className="text-[0.76rem] text-[#9aa2b2] max-[760px]:text-[0.67rem]">precisam de atenção</span>
                </article>
            </div>

            <div className="grid grid-cols-1 items-start gap-5">
                <FilterForm filters={filters} onChange={setFilters} onReset={resetFilters} />
                <div className="min-w-0 overflow-hidden rounded-[11px] border border-[var(--line)] bg-white shadow-[0_2px_7px_rgb(20_29_54_/_2%)]">
                    <div className="min-h-[94px] border-b border-[var(--line)] px-[22px] py-[19px]">
                        <h2 className="m-0 text-base font-semibold text-[var(--ink)]">Todas as tarefas</h2>
                        <p className="mt-1.5 text-[0.8rem] text-[var(--muted)]">Visualize os detalhes e gerencie suas tarefas.</p>
                    </div>

                    <div className="overflow-x-auto">
                    {filteredTasks.length > 0 ? (
                        <div className="min-w-[1030px]">
                            <div className="grid min-h-[47px] grid-cols-[minmax(170px,1.55fr)_minmax(95px,0.8fr)_minmax(105px,0.9fr)_minmax(120px,1fr)_minmax(112px,0.95fr)_minmax(112px,0.95fr)_164px] items-center gap-[15px] bg-[#fafbfc] px-[22px] text-[0.71rem] font-semibold text-[#8992a4]">
                                <span>Tarefa</span>
                                <span>Prioridade</span>
                                <span>Status</span>
                                <span>Responsável</span>
                                <span>Criada em</span>
                                <span>Prazo</span>
                                <span>Ações</span>
                            </div>
                            {filteredTasks.map((task) => {
                                const taskView = TaskMapper.toTaskViewFormat(task)
                                return <Task task={taskView} onComplete={completeTask} onCancel={cancelTask} onDelete={deleteTask} key={task.id} />
                            })}
                        </div>
                    ) : tasks.length > 0 ? (
                        <div className="flex min-h-[278px] flex-col items-center justify-center p-7 text-center">
                            <span className="grid size-12 place-items-center rounded-[14px] bg-[#f0efff] text-[21px] text-[var(--primary)]"><FiClipboard /></span>
                            <h3 className="mt-[15px] text-base font-semibold">Nenhuma tarefa encontrada</h3>
                            <p className="mt-[7px] max-w-[330px] text-[0.82rem] leading-relaxed text-[var(--muted)]">Tente ajustar ou limpar os filtros para ver mais tarefas.</p>
                        </div>
                    ) : (
                        <div className="flex min-h-[278px] flex-col items-center justify-center p-7 text-center">
                            <span className="grid size-12 place-items-center rounded-[14px] bg-[#f0efff] text-[21px] text-[var(--primary)]"><FiClipboard /></span>
                            <h3 className="mt-[15px] text-base font-semibold">Nenhuma tarefa por aqui</h3>
                            <p className="mt-[7px] mb-4 max-w-[330px] text-[0.82rem] leading-relaxed text-[var(--muted)]">Crie sua primeira tarefa para começar a organizar seu trabalho.</p>
                            <Link to="/create" className="inline-flex min-h-[42px] items-center justify-center gap-[9px] rounded-lg border border-[#dedfeb] bg-white px-4 text-[0.86rem] font-semibold text-[#454c61] transition-colors hover:border-[#c7c5f3] hover:bg-[#f8f7ff] hover:text-[var(--primary)]"><FiPlus /> Criar tarefa</Link>
                        </div>
                    )}
                    </div>
                    {filteredTasks.length > 0 && <div className="border-t border-[var(--line)] px-[22px] py-[13px] text-[0.75rem] text-[#8c95a5]">Exibindo {filteredTasks.length} {filteredTasks.length === 1 ? "tarefa" : "tarefas"}</div>}
                </div>
            </div>
        </section>
    )
}