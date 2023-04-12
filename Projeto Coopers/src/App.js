import './assets/css/App.css';
import Footer from './components/Footer';
import GetInTouchy from './components/GetInTouchy';
import Header from './components/Header'
import TodoList from './components/TodoList';
import GoodThings from './components/GoodThings';


function App() {
  return (
    <div className="App">
      < Header />
      < TodoList />
      < GoodThings />
      < GetInTouchy />
      < Footer />
    </div>
  );
}

export default App;
