import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <ContactForm />
    </div>
  );
}

export default App;
