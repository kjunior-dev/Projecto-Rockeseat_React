import { format, formatDistanceToNow } from "date-fns";
import {ptBR} from 'date-fns/locale/pt-BR';
import styles from './css/Post.module.css'
import {Comment} from "../Comment/Comment.tsx";
import {Avatar} from "../Avatar/Avatar.tsx";
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType;
}

// estado = variaveis que eu quero manipular no meu componente

// Post({author, content, publishedAt}) Passandos as propriedades.
export function Post({post}: PostProps) {

    const [comments, setComments] = useState([
       'Muito bom @Kevin Sousa Parabéns!! 👏👏 '
    ])
    const [newCommentText, setNewCommentText] = useState('');
    
    {/* Formatação da data de publicação usando a biblioteca date-fns */}
    const date = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR});
    const publishedAtRelativetoNow = formatDistanceToNow(post.publishedAt, {locale: ptBR, addSuffix: true});

    // Função chamada quando o usuário clica no botão de enviar o comentário
    function handleCreateNewComment(event: FormEvent){
        // Evita que o formulário seja enviado
        event.preventDefault();

        // Adiciona o novo comentário ao array de comentários
        setComments([...comments, newCommentText])

        // Limpa o campo de texto do comentário
        setNewCommentText('');
    }

    // Função chamada quando o usuário digita algo no campo de texto do comentário
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        // Atualiza o estado newCommentText com o valor digitado pelo usuário
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comments => {
            return comments !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne);
        console.log(`Comentario ${commentToDelete} foi deletado!`)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>
                            {post.author.name}
                        </strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={date} dateTime={post.publishedAt.toISOString()}>
                    {publishedAtRelativetoNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map((line) => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    required
                    onInvalid={handleNewCommentInvalid}
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type={"submit"} disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comments => {
                    return <Comment
                        key  ={comments}
                        content = {comments}
                        onDeleteComment = {deleteComment}
                    />
                })}
            </div>
        </article>
    )
}