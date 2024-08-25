// src/GitHubLogin.js
import React, { useEffect } from 'react';
import axios from 'axios';

const GitHubLogin = () => {
  const CLIENT_ID = 'YOUR_GITHUB_CLIENT_ID';  // Replace with your Client ID
  const REDIRECT_URI = 'http://localhost:3000';  // Replace with your redirect URI

  const loginUrl = `https://github.com/aloneking789`;

  const handleLogin = () => {
    window.location.href = loginUrl;
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('code');

    if (code) {
      axios.post('http://localhost:5000/api/auth/github', { code })
        .then(response => {
          console.log('Access Token:', response.data.access_token);
          // You can now use the access token to fetch user data from GitHub
        })
        .catch(error => {
          console.error('Error exchanging code for token:', error);
        });
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h2 style={{ marginBottom: '20px' }}>Login with GitHub</h2>
      <a 
  href="http://github.com/aloneking789"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-block',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    textDecoration: 'none', // Remove underline from the link
    textAlign: 'center', // Center text in the button
  }}
>
  Sign in with GitHub
</a>

    </div>
  );
};

export default GitHubLogin;
