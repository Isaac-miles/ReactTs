import React,{useState} from 'react';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import './App.css';
import InputField  from './component/inputField';
import { type Item } from './model';
import ListItem from './component/listItems';

function App() {
  const [item, setItem] = useState<string>('');
  const [items, setItems] = useState<Item[]>([])
  const [completedItems, setCompletedItems] = useState<Item[]>([])

  const handleSubmit =(event:React.FormEvent)=>{
    event.preventDefault();
    if(item){
      setItems([...items, {id:Date.now(),itemName:item,isDone:false}])
      setItem('')
    }
  }
  const onDragHandle=(result:DropResult)=>{
    const{source, destination} = result
    if(!destination)return
    if(destination.droppableId===source.droppableId && destination.index===source.index)return

    let add, active=items, complete= completedItems

    if(source.droppableId ==="ItemsList"){
      add = active[source.index]
      active.splice(source.index,1)
    }else{
      add =complete[source.index];
      complete.splice(source.index,1)
    }

    if(destination.droppableId ==="ItemsList"){
      active.splice(destination.index,0, add)
    }else{
      complete.splice(destination.index,0, add)

    }

    setCompletedItems(complete)
    setItems(active)

  }
  return (
    <DragDropContext onDragEnd={onDragHandle}>
    <div className="App">
      <h1>Basic Crud Operation</h1>
    <InputField item={item} setItem={setItem} handleSubmit={handleSubmit} />
    <ListItem items={items} setItems={setItems} completedItems={completedItems} setCompletedItems={setCompletedItems}/>
    </div>
    </DragDropContext>

  );
}

export default App;
