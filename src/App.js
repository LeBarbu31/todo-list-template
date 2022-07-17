import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import './styles/index.scss'
import { useDispatch } from 'react-redux';
import { getTasks } from "./redux/action/task.action";
import TaskPage from "./pages/taskPage/TaskPage";

function App() {

  const dispatch = useDispatch();
  dispatch(getTasks());

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
