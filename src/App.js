import "./App.css";
import { Link, Route } from "wouter";
import Home from "./pages/Home/home";
import Detail from "./pages/Detail/detail";
import SearchResults from "./pages/SearchResults/searchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";
function App() {
  return (
    <StaticContext.Provider
      value={{
        name: "Stephen",
        otraAtributo: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img
                alt="Giffy logo"
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/lion-fire-logo-design-template-free-89daa14626ac403bd3cf6282036663ff_screen.jpg?ts=1572094154"
              />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={() => <h1>404 ERROR :( </h1>} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
