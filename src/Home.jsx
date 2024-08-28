const Home = () => {

  const handleClick = () => {
    console.log("Hello, User");
  }

  const handleClickAgain = (name) => {
    console.log("Hello, " + name);
  }
  
  return (
    <div className = "home">
      <h2>Homepage</h2>
      <button onClick={handleClick()}>Click Me</button>
      <button onClick={handleClickAgain('name')}>Click Me Again</button>
    </div>
  )
}

export default Home;

//testing please work
//testing it worked yay but times 2