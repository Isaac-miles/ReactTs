import React from 'react'
import { Item } from '../model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'


interface itemProps{
    item:Item,
    items:Item[],
    setItems:React.Dispatch<React.SetStateAction<Item[]>>;
}

export default function ListItem({item,items,setItems}:itemProps) {
    const handleDone =(id: number)=>{
        setItems(items.map((item)=>item.id ===id?{...item, isDone:!item.isDone}:item))
    }
  return (
    <form className='single_item'>
       {
       item.isDone?(<s className="single_item_text">{item.itemName}</s>):

       <span className="single_item_text">{item.itemName}</span>
       
       }
        <div>
            <span className="icons">{<AiFillEdit/>}</span>
            <span className="icons">{<AiFillDelete/>}</span>

            <span className="icons" onClick={()=>handleDone(item.id)}>{<MdDone/>}</span>
        </div>
    </form>
  )
}
