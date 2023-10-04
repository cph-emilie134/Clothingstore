// import logo from './logo.svg';
import './App.css';
// for at jeg kan loope over mine produkter, skal jeg inpoterte useState
import React, {useState} from 'react';
// jeg inpotere mine tre billeder
import nike from "./img/nike.jpg";
import nike2 from "./img/nike2.jpg";
import nike3 from "./img/nike3.jpg";
import ProductList from './Components/ProductList';
import ShoppingBag from './Components/ShoppingBag';

const PAGE_PRODUCTS ='products';
const PAGE_SHOPPINGBAG ='shoppingBag';







function App() {
  // når jeg trykker på aad to cart knappen, vil jeg skubbe produktet indtil cart
 const [cart, setCart] = useState([]);

 const[page, setPage]= useState('products');


 const [products, setProducts] = useState([
 {
  id: '1',
  image:require('./img/nike.jpg'),
  brand: 'Nick',
  Name:'',
  model:'',
  cost:'999kr',
  size:'str 39',
  color:'red',
  description: 'Den klassiske skatersko, der fungerer med og uden skateboard. ',

 },

{
  id: '2',
  image: require('./img/nike2.jpg'),
  brand: 'Nick',
  Name:'',
  model:'',
  cost:'1500kr',
  size:'str 39',
  color:'red',
  description: 'Den klassiske skatersko, der fungerer med og uden skateboard. ',
},

{
  id: '3',
  image: require('./img/nike3.jpg'),
  brand: 'Nick',
  Name:'',
  model:'',
  cost:'1500kr',
  size:'str 39',
  color:'red',
  description: 'Den klassiske skatersko, der fungerer med og uden skateboard. ',
},




 ]);



 
// jeg skaber forbindelse fra kaneppen til add to cart
 const addToCart = (productSelected) => {

  console.log('HEJ MED DIG');
  setCart([...cart, productSelected])

  setProducts (products.filter(product => product !== productSelected))

 };



 const removeFromShoppingBag =(productToRemove) =>{

  setCart(cart.filter(product => product !== productToRemove))
 };



const navigateTo = (nextpage) =>{

setPage(nextpage);


}

 




return (
  <div className="App">
      <header>
          <button onClick={() => navigateTo(PAGE_SHOPPINGBAG)} className='but'>
              Shopping bag ({cart.length})
          </button>
          <button onClick={() => navigateTo(PAGE_PRODUCTS)} className='but'>View Products</button>
      </header>

      {page == PAGE_PRODUCTS && <ProductList products={products} addToCart={addToCart} />}
      {page == PAGE_SHOPPINGBAG && <ShoppingBag cart={cart} removeFromShoppingBag={removeFromShoppingBag} />}
  </div>
);
}
export default App;
