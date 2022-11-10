import { Route } from "wouter";
import "./App.css";

import StaticContext from "./context/StaticContext";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import Detail from "./pages/Detail/Detail";
import { GifsContextProvider } from "./context/GifContext";

function App() {
  return (
    <StaticContext.Provider value={{ name: "alex" }}>
      <div className="App">
        <section className="App-content">
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/detail/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
