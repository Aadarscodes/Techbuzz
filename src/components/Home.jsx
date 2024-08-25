import React, { useState, useEffect } from 'react';
import MySection from './MySection';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState('');

  useEffect(() => {
    // No need for a DOMContentLoaded event listener in React
  }, []);

  const fetchProjects = async (topics) => {
    setLoading(true);
    const apiUrl = `https://api.github.com/search/repositories?q=${topics}&per_page=50`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Assuming the repositories' API response contains PR count
      const projectsWithPrCount = await Promise.all(data.items.map(async project => {
        const prResponse = await fetch(project.pulls_url.replace('{/number}', ''));
        const prData = await prResponse.json();
        const prCount = prData.length;
        return { ...project, prCount };
      }));
      setProjects(projectsWithPrCount);
    } catch (error) {
      console.error('Error fetching projects:', error);
      alert('Failed to fetch projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (topics.trim() === '') {
      alert('Please enter topics to search for projects.');
      return;
    }
    fetchProjects(topics.trim());
  };

  const bodyStyle = {
    backgroundColor: '#071c39',
    position: 'flex', // Changed from 'absolute' to 'relative'
    minHeight: '100vh', // Ensure the body takes the full viewport height
    margin: 0,
    overflow: 'hidden'
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2, // Ensure container is above the gradient animation
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    zIndex: 3, // Ensure heading is above the gradient animation
    
  };

  const loadingBarStyle = {
    width: '100%',
    height: '5px',
    backgroundColor: 'blue',
    transform: loading ? 'scaleX(1)' : 'scaleX(0)',
    transition: 'transform 0.3s ease',
    zIndex: 3, // Ensure loading bar is above the gradient animation
  };

  const searchBarsStyle = {
    marginBottom: '20px',
    zIndex: 3, // Ensure search bar is above the gradient animation
  };

  const inputStyle = {
    padding: '10px',
    width: 'calc(100% - 120px)',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: '#000',
    backgroundColor: '#fff'
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
    margin: '20px',
  };

  const projectsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    zIndex: 3, // Ensure projects container is above the gradient animation
  };

  const projectStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const linkStyle = {
    color: 'lightblue',
    textDecoration: 'none'
  };

  const gradientStyle = {
    '--size': '750px',
    '--speed': '50s',
    '--easing': 'cubic-bezier(0.8, 0.2, 0.2, 0.8)',
    width: 'var(--size)',
    height: 'var(--size)',
    filter: 'blur(calc(var(--size) / 5))',
    backgroundImage: 'linear-gradient(hsl(222, 84%, 60%), hsl(164, 79%, 71%))',
    animation: 'rotate var(--speed) var(--easing) alternate infinite',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1 // Ensure gradient is behind all content
  };

  return (
  <div style={bodyStyle}>
      <div className="gradient" style={gradientStyle}></div>
      <div style={containerStyle}>
        <section id="heading" style={headingStyle}>
          <h2>Search Projects</h2>
        </section>

        {loading && <div id="loading-bar" style={loadingBarStyle}></div>}
        
        <section id="search-bars" style={searchBarsStyle}>
          <form id="projectForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="topics"
              name="topics"
              placeholder="Enter topics..."
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Search Projects</button>
          </form>
        </section>

        <section id="projects">
          <div className="projects" id="projects-container" style={projectsContainerStyle}>
            {projects.map(project => (
              <div className="project" key={project.id} style={projectStyle}>
                <h3>{project.name}</h3>
                <p>{project.description || 'No description available'}</p>
                <p>Pull Requests: {project.prCount}</p>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" style={linkStyle}>View on GitHub</a>
              </div>
            ))}
          </div>
        </section>
        <section>
        {MySection}
        </section>
      </div>
    </div>
   
  );
};

export default Home;
