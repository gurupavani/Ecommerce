import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";

export const useGetProducts = () => {
  const [data, setData] = useState([]);
  const search = "";
  const getData = async () => {
    const res = await getProducts(search);
    if (res) {
      if (res.error) {
        // handle error
      } else {
        setData(res.products);
      }
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return [data,getData];
};
