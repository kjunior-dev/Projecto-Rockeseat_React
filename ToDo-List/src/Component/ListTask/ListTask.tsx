import styles from "./css/ListTask.module.css"
import {Trash} from "phosphor-react";
import {useState} from "react";

export function ListTask(){
    const [task , setTask] = useState( [
        { id: 1, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 2, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 3, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 4,  title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 5, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
    ])

    const [isChecked, setIsChecked] = useState<Record<number, boolean>>({});

    // Função para alternar o estado do checkbox
    function hasChecked(id: number) {
        setIsChecked((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
        console.log(`ID ${id} foi ${!isChecked[id] ? "Verificado ✓" : "Desmarcado ✗"}`);
    }

    function onDelecteTask(id: number){
        const TaskDeleted = task.filter(task => {
            return task.id !== id
        })

        setTask(TaskDeleted);
        console.log(`Id ${id} foi deletado!`)
    }

    return(
        <section className={styles.section}>
            <div className={styles.details}>

                <div className={styles.infoTask}>
                    <p className={styles.tasksCriated}>Tarefas Criadas <h6>{task.length}</h6></p>
                    <p className={styles.tasksCompleted}>
                        Concluídas <h6>{Object.values(isChecked).filter(Boolean).length} de {task.length}</h6>
                    </p>
                </div>

                <div className={task.length > 0 ? "" : styles.task}>{/*task.length > 0 ? "" : ""*/}
                    {task.length > 0 ? (
                        <div>
                            {
                                task.map((item) => (
                                    <div key={item.id} className={styles.TaskDisponibled}>
                                        <label className={styles.CheckboxContainer}>
                                            <input
                                                type="checkbox"
                                                checked={!!isChecked[item.id]}
                                                onChange={() => hasChecked(item.id)}
                                            />
                                            <span className={styles.CustomCheckbox}></span>
                                        </label>
                                        <p className={`${styles.taskText} ${ isChecked[item.id] ? styles.texteChecked : "" }`}
                                        >
                                            {item.title}
                                        </p>

                                        <Trash
                                            onClick={onDelecteTask}
                                            size={20}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <div className={styles.notTask}>
                            <img src="../../assets/Clipboard.png" alt=""/>
                            <h1>
                                Você ainda não tem tarefas cadastradas
                                    <br/>
                                Crie tarefas e organize seus itens a fazer
                            </h1>
                        </div>
                    )
                    }
                </div>
            </div>
        </section>
    )
}