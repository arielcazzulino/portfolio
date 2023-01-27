import './App.css';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero'; 
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (  
    <div className="App">
      <Nav/>
      <Hero/>
      <Portfolio/> 
    </div>
  );
}

export default App;
