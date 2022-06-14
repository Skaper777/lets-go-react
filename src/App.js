import './App.css';
import Layout from './hoc/Layout/Layout';
import MainPage from './routes/MainPage/MainPage';
import About from './routes/About/About';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='about' element={<About/>} />
      </Routes>     
    </Layout>
  );
}

export default App;
