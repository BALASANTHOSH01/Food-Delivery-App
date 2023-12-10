import React from 'react';
import { useContext } from 'react';
import { FoodContext } from '../context/Context';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import { Link, useParams } from 'react-router-dom';
import BreadScrem from '../components/BreadScrem/BreadScrem';
import Description from '../components/Description/Description';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Product = () => {

    const {allproducts,addtoCart} = useContext(FoodContext);
    // console.log(allproducts);
    const {productid} = useParams();
    const product = allproducts.find((item)=> item.id === Number(productid) );
    // console.log(product);

    if(product){

      const name = product.name;
      const image = product.image;
      const old_Price = product.old_price;
      const new_Price = product.new_price;
      const id = product.id;
      const category = product.category;

      return (
        <div>
          
            <BreadScrem name={name} category={category} />
            <ProductDisplay image={image} old_Price={old_Price} new_Price={new_Price} name={name} id={id} category={category} addtoCart={addtoCart} />
            <Description/>
            <RelatedProduct/>
        </div>
      )

    } else{

      return (
        <div className=' text-center items-center p-5 m-5'>
          <p>Product not found.</p>
          <Link to={"/"}>
          
          <button className=' text-3xl mt-10 border-black border-[1px] p-4 rounded-[25px] hover:opacity-50 text-red-600'> Go to Home</button>
          </Link>
        </div>
      );
    }

}

export default Product;