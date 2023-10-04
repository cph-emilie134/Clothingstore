import React from 'react';

export default function ShoppingBag({ cart, removeFromShoppingBag }) {
    return (
        <>
            <h1>ShoppingBag</h1>
            <div className='products'>
                {cart.map((product, idx) => (
                    <div className='product' key={idx}>
                        {/* jeg kalder på informationerne, som står i produktlisterne */}
                        <h3>{product.brand}</h3>
                        <img src={product.image} alt={product.Name} />
                        <h4 className='name'>{product.Name}</h4>
                        <h4 className='color'>{product.color}</h4>
                        <h4 className='cost'>{product.cost}</h4>
                        <h4>{product.size}</h4>
                        <p>{product.description}</p>
                        {/* jeg kalder på funktionen removeFromShoppinBag, som remover produktet */}
                        <button onClick={() => removeFromShoppingBag(product)}>Remove</button>
                    </div>
                ))}
            </div>
        </>
    );
}
