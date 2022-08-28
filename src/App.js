import './App.css';
import MainInterface from './components/MainInterface';
import DataContext from './store/data-context';

function App() {
  return (
    <DataContext.Provider
      value={{
        name: '',
        cardNumber: '',
        pin: '',
        dueDate: '',
      }}
    >
      <MainInterface />
    </DataContext.Provider>
  );
}

export default App;
