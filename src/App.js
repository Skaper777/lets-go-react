import './App.css';
import Layout from './hoc/Layout/Layout';
import MainPage from './routes/MainPage/MainPage';
import About from './routes/About/About';
import EventPage from './routes/Events/Event/Event';
import { useRoutes } from 'react-router-dom'

function App() {
  let routes = [    
    {
      path: "/",
      element: <MainPage /> 
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
      element: <h1>Error!</h1>
    }      
  ]

  return (
    <Layout>
      {useRoutes(routes)}    
    </Layout>
  );
}

export default App;
