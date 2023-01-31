import React from 'react'

export const Dropdown = () => {
  return (
    <div>
      {fetch('http://localhost:4000/api/shoes', {
        method: 'GET',
        headers: 'application/json'
      })
      .then(res => res.json())
      .then(data => {
        
      })
      }
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae suscipit ducimus laudantium reprehenderit libero. Aut beatae delectus voluptatibus nobis consequuntur, optio odit quas sapiente saepe mollitia vitae. Tempore, nostrum excepturi!
        </p>
        
            
    </div>
  )
}
