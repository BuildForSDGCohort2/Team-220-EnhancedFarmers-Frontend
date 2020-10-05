/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { toast } from "react-toastify";

import Card from "../reUsableComponents/displaySingleitemComponent";

import { deleteProduct, getProductsByCatory } from "../../services/products";

const ProductCategories = (props) => {
  const { user } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getPoductCatories = async () => {
      const parsed = queryString.parse(props.location.search);
      const { data } = await getProductsByCatory(parsed.category);

      setProducts(data.data);
    };
    getPoductCatories();
  }, [props]);

  const handleDelete = async (item) => {
    const remaining = products.filter((m) => m !== item);
    setProducts(remaining);
    try {
      const response = await deleteProduct(item.id);
      toast.success(response.data.message);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.info("Product is not found or it was deleted");
      }
      if (ex.response && ex.response.status === 401) {
        toast.error("Sorry! You have no right to delete a item");
      }

      setProducts(remaining);
    }
  };

  return (
    <div className="container">
      <h1>Product Cagetories</h1>
      <div className="preview">
        {!products.length ? (
          <h1>No Products yet</h1>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              item={product}
              user={user}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCategories;
