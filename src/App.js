import './App.css';
import Layout from './hoc/Layout/Layout';
import MainPage from './routes/MainPage/MainPage';
import Auth from './routes/Auth/Auth';
import About from './routes/About/About';
import EventPage from './routes/Events/Event/Event';
import EventCreate from './routes/Events/Create/EventCreate';
import { useRoutes } from 'react-router-dom'

function App() {
  let routes = [    
    {
      path: "/",
      element: <MainPage /> 
    },
    {
      path: "auth",
      element: <Auth /> 
    },
    {
      path: "events/create",
      element: <EventCreate /> 
    },
    {
      path: "events/:id",
      element: <EventPage />
    },
    {
      path: "about",
      element: <About /> 
    },
    {
      path: '*',
      element: (
        <div className='container'>
          <h1>Ooops! Page not found</h1>
        </div>
      )
    }      
  ]

  return (
    <Layout>
      {useRoutes(routes)}    
    </Layout>
  );
}

export default App;
