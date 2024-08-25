import NavBar from './NavBar';
import Home from './Home';

export default function App() {
  const title = "Welcome to the blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className = "App">
      <NavBar />
      <div className = "content">
        <Home />
      </div>
    </div>
  );
}

