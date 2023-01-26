import styles from './App.module.sass';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import LoginForm from './components/forms/LoginForm';
import SignupForm from './components/forms/SignupForm';

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Link className={styles.button} to='/signup'>
            Signup
          </Link>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <Link className={styles.button} to='/login'>
            Login
          </Link>
          <SignupForm />
        </Route>
        <Route path='/'>
          <Link className={styles.button} to='/login'>
            Login
          </Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
