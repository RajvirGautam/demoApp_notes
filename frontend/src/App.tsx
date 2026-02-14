import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./page/Login.tsx";
import NotePage from "./page/Note.tsx";

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/" replace />;
}

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/notes" 
          element={
            <ProtectedRoute>
              <NotePage />
            </ProtectedRoute>
          } 
        />
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;