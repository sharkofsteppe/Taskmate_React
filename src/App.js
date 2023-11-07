import './App.css';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';
import { useState } from 'react';


function App() {

  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = setState({});

  return (
    <div className="App">
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
       />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        />
    </div>
  );
}

export default App;
