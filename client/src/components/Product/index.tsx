/*eslint-disable*/

import React from 'react';
import * as _ from './style';

interface OwnProps {
  image: string;
  title: string;
  grade: string;
  price: number;
}

const Product = ({ image, title, grade, price }: OwnProps) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(price);

  return (
    <_.Product_Layout>
      <_.Product_Image src={image} alt="상품" />
      <_.Product_Content>
        <_.Product_Title>{title}</_.Product_Title>
        <_.Product_Grade>{grade}등급</_.Product_Grade>
      </_.Product_Content>
      <_.Product_Price>{formattedPrice}</_.Product_Price>
    </_.Product_Layout>
  );
};

export default Product;
