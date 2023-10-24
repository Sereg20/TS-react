import './App.css';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Root from './pages/Root';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true, 
          element: <HomePage />,
        },
        {
          path: 'login', 
          element: <LoginPage />,
        },
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
