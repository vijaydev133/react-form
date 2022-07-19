import React from "react"

export default function Forms(){
    const [name,setName] = React.useState("")
    const [heading,setHeading] = React.useState("")
    function handleChange(event){
        setName(event.target.value)
    }

    function handleClick(event){
        setHeading(name)
        event.preventDefault()
    }
   return(
    <div>
        <h1>Hi {name}</h1>
        <h1>Hello {heading}</h1>
        <form >
        <input 
        onChange = {handleChange}
        type="text" 
        />
        
        <button type="submit" onClick={handleClick}>Submit</button>
        </form>
    </div>
   )
}