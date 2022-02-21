import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import HomePage from "pages/homepage/Homepage";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
