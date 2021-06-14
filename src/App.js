import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './context/DataContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';
import MainContainer from './components/MainContainer';

const App = () => {
  return (
    <Router>
      <div> <DataProvider>
        <Switch>
          <Route path="/home">
            <MainContainer />
          </Route>
          <Route path="/">
            <WelcomeComponent />
          </Route>
        </Switch>  </DataProvider>
      </div>
    </Router>

  );
};

export default App;
