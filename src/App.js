import './App.css';
import Navbar from './components/Navbar'
import './Styles/style.css'
import Intro from './components/Intro'
import Shorten from './components/Shorten'
import Advancstat from './components/Advancstat'
import Boostlinks from './components/Boostlinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Shorten/>
      <Advancstat/>
      <Boostlinks/>
      <Footer/>
    </div>
  );
}

export default App;
