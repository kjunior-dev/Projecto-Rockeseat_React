import styles from './css/Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import {Avatar} from "../Avatar/Avatar.tsx";
export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=30&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG60by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar
                    hasBorder={true}
                    src="https://scontent.frai2-1.fna.fbcdn.net/v/t39.30808-6/331779740_907110027301023_6343209238314508195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUu3KuvUlcmsuixOA6NCpdUvNFxstWCAVS80XGy1YIBfk2KghDJK712R5QmYaIUjEESQKPmGv2ay7EC1kMXa11&_nc_ohc=Btof0iJ5VfgQ7kNvgHTtbpm&_nc_zt=23&_nc_ht=scontent.frai2-1.fna&_nc_gid=A2UV8Z6eg_pBlYGF3Gu_NaU&oh=00_AYDzQ5QiXUd1YzKyetYaKA9rwG7H9LAO-SKHCrUzzYbkdw&oe=67404607"
                />

                <strong>Patricia T. Correia</strong>
                <span>Analista de TI</span>
            </div>
            
            <footer>
                <a href="">
                    <PencilLine/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}