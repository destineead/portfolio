import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
