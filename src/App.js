
import Navbar from './Navbar'
import Home from './Home'

function App() {

    // const title = 'Welcome to the new blog';
    // const likes = 60;
    // const person = {name:'yoshi',age:30}
    // const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />


        {/* #4 */}
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p> */}

        {/* <p>{person}</p> */}

        {/* <p>{10}</p>
        <p>{'hello, ninjas'}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a> */}
        {/* #4 */}
      </div>
    </div>
  );
}

export default App;
