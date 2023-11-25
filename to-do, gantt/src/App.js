import Navbar from "./Navbar"
import Home from "./pages/Home"
import {TodoWrapper} from './pages/To-Do';
import { Route, Routes } from "react-router-dom"
import GanttChart from "./pages/GanttChart";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
		      <Route path="/todo" element={<TodoWrapper />} />
          <Route path="/gantt" element={<GanttChart />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
