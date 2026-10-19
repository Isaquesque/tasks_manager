import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from "./components/structure/Base"
import TasksList from "./components/pages/TasksList"
import TaskCreate from './components/pages/TaskCreate';
import TaskEdit from "./components/pages/TaskEdit"
import TaskDetail from './components/pages/TaskDetail';
import TasksRepository from "./repositories/tasksRepository"


function App() {

  const tasksRepository = new TasksRepository()

  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route path="/" element={<TasksList tasksRepository={tasksRepository}/>}/>
          <Route path="/create" element={<TaskCreate tasksRepository={tasksRepository}/>}/>
          <Route path="/edit/:id" element={<TaskEdit tasksRepository={tasksRepository}/>}/>
          <Route path="/detail/:id" element={<TaskDetail tasksRepository={tasksRepository}/>}/>
        </Routes>
      </Base>
    </BrowserRouter>
  )
}

export default App
