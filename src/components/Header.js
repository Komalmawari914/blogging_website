// src/components/Header.js
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">📝</span>
          <span>Bloggssss!</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link">New Post</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;