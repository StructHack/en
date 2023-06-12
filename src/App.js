import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Home from './components/Home';
import './styles/Curve.css'
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contacts from './components/Contacts';

function App() {
  const [loaded, setLoaded] = useState(1);

  return (
    <BrowserRouter>
    <div className="App">
      {false ? 
      <Loading loaded={loaded} setLoaded={setLoaded}/>
      :
      <>   
        <Home />
      <section class='spacer layer'></section>
         <Projects />
         <section class='spacer layer2'></section>
         <Contacts />
      </>
      }
    </div>
    </BrowserRouter>
  );
}

export default App;
