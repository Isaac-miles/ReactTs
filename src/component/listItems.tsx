import React from 'react'
import './styles.css'
import { Item } from '../model';
import ListItem from './listItem';
import { Droppable } from 'react-beautiful-dnd';

interface itemProps{
    items:Item[];
    completedItems:Item[];
    setItems:React.Dispatch<React.SetStateAction<Item[]>>;
    setCompletedItems:React.Dispatch<React.SetStateAction<Item[]>>;
}

export default function ListItems({items,setItems,completedItems,setCompletedItems}:itemProps) {
  return (
    <div className='container'>
    <Droppable droppableId='ItemsList'>
      {
        (provided,snapshot)=>(
          <div className={`items ${snapshot.isDraggingOver? 'dragActive':''}`} ref={provided.innerRef} {...provided.droppableProps}>
          <span className="items_heading">Active Tasks</span>
          <span>Drag</span>
          {items.map((item,index)=>(
                 <ListItem item={item} setItems={setItems} key={item.id} items={items} index={index}/>
             ))}
             {provided.placeholder}
          </div>
        )
      }
    
    </Droppable>
    <Droppable droppableId='RemoveItem'>
      {
        (provided,snapshot)=>(
          <div className= {`items remove ${snapshot.isDraggingOver?'dragComplete':''}`} ref={provided.innerRef} {...provided.droppableProps}>
          <span className="items_heading">Completed Tasks</span>
          <span>Drop</span>
          {completedItems.map((completedItem,index)=>(
                 <ListItem 
                  item={completedItem}
                 setItems={setCompletedItems} 
                 key={completedItem.id} 
                 items={completedItems}
                 index={index}
                 />
             ))}
             {provided.placeholder}
          </div>
        )
      }
    </Droppable>
  

    </div>

  )
}
