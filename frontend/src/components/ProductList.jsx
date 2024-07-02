import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // State to manage loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          if (response.status === 401) {
            navigate('/login');
          }
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false); // Update loading state after fetch completes
      }
    };

    fetchProducts();
  }, [navigate]);

  const filteredProducts = products.filter(product =>
    product.dataCategory.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-list">
        {loading ? (
          <p>Loading...</p>
        ) : filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
