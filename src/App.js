// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
  );
}

export default App;