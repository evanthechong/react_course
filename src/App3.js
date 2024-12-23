import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useState } from 'react';

export const App3 = () => {
    //States
    const[tasks,setTasks] = useState([
        {id:1234, name:"Record lecurees", completed:true},
        {id:1235, name:"Record lecurees", completed:true},
        {id:1236, name:"Record lecurees", completed:true}
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
    //component return
    return(
        <>
        <Header/>
        <div className='App'>
            <h1>Task list</h1>
            <ul>
                <button onClick={()=>setShow(!show)}>Toggle</button>
                <button onClick={handleToggle}>Toggle</button>
                {show && tasks.map((task)=>(
                    <li key={task.id}>
                        <span>{task.id}-{task.name}</span>
                        <button onClick={()=>handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        <Footer/>
        </>
);
}



