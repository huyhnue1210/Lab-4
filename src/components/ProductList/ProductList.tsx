import { useEffect, useState } from 'react';
import instance from '~/apis';
import { TProduct } from '~/interfaces/Product';
import style from './ProductList.module.scss';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await instance.get(`/products`);
      setProducts(data);
      // console.log(data);

    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <div className="row">
        {products.map((item) => {
          return (
            <div className="col-4">
              <div className={style.productCart} key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <h3 className="card-title">{item.title}</h3>
                </Link>
                <div>{item.price}</div>
                <Link to={`/product/${item.id}`}>
                  <img width={'100%'} src={item.thumbnail} alt={item.title} />
                </Link>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
