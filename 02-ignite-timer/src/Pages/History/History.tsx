import {HistoryContainer, HistoryList, Status} from "./styles.ts";

export function History(){
    return (
       <HistoryContainer>
           <h1>Meu historico</h1>

           <div>
               <HistoryList>
                   <table>
                       <thead>
                       <tr>
                           <th>Tarefa</th>
                           <th>Duração</th>
                           <th>Início</th>
                           <th>Status</th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td>Tarefa</td>
                           <td>25 minutos</td>
                           <td>Há 2 meses</td>
                           <td>
                               <Status statusColor={"red"}>Interrompido</Status>
                           </td>
                       </tr>
                       <tr>
                           <td>Tarefa</td>
                           <td>25 minutos</td>
                           <td>Há 2 meses</td>
                           <td>
                               <Status statusColor={"green"}>Concluida</Status>
                           </td>
                       </tr>
                       <tr>
                           <td>Tarefa</td>
                           <td>25 minutos</td>
                           <td>Há 2 meses</td>
                           <td>
                               <Status statusColor={"yellow"}>Pendente</Status>
                           </td>
                       </tr>
                       <tr>
                           <td>Tarefa</td>
                           <td>25 minutos</td>
                           <td>Há 2 meses</td>
                           <td>
                               <Status statusColor={"red"}>Interrompido</Status>
                           </td>
                       </tr>
                       <tr>
                           <td>Tarefa</td>
                           <td>25 minutos</td>
                           <td>Há 2 meses</td>
                           <td>
                               <Status statusColor={"yellow"}>Pendente</Status>
                           </td>
                       </tr>
                       </tbody>
                   </table>
               </HistoryList>
           </div>
       </HistoryContainer>
    )
}