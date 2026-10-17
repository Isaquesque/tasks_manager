export default function TaskForm({taskData, onSubmit}) {
    
    function submitForm(e) {
        e.preventDefault()

        const form = e.target

        const taskData = {
            name: form["name"].value,
            description: form["description"].value,
            priority: form["priority"].value
        }

        onSubmit(taskData)
    }
    
    
    return (
        <form className="grid gap-[21px] p-[25px] max-[480px]:p-[19px]" onSubmit={submitForm}>
            <div className="grid gap-2">
                <label
                htmlFor="name"
                className="text-[0.83rem] font-semibold text-[#3b455b]"
                >
                Nome da tarefa <span className="text-[#d85d58]" aria-hidden="true">*</span>
                </label>

                <input
                id="name"
                name="name"
                placeholder="Ex.: Estudar useEffect"
                required
                defaultValue={taskData? taskData.name: ""}
                className="min-h-[43px] w-full rounded-[7px] border border-[#dfe2e9] bg-white px-3 py-2 text-[0.86rem] text-[#283248] outline-none transition focus:border-[#8583e4] focus:ring-[3px] focus:ring-[#5856d6]/10 placeholder:text-[#a4abba]"
                />
                <span className="text-[0.74rem] text-[#919aab]">Use um título claro e objetivo.</span>
            </div>

            <div className="grid gap-2">
                <label
                htmlFor="description"
                className="text-[0.83rem] font-semibold text-[#3b455b]"
                >
                Descrição <span className="text-[#d85d58]" aria-hidden="true">*</span>
                </label>

                <textarea
                id="description"
                name="description"
                placeholder="Descreva a tarefa..."
                rows={4}
                required
                defaultValue={taskData? taskData.description: ""}
                className="min-h-[125px] w-full resize-y rounded-[7px] border border-[#dfe2e9] bg-white px-3 py-2 text-[0.86rem] leading-relaxed text-[#283248] outline-none transition focus:border-[#8583e4] focus:ring-[3px] focus:ring-[#5856d6]/10 placeholder:text-[#a4abba]"
                />
            </div>

            <div className="grid gap-2">
                <label
                htmlFor="priority"
                className="text-[0.83rem] font-semibold text-[#3b455b]"
                >
                Prioridade
                </label>

                <select
                id="priority"
                name="priority"
                defaultValue={taskData? taskData.priority: "baixa"}
                className="min-h-[43px] w-full rounded-[7px] border border-[#dfe2e9] bg-white px-3 py-2 text-[0.86rem] text-[#283248] outline-none transition focus:border-[#8583e4] focus:ring-[3px] focus:ring-[#5856d6]/10"
                >
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                </select>
            </div>

            <div className="flex justify-end border-t border-[#f0f1f5] pt-[3px]">
                <button type="submit" className="mt-[17px] inline-flex min-h-[42px] items-center justify-center gap-[9px] rounded-lg bg-[var(--primary)] px-4 text-[0.86rem] font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]">Salvar tarefa</button>
            </div>
        </form>
    )
}