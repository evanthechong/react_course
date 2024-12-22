import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useState } from 'react';

export const App2 = () => {
    //States
    const[count,setCount] = useState(0);

    //variables
    
    
    //functions
    function handleAdd(){
        setCount(a=>a+1)
        console.log(count)
    }
    function handleSub(){
        setCount(a=>a-1)
        console.log(count)
    }
    function handleReset(){
        setCount(a=0)
        console.log(count)
    }

    //component return
    return(
        <>
        <Header/>
        <div>
            <h1 className="header">Hello</h1>
        </div>
        <div className='box'>
            <p>{count}</p>
            <button onClick={handleAdd} className='add'>ADD</button>
            <button onClick={handleSub} className='sub'>SUB</button>
            <button onClick={handleReset} className='sub'>RESET</button>
        </div>
        <Footer/>
        </>
);
}



