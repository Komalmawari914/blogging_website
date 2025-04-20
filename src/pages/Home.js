// src/pages/Home.js
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList';
import Header from '../components/Header';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      setPosts(savedPosts);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <Header />
      <div className="container">
        {isLoading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3 className="empty-text">No blog posts yet</h3>
            <Link to="/add" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Create Your First Post
            </Link>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1>Latest Posts</h1>
              <Link to="/add" className="btn btn-primary">
                + New Post
              </Link>
            </div>
            <BlogList posts={posts} onDelete={handleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;