import React from 'react';

export default function ProductList({ products, addToCart }) {
    return (
        <>
            <h1>Products</h1>
            <div className='products'>
                {products.map((product, idx) => (
                    <div className='product' key={idx}>
                     {/* jeg kalder på informationerne, som står i produktlisterne */}
                        <h3>{product.brand}</h3>
                        <img src={product.image} alt={product.Name} />
                        <h4 className='name'>{product.Name}</h4>
                        <h4 className='color'>{product.color}</h4>
                        <h4 className='cost'>{product.cost}</h4>
                        <h4>{product.size}</h4>
                        <p>{product.description}</p>
                        {/* jeg kalder på addtocart, som gør at jeg kan tilføje mit product til shoppingbag */}
               
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}