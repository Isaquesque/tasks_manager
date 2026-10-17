import { NavLink, Link } from "react-router-dom"
import { FiCheckSquare, FiClipboard, FiPlus } from "react-icons/fi"

export default function SideBar() {
    return (
        <aside className="fixed inset-y-0 left-0 z-10 flex w-[248px] flex-col border-r border-[var(--line)] bg-white px-[18px] pt-7 pb-5 max-[760px]:static max-[760px]:h-auto max-[760px]:w-full max-[760px]:border-r-0 max-[760px]:border-b max-[760px]:px-[17px] max-[760px]:py-3">
            <Link to="/" className="flex items-center gap-[11px] px-2 text-[1.25rem] font-bold tracking-[-0.04em] text-[#202942] max-[760px]:px-0">
                <span className="grid size-[34px] place-items-center rounded-[10px] bg-[var(--primary)] text-[19px] text-white"><FiCheckSquare /></span>
                <span>Taskflow</span>
            </Link>
            <p className="mt-[47px] mb-3 px-[9px] text-[0.69rem] font-bold tracking-[0.12em] text-[#9aa2b2] max-[760px]:hidden">WORKSPACE</p>
            <nav className="grid gap-[5px] max-[760px]:mt-3 max-[760px]:flex max-[760px]:gap-[7px]" aria-label="Navegação principal">
                <NavLink to="/" end className={({ isActive }) => `flex min-h-[43px] items-center gap-3 rounded-lg px-3 text-[0.91rem] font-medium text-[#687389] transition-colors hover:bg-[#f0efff] hover:text-[var(--primary)] max-[760px]:min-h-9 max-[760px]:gap-[7px] max-[760px]:px-[9px] max-[760px]:text-[0.78rem] ${isActive ? "bg-[#f0efff] text-[var(--primary)]" : ""}`}>
                    <FiClipboard />
                    <span>Minhas tarefas</span>
                </NavLink>
                <NavLink to="/create" className={({ isActive }) => `flex min-h-[43px] items-center gap-3 rounded-lg px-3 text-[0.91rem] font-medium text-[#687389] transition-colors hover:bg-[#f0efff] hover:text-[var(--primary)] max-[760px]:min-h-9 max-[760px]:gap-[7px] max-[760px]:px-[9px] max-[760px]:text-[0.78rem] ${isActive ? "bg-[#f0efff] text-[var(--primary)]" : ""}`}>
                    <FiPlus />
                    <span>Nova tarefa</span>
                </NavLink>
            </nav>
            <div className="mt-auto flex items-center gap-[11px] border-t border-[var(--line)] pt-4 px-[5px] max-[760px]:hidden">
                <span className="inline-grid size-9 place-items-center rounded-full bg-[#eeedff] font-bold text-[var(--primary)]">I</span>
                <div className="grid gap-[3px]">
                    <strong className="text-[0.85rem]">Isaque</strong>
                    <span className="text-[0.75rem] text-[var(--muted)]">Workspace pessoal</span>
                </div>
            </div>
        </aside>
    )
}