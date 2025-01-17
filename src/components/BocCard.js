import { use, useState } from "react"


export const BocCard = ({result, children}) => {
    const[show,setShow]=useState("true");

  return (
    <div>
      <div className={show?"":"hidden"}>
        <div className={`box ${result}`}>
          {children}
        </div>
        <button onClick={()=> setShow(!show)} className="trigger"> Hide </button>
      </div>
    </div>
  )
}
