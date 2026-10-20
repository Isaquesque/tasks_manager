import { FiRotateCcw, FiSliders } from "react-icons/fi";
import FormGroup from "../form/FormGroup";
import Input from "../form/Input";
import Label from "../form/Label";
import Select from "../form/Select";

export default function FilterForm({ filters, onChange, onReset }) {
  function updateFilter(event) {
    const { name, value } = event.target;
    onChange({ ...filters, [name]: value });
  }

  return (
    <form
      className="grid gap-4 rounded-[11px] border border-[var(--line)] bg-white p-4 shadow-[0_2px_7px_rgb(20_29_54_/_2%)]"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <FiSliders className="text-[var(--primary)]" aria-hidden="true" />
          <h2 className="m-0 text-base font-semibold text-[var(--ink)]">Filtrar tarefas</h2>
        </div>
        <button
          className="inline-flex min-h-[36px] shrink-0 items-center justify-center gap-2 rounded-lg border border-[#dedfeb] bg-white px-3 text-[0.8rem] font-semibold text-[#626d82] transition-colors hover:border-[#c7c5f3] hover:bg-[#f8f7ff] hover:text-[var(--primary)]"
          type="button"
          onClick={onReset}
        >
          <FiRotateCcw aria-hidden="true" />
          Limpar filtros
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <FormGroup>
          <Label id="filter-title">Nome da tarefa</Label>
          <Input
            name="title"
            id="filter-title"
            placeholder="Buscar pelo nome..."
            value={filters.title}
            onChange={updateFilter}
          />
        </FormGroup>

        <FormGroup>
          <Label id="filter-priority">Prioridade</Label>
          <Select
            name="priority"
            id="filter-priority"
            value={filters.priority}
            onChange={updateFilter}
            options={[
              { value: "all", readableValue: "Todas as prioridades" },
              { value: "H", readableValue: "Alta" },
              { value: "M", readableValue: "Média" },
              { value: "L", readableValue: "Baixa" },
            ]}
          />
        </FormGroup>

        <FormGroup>
          <Label id="filter-due-date">Data limite</Label>
          <Input
            name="dueDate"
            id="filter-due-date"
            type="date"
            value={filters.dueDate}
            onChange={updateFilter}
          />
        </FormGroup>

        <FormGroup>
          <Label id="filter-status">Status</Label>
          <Select
            name="status"
            id="filter-status"
            value={filters.status}
            onChange={updateFilter}
            options={[
              { value: "all", readableValue: "Todos os status" },
              { value: "D", readableValue: "Concluída" },
              { value: "P", readableValue: "Pendente" },
              { value: "C", readableValue: "Cancelada" },
            ]}
          />
        </FormGroup>
      </div>
    </form>
  );
}
