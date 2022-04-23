import React,{useState} from 'react'

const AddTask = ({Addon}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const handleSubmit=(e)=>{
      e.preventDefault()
     if(!text){
         return  alert('Pleas Add Task')
     }
     Addon({text,day,reminder})
     setText('')
     setDay('')
     setReminder(false)

  }
  return (
      <form  className='add-form' onSubmit={handleSubmit}>
   
   <div className='form-control'>
       <label>Task</label>
       <input type='text' placeholder='AddTask...'
       value={text}  onChange={(e)=>setText(e.target.value)} />
   </div>
   <div className='form-control'>
       <label>Date</label>
       <input type='text' placeholder='AddDate...' 
       value={day} onChange={(e)=>setDay(e.target.value)} />
   </div>
   <div className=' form-control form-control-check'>
       <label>Reminder</label>
       <input type='checkbox'   value={reminder}  checked={reminder}
       onChange={(e)=>setReminder(e.currentTarget.checked)} />
   </div>
   <input  className='btn btn-block' type='submit'   value='Save Task' />
      </form>
  )
}

export default AddTask