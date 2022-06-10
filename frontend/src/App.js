import React, {useEffect, useState} from 'react';
import Axios from "axios";
import Card from './components/cards/card';
import THead from './components/cards/thead';
import './App.css';

function App() {
  const [values, setValues] = useState();
  const [listVinil, setListVinil] = useState();

  const handChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }
  const handleClickButton=() => {
    Axios.post("http://localhost:3003/register",{
      name: values.name,
      price: values.price,
      category: values.category,
    }).then(()=>{
      setListVinil([...listVinil,{
        name: values.name,
        price: values.price,
        category: values.category,
      }]);
    });
  };

  useEffect(()=>{
    Axios.get("http://localhost:3003/getCards").then((response)=>{
      setListVinil(response.data);
    })
  },[listVinil])

  return (
    <div className='app--container'>
     <div className='register--container'>
        <h1 className='register--title'>Disco de Vinil</h1>
        <input type="text" name='name' placeholder='Nome'className='register--input' onChange={handChangeValues} />
        <input type="text" name='price' placeholder='Preço'className='register--input' onChange={handChangeValues}/>
        <input type="text" name='category' placeholder='Categoria'className='register--input' onChange={handChangeValues}/>
        <button type='submit' className='register--button' onClick={()=>handleClickButton()}>Cadastrar</button>
     </div>
     <THead></THead>
     {typeof listVinil !== "undefined" && listVinil.map((value) => {
       return (
        
       <Card 
       key={value.id} 
       listCard={listVinil} 
       setListCard={setListVinil}
       id={value.idvinil}
       name={value.name}
       price={value.price}
       category={value.category}
       ></Card>
       );
     })};
     
    </div>
  );
}

export default App;
