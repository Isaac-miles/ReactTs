import React from 'react'
import './styles.css'
import { Item } from '../model';
import ListItem from './listItem';

interface itemProps{
    items:Item[];
    setItems:React.Dispatch<React.SetStateAction<Item[]>>;
}

export default function ListItems({items,setItems}:itemProps) {
  return (
    <div className='items'>
        {items.map((item)=>(
            <ListItem item={item} setItems={setItems} key={item.id} items={items}/>
        ))}
    </div>

  )
}
