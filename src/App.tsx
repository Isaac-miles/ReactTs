import React,{useState} from 'react';
import './App.css';
import InputField  from './component/inputField';
import { type Item } from './model';
import ListItem from './component/listItems';

function App() {
  const [item, setItem] = useState<string>('');
  const [items, setItems] = useState<Item[]>([])

  const handleSubmit =(event:React.FormEvent)=>{
    event.preventDefault();
    if(item){
      setItems([...items, {id:Date.now(),itemName:item,isDone:false}])
      setItem('')
    }
  }
  return (
    <div className="App">
      <h1>Basic Crud Operation</h1>
    <InputField item={item} setItem={setItem} handleSubmit={handleSubmit} />
    <ListItem items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
