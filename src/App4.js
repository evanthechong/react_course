import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useState } from 'react';

export const App4 = () => {
    //States
    const[x,setX] = useState()

    //variables
    //functions
    function handleDelete(id){
        setTasks(tasks.filter(task=>id !== task.id))
        console.log(id);
    }
    function handleToggle(){
        setShow(!show)
    }
    //component return
    return(
        <>
        <Header/>
        <div className='App'>
            <h1>Task list</h1>
            <ul>
                <button className='' onClick={()=>setShow(!show)}>Toggle</button>
                <button className='' onClick={handleToggle}>Toggle</button>
                {show && tasks.map((task)=>(
                    <li key={task.id} className={task.completed?"completed":"incomplete"}>
                        <span>{task.id}-{task.name}</span>
                        <button className='' onClick={()=>handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        <Footer/>
        </>
);
}



