import {Header} from "./components/Header/Header.tsx";
import {Post, PostType} from "./components/Post/Post.tsx";
import {Sidebar} from "./components/SideBar/Sidebar.tsx";
import './globals.css'
import styles from './App.module.css'

/* Campo que vamos precisar para criar o post dinamicamente */

//author: { vatar_url: '', name: '', role: ''}
// publishedAt: Date
// content: String

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://z-p3-scontent.frai2-1.fna.fbcdn.net/v/t1.6435-9/130973334_2095635140572472_2716553581413446626_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEQ_KKFWIa8rmpervOGrdMaH-yAhI5ggvIf7ICEjmCC8pI9atTPqMfM2tmng95I4yXX5iAyxgV9mRb7WX9HH0Aa&_nc_ohc=tkj68FVIXZQQ7kNvgEDhoBf&_nc_zt=23&_nc_ht=z-p3-scontent.frai2-1.fna&_nc_gid=Axi0FnnzPo9G0eoTW_ur9-M&oh=00_AYBwjaEl8rMVAOB_EZnEKVvEYSPn_tjFLlUsezqX7YMvrA&oe=675C0E91',
            name: 'Kevin Sousa',
            role: 'Developer Web'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de fazer meu primeiro curso na @RockSeat com o formador Diego Fermandes 🚀'},
            { type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-11-10 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://scontent.frai2-1.fna.fbcdn.net/v/t39.30808-6/331779740_907110027301023_6343209238314508195_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUu3KuvUlcmsuixOA6NCpdUvNFxstWCAVS80XGy1YIBfk2KghDJK712R5QmYaIUjEESQKPmGv2ay7EC1kMXa11&_nc_ohc=Btof0iJ5VfgQ7kNvgHTtbpm&_nc_zt=23&_nc_ht=scontent.frai2-1.fna&_nc_gid=A2UV8Z6eg_pBlYGF3Gu_NaU&oh=00_AYDzQ5QiXUd1YzKyetYaKA9rwG7H9LAO-SKHCrUzzYbkdw&oe=67404607',
            name: 'Patrícia T. Correia',
            role: 'Analista de TI'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            { type: 'link', content: 'patricia.analistati.desing/doctorcare'},
        ],
        publishedAt: new Date('2024-11-12 20:00:00'),
    },
]
//interaçao

function App() {
  return (
    <div>
      <Header/>

        <div className={styles.wrapper}>
            <Sidebar/>
            {/*Renderização do componente Post para cada objeto no array post */}
            <main>
              {posts.map((post) => (
                <Post
                  key={post.id}
                  post={post}
                />
              ))}
            </main>
        </div>
    </div>
  )
}

export default App
