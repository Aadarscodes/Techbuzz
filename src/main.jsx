import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import GitHubLogin from './components/Login/loginhandle';
import Home from './components/Home';

// Create an ErrorPage component
function ErrorPage() {
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're sorry, but an unexpected error has occurred.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />, // Add errorElement here
  },
  {
    path: 'Login',
    element: <GitHubLogin/>,
    errorElement: <ErrorPage />, // Add errorElement here
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
