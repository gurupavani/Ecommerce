import { useEffect, useState } from "react";
import { getProducts, getSingleProduct } from "../../api/products";
import { useParams } from "react-router-dom";

export const useGetSingleProduct = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const getData = async () => {
    const res = await getSingleProduct(params.id);
    if (res) {
      if (res.error) {
        // handle error
      } else {
        setData(res);
      }
    } else {
      setData(null);
    }
  };

  useEffect(() => {
    getData();
  }, [params.id]);
  return [data, getData];
};
