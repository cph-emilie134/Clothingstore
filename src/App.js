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


// min array af produkter, som hver har individuele informationer 
 const [products, setProducts] = useState([
 {
  id: '1',
  image:require('./img/nike.jpg'),
  Name:'Nike Air Force 1 07',
  model:'Air Force',
  cost:'999kr',
  size:'str 39',
  color:'white',
  description: 'Det strålende lever videre i Nike Air Force 1 07, OG-basketballskoen.',

 },

{
  id: '2',
  image: require('./img/nike2.jpg'),
  Name:'Nike Air Force 1 07',
  model:'',
  cost:'1500kr',
  size:'str 39',
  color:'White',
  description: 'Den klassiske skatersko, der fungerer med og uden skateboard. ',
},

{
  id: '3',
  image: require('./img/nike3.jpg'),
  Name:'Nike Air Force 1 07',
  model:'',
  cost:'699kr',
  size:'str 39',
  color:'White',
  description: 'Den klassiske skatersko, der fungerer med og uden skateboard. ',
},




 ]);




// jeg skaber forbindelse fra kaneppen til add to cart
 const addToCart = (productSelected) => {

  console.log('HEJ MED DIG');
  setCart([...cart, productSelected])

// jeg fjerner produktet fra produkt siden, når brugern har trykket add to cart
  setProducts (products.filter(product => product !== productSelected))

 };

// jeg fjerner produktet far shoppingbag siden, mår brugern trykker på remove knappen 
 const removeFromShoppingBag =(productToRemove) =>{

  setCart(cart.filter(product => product !== productToRemove))

  // jeg gør at produkterne kommer tilbage til view producks, så start siden ser rigtig ud

  setProducts ([...products,productToRemove])





 };


//  når jeg kalder på navigateto, med en bestemt sideværdi, opdatere den sidetilstanden til den værdi, ved hjælp af
// setpage=funktionen

const navigateTo = (nextpage) =>{

setPage(nextpage);


}

 




return (
  <div className="App">

      <header>
        {/* her er knappen til min Shoppingbag, denne knap tæller antalet af produktet, som er tilføjet til shoppingbag. 
        knappen fører også over til siden som hedder shopping bag */}
          <button onClick={() => navigateTo(PAGE_SHOPPINGBAG)} className='but'>
              Shopping bag ({cart.length})
          </button>
          {/* her er knappen som gør at vi kan komme tilbage til produktsiden fra siden "shoppingbag" */}
          <button onClick={() => navigateTo(PAGE_PRODUCTS)} className='but'>View Products</button>
      </header>


      {/* jeg gør det muligt at se mine produkter på min produkt side, og bruger funktionen addtocat
      , som gør det muligt at tilføje produkter til shopingbag siden */}
      {page == PAGE_PRODUCTS && <ProductList products={products} addToCart={addToCart} />}
      {/* jeg gør det muligt at se mine produkter på siden der hedder shoppingbag. jeg bruger også funktionen 
      removeFromShoppingBag, så jeg kan fjerne mit produkt fra shoppingbag siden. */}
      {page == PAGE_SHOPPINGBAG && <ShoppingBag cart={cart} removeFromShoppingBag={removeFromShoppingBag} />}
  </div>
);
}
export default App;
