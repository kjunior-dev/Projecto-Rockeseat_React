import "./globals.css"
import {Header} from "./Component/Header/Header.tsx";
import {AddTask} from "./Component/AddTask/search.tsx";
import {ListTask} from "./Component/ListTask/ListTask.tsx";
function App() {
   /* const task = [
        { id: 1, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 2, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 3, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 4,  title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
        { id: 5, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", },
    ]*/
  return (
    <header>
        <Header/>
        <AddTask/>
        <ListTask/>
    </header>
  )
}

export default App
