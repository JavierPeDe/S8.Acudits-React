import './App.css';
import JokeContainer from './components/JokeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsWeather from './components/weatherCards/CardsWeather';
import { DataProvider } from './context/DataContext';

function App() {
  return (
 
    <div className="App">

      

      <div className="container">
        <JokeContainer />
      </div>
      <DataProvider>
      
        <CardsWeather />
      
      </DataProvider>
    </div>
  
  );
}

export default App;
