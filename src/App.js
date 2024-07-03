import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy !");
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
