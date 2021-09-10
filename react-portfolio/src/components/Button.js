import React from 'react';


export default function Button({filter,button}) {
  return (
    <div>
      {
        button.map((button,index)=>{
          return <button key = {index} onClick={()=>filter(button)}>
            {button}
          </button>
        })
      }
    </div>
  )
}
