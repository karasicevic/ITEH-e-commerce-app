import React from 'react';
import ProductGrid from './ProductGrid';

const Ponuda = ({products}) => {
 

  return (
    <div>
      <h1 className="compText margin-left"> //Ponuda</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default Ponuda;
