import styles from './css/Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "../Avatar/Avatar.tsx";
import {useState} from "react";
interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void
}
export function Comment({content, onDeleteComment}: CommentProps){
    const [ likeCount , setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }
    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://scontent.frai2-1.fna.fbcdn.net/v/t39.30808-6/331779740_907110027301023_6343209238314508195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUu3KuvUlcmsuixOA6NCpdUvNFxstWCAVS80XGy1YIBfk2KghDJK712R5QmYaIUjEESQKPmGv2ay7EC1kMXa11&_nc_ohc=Btof0iJ5VfgQ7kNvgHTtbpm&_nc_zt=23&_nc_ht=scontent.frai2-1.fna&_nc_gid=A2UV8Z6eg_pBlYGF3Gu_NaU&oh=00_AYDzQ5QiXUd1YzKyetYaKA9rwG7H9LAO-SKHCrUzzYbkdw&oe=67404607"
                alt=""
            />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Patrícia T. Correia</strong>
                            <time title={"11 de Maio ás 08:13h"} dateTime="2022-10-10">
                                Publicado há 1h
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title={"Deletar comentario"}>
                            <Trash size={24}/> {/* Icon de Lixeira */}
                        </button>
                    </header>
                    <p> {content} </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment} title={"Aplaudir"}>
                        <ThumbsUp/> {/* Icon de Like */}
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}