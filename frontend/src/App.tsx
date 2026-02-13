import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./page/Login.tsx";
import NotePage from "./page/Note.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/notes" element={<NotePage />} />  {/* /note se /notes kiya */}
      </Routes>
    </Router>
  )
}

export default App;