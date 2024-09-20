import { useState } from 'react';
import "./App.css";

import Header from './Components/Header/Header';
import Tile from './Components/Tile/Tile';

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState('');

  const onInputChange = (e) => setTodo(e.target.value);

  function onSubmitTodo () {
    
    setList([ todo, ...list ]);
    setTodo('');
  }
  
  function onDelete(index) {
    const tempList = [ ...list ];
    tempList.splice(index,1);

    setList([ ...tempList ]);
  }

  return (
    <>
      <Header/>

      <div className="form_container">
        <input 
          type="text" 
          className="todo_input" 
          placeholder="Add Todo"
          value={todo}
          onChange={onInputChange} 
        />
        <button onClick={onSubmitTodo} >Submit</button>
      </div>

      {
        list.map((d,i) => {
          return (
          <Tile 
            task={d}
            key={i}
            onDelete={()=>onDelete(i)}
          />)
        })
      }
    </>
  );
}

export default App;
