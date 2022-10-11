
import { useState } from 'react';

type ListProps = {
  initialItems: string[];
}

function List({ initialItems } : ListProps) {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(initialItems);

  function addToList(){
    setTimeout(() => {
      setList(state => [...state, newItem]);
    })
  }

  function removeItemFromList(item: string){
    setTimeout(() => {
      setList(state => state.filter(value => value !== item))
    })
  }

  return (
    <>
      <input placeholder='Novo item' type='Text' value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addToList} >Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item} >
            {item}
            <button onClick={() => removeItemFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List
