import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import { useSearch } from "../../context/SearchContext";

export const useGetProducts = () => {
  const [data, setData] = useState([]);
  const search = useSearch();
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

  // useEffect(() => {
  //   console.log(search)
  // }, [search]);

  return [data,getData];
};
