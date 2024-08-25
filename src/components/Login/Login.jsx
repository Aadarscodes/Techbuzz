import React from 'react';

const GitHubLogin = () => {
  const CLIENT_ID = 'Ov23lid8abtSBIcgKVdI';  // Replace with your Client ID
  const REDIRECT_URI = 'Home';  // Replace with your redirect URI

  const loginUrl = `https://github.com/aloneking789`;

  const handleLogin = () => {
    window.location.href = loginUrl;
  };

  const gra = {
    '--size': '750px',
    '--speed': '50s',
    '--easing': 'cubic-bezier(0.8, 0.2, 0.2, 0.8)',
    width: 'var(--size)',
    height: 'var(--size)',
    filter: 'blur(calc(var(--size) / 5))',
    backgroundImage: 'linear-gradient(hsl(222, 84%, 60%), hsl(164, 79%, 71%))',
    backgroundColor: '#282c34', // Set the background color here
    animation: 'rotate var(--speed) var(--easing) alternate infinite',
    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1 // Ensure gradient is behind all content
  };

  return (
    <body style={gra}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h2 style={{ marginBottom: '20px' }}>Login with GitHub</h2>
        <button 
          onClick={handleLogin}
          style={{
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Sign in with GitHub
        </button>
      </div>
    </body>
  );
};

export default GitHubLogin;
