import styles from "./css/Avatar.module.css";
import {ImgHTMLAttributes} from "react";
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean; // ponto ? indicando que é opcional
}
export function Avatar({hasBorder = true, ...props}: AvatarProps){
    return (
        <div>
            <img
                className={hasBorder ? styles.avatarWithBorder : styles.avatar}
                {...props}
            />
        </div>
    )
}