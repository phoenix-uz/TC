"use client";
import ProductsSlider from "./ProductsSlider";
import "./styles.sass";

const Products = () => {
  return (
    <div className='products'>
      <div className='container'>
        <div className='productsContainer'>
          <div className='productsTitle'>
            <h2 className='title'>Продукты</h2>
          </div>
          <div className='productsSlider'>
            <ProductsSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
