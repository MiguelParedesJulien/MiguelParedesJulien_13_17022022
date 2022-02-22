import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import HomePage from "pages/homepage/Homepage";
import Login from "pages/login/Login";
import ProfilePage from "pages/profilePage/ProfilePage";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
