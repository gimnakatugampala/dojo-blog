import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

    // const title = 'Welcome to the new blog';
    // const likes = 60;
    // const person = {name:'yoshi',age:30}
    // const link = 'http://www.google.com';

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/create" >
            <Create />
          </Route>

          <Route path="/blogs/:id" >
            <BlogDetails />
          </Route>

      </Switch>

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
    </Router>
  );
}

export default App;
