import React from 'react'
import { TaskCard } from './TaskCard';
import { useState } from 'react';
import { BocCard } from './BocCard';

export const Tasklist = ({info}) => {
    const[tasks,setTasks] = useState([
        {id:1111, name:"Record lectures", completed:true},
        {id:1112, name:"Eat food", completed:true},
        {id:1113, name:"Record lecurees", completed:true}
    ]);
    const[show,setShow]=useState(true)

    //variables
    //functions
    function handleDelete(id){
        setTasks(tasks.filter(task=>id !== task.id))
        console.log(id);
    }
    function handleToggle(){
        setShow(!show)
    }

  return (
    <div>
         <ul>
            <button className='' onClick={()=>setShow(!show)}>Toggle</button>
            <button className='' onClick={handleToggle}>Toggle</button>
            {show && tasks.map((task)=>( //conditional logic to show and hide tasks
                <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete}/> //add dynamic values and functions as props
            ))} 
        </ul>

        {/* componenet children concept */}
        <BocCard result="success">
                <p className='title'>Lorem ipsum dolor sit amet.</p>
                <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
            </BocCard>
            <BocCard result="warning">
                <p className='title'>Lorem ipsum dolor sit amet.</p>
                <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
            </BocCard>
            <BocCard result="alert">
                <p className='title'>Lorem ipsum dolor sit amet.</p>
                <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, cupiditate.</p>
            </BocCard>
    </div>
  )
}
