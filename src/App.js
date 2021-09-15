import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";

import FooterBase from "./Components/Footer/FooterBase";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Header />
          <Portfolio />
          <FooterBase />
        </div>
      </div>
    </div>
  );
}

export default App;
