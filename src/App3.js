import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasklist } from './components/Tasklist';
import { AddTask } from './components/AddTask';
import { useState } from 'react';

//simple task list 
export const App3 = () => {
    const info="Random"

    const[tasks,setTasks] = useState([
            {id:1111, name:"Record lectures", completed:true},
            {id:1112, name:"Eat food", completed:true},
            {id:1113, name:"Record lecurees", completed:true}
        ]);

    return(
        <div className='App'>
            <Header/>
            <main>
                <AddTask tasks={tasks} setTasks={setTasks}/>
                <Tasklist tasks={tasks} setTasks={setTasks}/>
            </main>
            
            <Footer/>
        </div>  
);
}



