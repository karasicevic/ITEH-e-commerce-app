import React from 'react';
import ProductGrid from './ProductGrid';

const Ponuda = ({products}) => {
 

  return (
    <div className='back'>
      <h1 className="compText center-align "> Proizvodi </h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default Ponuda;
