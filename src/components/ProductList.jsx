// src/components/ProductList.jsx
import React from 'react';
import Product from './Product';

function ProductList({ products, onAddToCart }) {
    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
}

export default ProductList;
