import React from 'react'

const Detail = (test :  Array<{ }>) => {

    return (
        <div>
        {test.map(item =>(
         <li>
             {item}
         </li>
         ))
        }
      
           
        </div>
    )
}

export default Detail
