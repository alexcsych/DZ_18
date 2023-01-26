import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import LoginForm from './components/forms/LoginForm';

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Link to='/signup'>Signup</Link>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <Link to='/login'>Login</Link>
          <LoginForm />
        </Route>
        <Route path='/'>
          <Link to='/login'>Login</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
