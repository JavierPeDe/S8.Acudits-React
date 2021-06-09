import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './context/DataContext';
import Selector from './components/Selector';

function App() {
  return (
    <div>
      <DataProvider>
        <Selector />
      </DataProvider>
    </div>
  );
}

export default App;
