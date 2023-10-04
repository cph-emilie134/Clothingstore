import React from 'react';

export default function ShoppingBag({ cart, removeFromShoppingBag }) {
    return (
        <>
            <h1>ShoppingBag</h1>
            <div className='products'>
                {cart.map((product, idx) => (
                    <div className='product' key={idx}>
                        <h3>{product.brand}</h3>
                        <img src={product.image} alt={product.Name} />
                        <h4>{product.Name}</h4>
                        <h4 className='cost'>{product.cost}</h4>
                        <h4>{product.size}</h4>
                        <p>{product.description}</p>
                        <button onClick={() => removeFromShoppingBag(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
}
