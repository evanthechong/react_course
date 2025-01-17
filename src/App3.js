import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasklist } from './components/Tasklist';

//simple task list 
export const App3 = () => {
    const info="Random"
    return(
        <div className='App'>
            <Header/>
            <Tasklist info={info}/>
            <Footer/>
        </div>  
);
}



