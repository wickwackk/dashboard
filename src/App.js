import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
