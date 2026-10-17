import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from "./components/Base"
import TasksList from "./components/pages/TasksList"
import TaskCreate from './components/pages/TaskCreate';
import TaskEdit from "./components/pages/TaskEdit"
import TaskDetail from './components/pages/TaskDetail';


function App() {

  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route path="/" element={<TasksList/>}/>
          <Route path="/create" element={<TaskCreate/>}/>
          <Route path="/edit/:id" element={<TaskEdit/>}/>
          <Route path="/detail/:id" element={<TaskDetail/>}/>
        </Routes>
      </Base>
    </BrowserRouter>
  )
}

export default App
