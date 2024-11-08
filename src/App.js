import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderContainer />
        <HomeContainer />
      </header>
    </div>
  );
}

export default App;
