import React from 'react'

function Contact() {
    return(
        <div>
        <h1>Contact you </h1>
        <input type="text" placeholder="name" 
        className="border border-solid black m-2 p-2" />
        <input type="text" placeholder="place" 
        className="border border-solid black m-2 p-2" />
        <button type="submit" 
        className="border border-solid black m-2 p-2 rounded-lg
        ">Submit</button>
        </div>
    )
}

export default Contact