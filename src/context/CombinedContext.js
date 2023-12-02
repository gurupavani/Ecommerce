import React from "react";
import { CartProvider } from "./CartContext";
import { SearchProvider } from "./SearchContext";
import { CategoryProvider } from "./CategoryContext";

const CombinedContext = ({ children }) => {
  return (
    <CartProvider>
      <SearchProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </SearchProvider>
    </CartProvider>
  );
};

export default CombinedContext;
