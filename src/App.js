import React,{useState} from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, settasks] = useState([{
    id:1,text:'Doctore Appo',day:'3-5-2022',reminder:true},
    {id:2,text:'Meeting  At ...',day:'2-6-2022',reminder:true},
    {id:3,text:'Shopping ',day:'30-4-2022',reminder:true}
  ])
///showadd
 const [showAdd, setshowAdd] = useState(false)
  ///Addon
  const addon=(task)=>{
    const id=Math.floor(Math.random()*100)+1
    const newtask={id,...task}
    settasks([...tasks,newtask])
  }
  const delethandler=(id)=>{
    settasks(tasks.filter((task)=>{return  task.id!==id}))
  }
  //ToggoleReminder
  const toggleReminder=(id)=>{
    settasks(tasks.map(task=>{
      return task.id===id ?{...task,reminder:!task.reminder}:task
    }))
 }
  
  return (
    <div className="App">
     <Header title={'Tasks Tracker'} 
     showhandle={()=>setshowAdd(!showAdd)} changestyle={showAdd} />
    {showAdd && <AddTask  Addon={addon} />}
    {tasks.length >0 ? <Tasks  tasks={tasks} 
     delettask={delethandler}
     toggoleReminder={toggleReminder}
        />:'No Task...'}
    </div>
  );
}

export default App;
