import { FiBell, FiSearch } from "react-icons/fi";

export default function Header() {
    return (
        <header className="flex h-[76px] items-center justify-between border-b border-[var(--line)] bg-white px-12 max-[1050px]:px-7 max-[760px]:h-[57px] max-[760px]:px-[18px]">
            <div className="text-[0.85rem] text-[#758096]">Workspace <span className="mx-2 text-[#c2c6d0]">/</span> Tarefas</div>
            <div className="flex items-center gap-[15px] max-[760px]:gap-[7px]">
                <button className="inline-grid size-[34px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#f1f2f7] hover:text-[var(--ink)]" type="button" aria-label="Pesquisar">
                    <FiSearch />
                </button>
                <button className="inline-grid size-[34px] place-items-center rounded-lg text-[#758096] transition-colors hover:bg-[#f1f2f7] hover:text-[var(--ink)]" type="button" aria-label="Notificações">
                    <FiBell />
                </button>
                <span className="inline-grid size-[33px] place-items-center rounded-full bg-[#eeedff] text-[0.82rem] font-bold text-[var(--primary)]" aria-label="Perfil de Isaque">I</span>
            </div>
        </header>
    )
}