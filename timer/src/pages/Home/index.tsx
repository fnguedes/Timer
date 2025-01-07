import { Play } from "@phosphor-icons/react";
import {
	CountDownContainer,
	FormContainer,
	HomeContainer,
	MinutesAmountInput,
	Separator,
	StartCountDownButton,
	TaskInput,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newCycleFormValidationSchema = zod.object({
	task: zod.string().min(1, "Informe a tarefa"),
	minutesAmount: zod
		.number()
		.min(5, "O cliclo precisa ser de no mínimo 5 minutos")
		.max(60, "O cliclo precisa ser de no máximo 60 minutos"),
});

// interface newCycleFormData {
// 	task: string;
// 	minutesAmount: number;
// }

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export default function Home() {
	const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
		resolver: zodResolver(newCycleFormValidationSchema),
		defaultValues: {
			task: "",
			minutesAmount: 5,
		},
	});

	function handleCreateNewCycle(data: newCycleFormData) {
		console.log(data);
		reset();
	}

	const task = watch("task");
	const isSubmitDisabled = !task;

	return (
		<HomeContainer>
			<form onSubmit={handleSubmit(handleCreateNewCycle)}>
				<FormContainer>
					<label htmlFor="task">Vou trabalhar em</label>
					<TaskInput
						id="task"
						list="task-sugestions"
						placeholder="Dê um nome para o seu projeto"
						value={task}
						{...register("task")}
					/>

					<datalist id="task-sugestions">
						<option value="peido" />
					</datalist>

					<label htmlFor="minutesAmount">durante</label>
					<MinutesAmountInput
						id="minutesAmount"
						type="number"
						placeholder="00"
						step={5}
						min={5}
						max={60}
						{...register("minutesAmount", { valueAsNumber: true })}
					/>

					<span>minutos.</span>
				</FormContainer>
				<CountDownContainer>
					<span>0</span>
					<span>0</span>
					<Separator>:</Separator>
					<span>0</span>
					<span>0</span>
				</CountDownContainer>

				<StartCountDownButton type="submit" disabled={isSubmitDisabled}>
					<Play size={24} />
					Começar
				</StartCountDownButton>
			</form>
		</HomeContainer>
	);
}
