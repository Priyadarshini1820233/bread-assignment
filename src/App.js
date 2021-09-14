import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Header />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
