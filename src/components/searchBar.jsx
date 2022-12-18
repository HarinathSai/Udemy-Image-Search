import React,{useState} from 'react'



function SearchBar({onSubmit}) {
  const [term,setTerm]=useState('');
 const handleFormSubmit =(event)=>{
  event.preventDefault()
   onSubmit(term) //Term is from input field not from api parameter.
   
 }

 const handlChange=(event)=>{
setTerm(event.target.value)
 }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handlChange} />
      </form>
    </>
  )
}

export default SearchBar