import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addVid } from './animalReduxer';
import countereasyer from './animalReduxer';
import { minus, plus } from './counter';
import { useEffect, useState } from 'react';
import { addFinal, addName, addNumber } from './addperson';

function App() {
  const [input, setinput] = useState('')
  const [name, setname] = useState('')
  const [number,setNumber] = useState('')
  const [open, setopen] = useState(false)
 const animal = useSelector(state =>state.animal)
 const addperson = useSelector(state =>state.addperson)
 const dispach = useDispatch()
 const counter = useSelector(state=>state.counter)
 const counterdispach = useDispatch()
 const newContact = ()=>{
  dispach(addName(name))
  dispach(addNumber(number))
  dispach(addFinal({name,number}))
 }
 const personArr = addperson.total
 useEffect(()=>{
if (input ===personArr){
  alert('match')
}
  console.log(addperson.total)
 })
  return (
    <div className="App">
    <h1>Добавляй разных животных в список (Created by Redux-Toolkit)
    </h1>
   {animal.vid.map(specie=>(
    <div key={specie}>
      {specie}
      </div>
   ))}
   <button onClick={()=>{
    dispach(addVid('pecook'))
   }}>
 add peacook 
   </button>
   <section>
    <p>Счетчик </p>
    <button onClick={()=>{
      dispach(plus())
    }}>
plus
    </button>
    <button onClick={()=>
     { dispach(minus())}}>
minus
    </button>
    <p>Amount:{counter.count}</p>
   </section>

  <div>
   <h1> Добавить контакты</h1>
  
   <input value={input} onChange={(e)=>setinput(e.target.value)} placeholder=' Contact'></input>
<button onClick={()=>{
  setopen(!open)
}}>+++</button>
{
  open ?
  <div>
 <input placeholder='name' value={name} onChange={(e)=>setname(e.target.value)} ></input>
 <input placeholder='number'value={number} onChange={(e)=>setNumber(e.target.value)}  ></input>
 <button onClick={newContact}>Add</button>
 </div>
 :
 <h1></h1> 
}
<div>
{addperson.total.map(specie=>(
    <div key={specie}>
     Имя <span>{specie[0]}</span>   номер:{specie[1]} 
      </div>
   ))}
</div>
  </div>
  </div>
  );
}

export default App;
