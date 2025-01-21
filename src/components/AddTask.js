import { useState, useRef } from "react"
import"./AddTask.css"

export const AddTask = ({tasks,setTasks}) => {
  const [taskValue,setTAskValue]=useState("")
  const [progressValue,setProgressValue]=useState(false)
  
  
  const handleChange=(event)=>{
    setTAskValue(event.target.value)
  }

  const handleReset=()=>{
    setTAskValue("");
    setProgressValue(false)
  }

  

  const handleSubmit=(event)=>{
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random()*10000),
      name:taskValue,
      complete:Boolean(progressValue)}
    setTasks([...tasks, task])
    handleReset();
  }

  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}>
          <label htmlFor="task">Task Name</label>
          <input onChange={handleChange} type="text" name="task" id="task" value={taskValue}/>

          <select onChange={(event)=>setProgressValue(event.target.value)} value={progressValue}>
            <option value={false}>Pending</option>
            <option value={true}>Completed</option>
          </select>

          <span onClick={handleReset} className="reset">Reset</span>
          <button type="submit">Add Task</button>
          
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
