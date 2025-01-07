import { HistoryContainer, HistoryList, Status } from "./styles";

export default function History() {
	return (
		<HistoryContainer>
			<h1>Meu histórico</h1>

			<HistoryList>
				<table>
					<tr>
						<th>Tarefa</th>
						<th>Duração</th>
						<th>Início</th>
						<th>Status</th>
					</tr>
					<tbody>
						<tr>
							<td>cagar</td>
							<td>2 minuitos</td>
							<td>há 10 segundos</td>
							<td>
								<Status statusColor="Done">Concluído</Status>
							</td>
						</tr>
						<tr>
							<td>cagar</td>
							<td>2 minuitos</td>
							<td>há 10 segundos</td>
							<td>
								<Status statusColor="Progress">Em andamento</Status>
							</td>
						</tr>
						<tr>
							<td>cagar</td>
							<td>2 minuitos</td>
							<td>há 10 segundos</td>
							<td>
								<Status statusColor="Failed">Interrompido</Status>
							</td>
						</tr>
					</tbody>
				</table>
			</HistoryList>
		</HistoryContainer>
	);
}
