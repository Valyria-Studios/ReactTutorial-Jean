import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className = "App">
      <NavBar />
      <div className = "content">
        <Switch>
          <Route extract path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

