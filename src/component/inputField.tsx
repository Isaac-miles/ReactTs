import React, {useRef} from 'react'
import './styles.css'

interface itemProps{
    item:string;
    setItem:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit:(e:React.FormEvent)=>void;
}

 const InputField = ({item, setItem,handleSubmit} : itemProps) => {
    const inputRef= useRef<HTMLInputElement> (null);

  return (
    <form className='input' onSubmit={(e)=>{
        handleSubmit(e)
        // inputRef.current?.blur();
    }}>
        <input 
         ref={inputRef}
         type='input'
         placeholder='Enter a value' 
         className="input_box"
         value={item}
         onChange={(e)=>setItem(e.target.value)}/>
        <button className='input_submit' type='submit'> Create</button>
    </form>
  )
}

export default InputField