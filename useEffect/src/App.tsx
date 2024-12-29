import {useEffect, useState} from 'react'
import './App.css'

export function App() {
  const [list, setList] = useState<string[]>([])
    const [filter, setFilter] = useState('')

    function avisarAPI(){
      console.log("Lista Salva em API")
    }
    /* useEffect( () => {/!*Primeiro params que é a funçao*!/}, [/!*Segundo params é um array, um array que fica a ser monitorado*!/])
     useEffect recebi dois params primeiro é uma função e o segundo é um array,
     esse array é um array de dependências que quando alterado a função será executada */

    useEffect(() => {
        console.log("Valor do List => ", list)
        avisarAPI(); // O primeiro params
    }, [list] /* Segundo Params*/ );

    /* Nesse useEffect ele executa uma so vez quando o componente é
       renderizado, porque nao estamos a passar o segundo params do array quando é alterado.

       Isso é uma boa vantagem quando estamos a fazer uma chamada de api e queremos que ela seja executada apenas uma vez
    */
    useEffect(() => {
        fetch('http://api.github.com/users/Kevin199527/repos')
            .then(response => response.json())
            .then(data => {setList(data.map((item: any) => item.full_name))})
    }, []);

  function addToList(){
      setList(state => [...state, 'Novo Item'])
  }

  const filteredList = list.filter(item => item.includes(filter))

  return (
    <div>
        <input
            type="text"
            onChange = {e => setFilter(e.target.value)}
            value={filter}
        />
        <ul>
            {list.map(item => <li>{item}</li>)}
        </ul>

        <ul>
            {filteredList.map(item => <li className='item'>{item}</li>)}
        </ul>

        <button onClick={addToList}>Add to List</button>
    </div>
  )
}

