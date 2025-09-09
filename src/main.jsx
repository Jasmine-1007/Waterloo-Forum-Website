import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx';
import Event from './components/Pages/Event.jsx';
import Home from './components/Pages/Home.jsx';
import About from './components/Pages/About.jsx';
import NotFound from './components/Pages/NotFound.jsx';
import PastEventPage from './components/Pages/PastEventPage.jsx';
import UpcomingEventPage from './components/Pages/UpcomingEventPage.jsx';

const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/',
    element: <Home />,
    errorElement: <NotFound />,

  },
  {
    path: '/event',
    element: <Event/>
  },
  {
    path: '/event/pastevent',
    element: <PastEventPage/>
  },
   {
    path: '/event/upcomingevent',
    element: <UpcomingEventPage/>
  },
  {
    path: '/about',
    element: <About/>
  }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,

)
