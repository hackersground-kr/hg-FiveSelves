import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as _ from './style';
import SearchBar from 'components/SearchBar';
import MenuBar from 'components/MenuBar';
import Product from 'components/Product';
import axios from 'axios';

interface AxiosDataType {
  id: number;
  title: string;
  price: number;
  image: string;
  grade: string;
}

const Result = () => {
  const { product } = useParams<{ product: string }>();
  const [searchInput, setSearchInput] = useState('');
  const [axiosData, setAxiosData] = useState<AxiosDataType[]>([]);

  useEffect(() => {
    axios
      .get<AxiosDataType[]>(`http://211.112.175.88:8080/post`)
      .then((response) => {
        setAxiosData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, []);

  console.log(axiosData);

  useEffect(() => {
    if (product) {
      setSearchInput(product);
    }
  }, [product]);

  const filteredItems = axiosData.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <_.Result_Layout>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <_.Result_ProductList>
        {filteredItems.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            grade={product.grade}
            price={Number(product.price)}
          />
        ))}
      </_.Result_ProductList>
      <MenuBar />
    </_.Result_Layout>
  );
};

export default Result;
