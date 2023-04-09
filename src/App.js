// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';

function App() {
  return (
   <>
  
<Navbar title="Texterz" aboutText="About"/>
<div className="container my-3">
<TextForm heading="Enter the text below to analyze"/>
</div>
   </>
  );
}

export default App;
