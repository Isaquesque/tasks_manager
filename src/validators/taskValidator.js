export function validateTask(taskData) {
  const errors = {};

  if (!taskData.title?.trim()) {
    errors.title = "O título é obrigatório";
  }

  if (!taskData.author?.trim()) {
    errors.title = "O autor é obrigatório";
  }

  // Low, Medium, High
  if (!["L", "M", "H"].includes(taskData.priority)) {
    errors.priority = "Prioridade inválida";
  }

  // Done, Pending, Canceled 
  if (!["D", "P", "C"].includes(taskData.status)) {
    errors.priority = "Prioridade inválida";
  }

  return errors
}