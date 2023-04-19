import Header from "./components/Header";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Store/>} />
          <Route path='/success' element={<Success/>} />
          <Route path='/cancel' element={<Cancel/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
