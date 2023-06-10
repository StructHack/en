import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading';
import Home from './components/Home';
import './styles/Curve.css'
import Projects from './components/Projects';
import { useEffect, useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(1);

  return (
    <div className="App">
      {loaded ? 
      <Loading loaded={loaded} setLoaded={setLoaded}/>
      :
      <>
      <section>      
        <Home />
      </section>
      <div class='spacer layer'></div>
      <section>
         <Projects />
      </section>
      </>
      }
    </div>
  );
}

export default App;
