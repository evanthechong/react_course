
export const TaskCard = (props) => { //alter1: export const TaskCard = ({task,handleDelete}) => {}

    
  return (
    <div>
      <li className={props.task.completed?"completed":"incomplete"}> 
          <span>{props.task.id}-{props.task.name}-{props.info}</span>
          <button className='' onClick={()=>props.handleDelete(props.task.id)}>Delete</button>
      </li>
    </div>
    
  )

}
