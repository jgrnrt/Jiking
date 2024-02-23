import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Calculator from './pages/Calculator/Calculator';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Imprint from './pages/Imprint/Imprint'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'
import NotFoundPage from './pages/NotFound/NotFound';

function App() {

  return (
    <Router basename="/Jiking">
      {/* falls main nicht groß genug ist, footer an boden drücken */}
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* main wächst, wenn viewport nicht ausgefüllt wird*/}
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Imprint" element={<Imprint />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}


export default App;