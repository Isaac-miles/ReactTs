import React,{FormEvent, useState,useRef, useEffect} from 'react'
import { Item } from '../model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'
import { Draggable } from 'react-beautiful-dnd'


interface itemProps{
    index:number
    item:Item,
    items:Item[],
    setItems:React.Dispatch<React.SetStateAction<Item[]>>;
}

export default function ListItem({index,item,items,setItems}:itemProps) {
    const inputRef= useRef<HTMLInputElement>(null)

    const [edit, setEdit] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<string>(item.itemName)

    const handleDone =(id: number)=>{
        setItems(items.map((item)=>item.id ===id?{...item, isDone:!item.isDone}:item))
    }
    const handleDelete =(id: number)=>{
        setItems(items.filter((item)=>item.id !==id))
    }
    const handleEdit =(e:FormEvent, id:number)=>{
        e.preventDefault();
        setItems(
            items.map((item)=>item.id ===id?{...item,itemName:editItem}:item)
        )
        setEdit(false)
    }
    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
        {
            (provided,snapshot)=>(
                <form className={`single_item ${snapshot.isDragging?'dragging':''}`} 
                ref={provided.innerRef}
                onSubmit={(e)=>handleEdit(e, item.id)} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}>

                {edit? (
                <input value={editItem} ref={inputRef} onChange={(e)=>setEditItem(e.target.value)} className='single_item_text'/>
                )
                :  (         
                        item.isDone?(<s className="single_item_text">{item.itemName}</s>):
                 
                        <span className="input_item_text">{item.itemName}</span>          
                )}
           
                <div>
                    <span className="icons" onClick={()=>{
                        if(!edit && !item.isDone)setEdit(!edit)
                    }}>{<AiFillEdit/>}</span>
                    <span className="icons" onClick={()=>handleDelete(item.id)}>{<AiFillDelete/>}</span>
        
                    <span className="icons" onClick={()=>handleDone(item.id)}>{<MdDone/>}</span>
                </div>
            </form>
            )

            
        }

    </Draggable>
  )
}
