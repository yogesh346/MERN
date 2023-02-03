
import './App.css';
//import Rooute from './component/Rouute'
//import store from './store/store';
import { addtoCart } from './redux/action';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const product = {
    name:'I phone',
    type:'mobile',
    price:10000,
    color:'red'

  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addtoCart(product))}>Add TO CART</button>
    </div>
  );
}

export default App;
