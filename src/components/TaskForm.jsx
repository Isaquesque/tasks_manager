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
        <form 
        className="flex flex-col gap-8" 
        onSubmit={submitForm}
        >

            <div className="space-y-1">
                <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
                >
                Nome
                </label>

                <input
                id="name"
                name="name"
                placeholder="Ex.: Estudar useEffect"
                required
                defaultValue={taskData? taskData.name: ""}
                className="w-full rounded-lg border border-gray-300
                    px-3 py-2"
                />
            </div>

            <div className="space-y-1">
                <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
                >
                Descrição
                </label>

                <textarea
                id="description"
                name="description"
                placeholder="Descreva a tarefa..."
                rows={4}
                required
                defaultValue={taskData? taskData.description: ""}
                className="w-full resize-y rounded-lg border
                    border-gray-300 px-3 py-2"
                />
            </div>

            <div className="space-y-1">
                <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700"
                >
                Prioridade
                </label>

                <select
                id="priority"
                name="priority"
                defaultValue={taskData? taskData.priority: "baixa"}
                className="w-full rounded-lg border border-gray-300
                    bg-white px-3 py-2"
                >
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5
                font-medium text-white transition
                hover:bg-blue-700 focus:ring-2
                focus:ring-blue-300"
            >
                Salvar
            </button>
        </form>
    )
}