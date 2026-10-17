import TaskForm from "../layout/TaskForm";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function TaskEdit() {
  const { id } = useParams();
  const taskData = getTasks()[id];

  function getTasks() {
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      return JSON.parse(tasks);
    }

    return [];
  }

  function editTask(newTaskData) {
    const updatedTask = {
      id: id,
      name: newTaskData ? newTaskData.name : taskData.name,
      description: newTaskData ? newTaskData.description : taskData.description,
      priority: newTaskData ? newTaskData.priority : taskData.priority,
      status: "pending",
      author: "isaque",
      creationDate: taskData.creationDate,
      dueDate: taskData.dueDate,
    };

    const tasks = getTasks();
    tasks[id] = updatedTask;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  return (
    <section className="mx-auto max-w-[920px]">
      <Link
        to="/"
        className="mb-[25px] inline-flex items-center gap-2 text-[0.83rem] font-medium text-[#707b90] hover:text-[var(--primary)]"
      >
        <FiArrowLeft /> Voltar para tarefas
      </Link>
      <div className="mb-[27px] flex items-center justify-between gap-6 max-[480px]:flex-col max-[480px]:items-stretch max-[480px]:gap-4">
        <div>
          <p className="mb-2 text-[0.68rem] font-bold tracking-[0.12em] text-[var(--primary)]">
            GERENCIAR TAREFA
          </p>
          <h1 className="m-0 text-[clamp(1.7rem,2.6vw,2.05rem)] font-bold tracking-[-0.045em] text-[var(--ink)]">
            Editar tarefa
          </h1>
          <p className="mt-2 text-[0.91rem] text-[var(--muted)]">
            Atualize as informações da tarefa selecionada.
          </p>
        </div>
      </div>
      <div className="overflow-hidden rounded-[11px] border border-[var(--line)] bg-white shadow-[0_2px_7px_rgb(20_29_54_/_2%)]">
        <div className="border-b border-[var(--line)] px-[25px] py-[22px]">
          <h2 className="m-0 text-base font-semibold text-[var(--ink)]">
            Detalhes da tarefa
          </h2>
          <p className="mt-1.5 text-[0.8rem] text-[var(--muted)]">
            Os campos marcados com * são obrigatórios.
          </p>
        </div>
        <TaskForm taskData={taskData} onSubmit={editTask} />
      </div>
    </section>
  );
}
