import './App.css';
import Home from './routes/Home.js'
import PostPage from './routes/PostPage.js'
import GamePage from './routes/GamePage.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/post/:id'>
          <PostPage />
        </Route>
        <Route path='/game'>
          <GamePage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
