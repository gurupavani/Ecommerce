import React, { createContext, useContext, useState } from "react";

const CategoryContext = createContext();
const CategoryUpdateContext = createContext();

export const useCategory = () => useContext(CategoryContext);
export const useUpdateCategory = () => useContext(CategoryUpdateContext);

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState(null);

  const updateCategory = (temp) => setCategory(temp);
  return (
    <CategoryContext.Provider value={category}>
      <CategoryUpdateContext.Provider value={updateCategory}>
        {children}
      </CategoryUpdateContext.Provider>
    </CategoryContext.Provider>
  );
};

