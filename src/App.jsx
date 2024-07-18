import './App.css'
import NavBar from './NavBar';

export default function App() {
  const title = "Welcome to the blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <div className = "App">
      <NavBar></NavBar>
      <div className = "content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p> {10} </p>
        <p>{ "Hello neighbors" }</p>
        <p>{ [1, 2, 3,4, 5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href = {link}>Google Site</a
                                    >
      </div>
    </div>
  );
}

