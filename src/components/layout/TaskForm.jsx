import Input from "../form/Input";
import TextArea from "../form/TextArea";
import Select from "../form/Select";
import Label from "../form/Label";
import SubmitButton from "../form/SubmitButton";
import FormGroup from "../form/FormGroup";
import DateInput from "../form/DateInput"

export default function TaskForm({ taskData, onSubmit }) {
  function submitForm(e) {
    e.preventDefault();

    const form = e.target;

    const taskData = {
      title: form["name"].value,
      description: form["description"].value,
      priority: form["priority"].value,
      dueDate: form["duedate"].value
    };

    onSubmit(taskData);
  }

  return (
    <form
      className="grid gap-[21px] p-[25px] max-[480px]:p-[19px]"
      onSubmit={submitForm}
    >
      <FormGroup>
        <Label id={"name"}>
          Nome da tarefa{" "}
          <span className="text-[#d85d58]" aria-hidden="true">
            *
          </span>
        </Label>
        <Input
          name={"name"}
          id={"name"}
          placeholder={"Ex.: Tarefa X"}
          required={true}
          defaultValue={taskData ? taskData.title : ""}
        />
        <span className="text-[0.74rem] text-[#919aab]">
          Use um título claro e objetivo.
        </span>
      </FormGroup>

      <FormGroup>
        <Label id={"description"}>
          Descrição{" "}
          <span className="text-[#d85d58]" aria-hidden="true">
            *
          </span>
        </Label>
        <TextArea
          name={"description"}
          id={"description"}
          placeholder={"Descreva a tarefa..."}
          defaultValue={taskData ? taskData.description : ""}
          required={true}
          rows={4}
        />
      </FormGroup>

      <FormGroup>
        <Label id={"priority"}>Prioridade</Label>
        <Select
          name={"priority"}
          id={"priority"}
          defaultValue={taskData ? taskData.priority : "baixa"}
          options={[
            {
              value: "H",
              readableValue: "Alta",
            },
            {
              value: "M",
              readableValue: "Média",
            },
            {
              value: "L",
              readableValue: "Baixa",
            },
          ]}
        />
      </FormGroup>

      <FormGroup>
        <Label id={"priority"}>Data limite</Label>
        <DateInput
          name={"duedate"}
          id={"duedate"}
          type={"date"}
          defaultValue={taskData ? taskData.dueDate : ""}
          required={true}
          />
      </FormGroup>

      <div className="flex justify-end border-t border-[#f0f1f5] pt-[3px]">
        <SubmitButton text={"Salvar tarefa"} />
      </div>
    </form>
  );
}
