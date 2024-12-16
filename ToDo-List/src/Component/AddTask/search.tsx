import styles from "./css/Search.module.css"
import {useState} from "react";
export function AddTask(){
    const [tasks, setTasks] = useState('');
/*

    function handleCreatTask(event: FormEvent){
        event.preventDefault();
        setTasks([...tasks, newTaskTitle]);

        setNewTaskTitle('');
    }
*/

    return(
        <form className={styles.form}>
            <input
                type="text"
                name="task"
                placeholder="Adicione uma nova tarefa"
                onChange={(e) => setTasks(e.target.value)}
                value={tasks}
            />
            <button
                type="submit"
                disabled={!tasks}
            >
                Criar <img src="../../assets/plus.png" alt=""/>
            </button>
        </form>
    )
}