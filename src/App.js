//import logo from './logo.svg';
import './App.css';
import { Globe } from './Globe';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Taha Jamal</h2>
      </header>
      <section className='banner'>
        <Globe/>
      </section>
      <section className='menu'>
        <div className='sideTab'>About Me</div>
        <div className='sideTab'>Projects</div>
        <div className='sideTab'>Work</div>
      </section>
    </div>
  );
}

export default App;
