import './App.css';
import Cart from './component/cart/Cart';
import Dishes from './component/dishes/Dishes';
import Filter from './component/filter/Filter';

function App() {
  return (
    <div className="App">
      <div className='block'>
        <Filter />
        <Cart />
      </div>
      <div className='block'>
        <Dishes />
      </div>
    </div>
  );
}

export default App;
