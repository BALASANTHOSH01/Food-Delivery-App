import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { FoodContext } from '../context/Context';

const Homeproduct = () => {
    const {allproducts} = useContext(FoodContext);
    const {productid}=useParams();
    const product =
  return (
    <div>

    </div>
  )
}

export default Homeproduct;