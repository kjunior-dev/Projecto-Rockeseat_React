import styles from "./css/Header.module.css"
export function Header(){
    return(
        <header className={styles.header}>
            <img src="../../../public/assets/rocket.png" alt=""/>
            <strong> <span className={styles.spanTo}>to</span> <span className={styles.spanDo}>do</span> </strong>
        </header>
    )
}