import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Cube from './components/Cube';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { Helmet } from "react-helmet";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Helmet>
        <title>The Rock (1996)</title>
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Body /><About /><Projects /><Skills /><Footer /><Cube /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;