import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
// import { Route, Router, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./components/screen/HomeScreen";
import ProductScreen from "./components/screen/ProductScreen";
function App() {
  return (
    <Router>
      
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="" element={<HomeScreen/>} exact/>
            <Route path="/product/:id" element={<ProductScreen/>} />
            
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
