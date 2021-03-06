import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import { pageLink } from "./general/constant";
import Index from "./components/pages/Index";
import MyList from "./components/pages/MyList";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NavBar from "./components/layout/NavBar/NavBar";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={Login} path={pageLink.login} />
          <Route exact component={Register} path={pageLink.register} />
          <div>
            <NavBar />
            <Route exact component={Index} path={pageLink.index} />
            {/* <Route exactly component={Login} pattern="/login" /> */}
            <Route exact component={MyList} path={pageLink.myList} />
            {/* <Route component={Page404} /> */}
            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
