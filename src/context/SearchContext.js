import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();
const SearchUpdateContext = createContext();

export const useSearch = () => useContext(SearchContext);
export const useUpdateSearch = () => useContext(SearchUpdateContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (temp) => setSearch(temp);
  return (
    <SearchContext.Provider value={search}>
      <SearchUpdateContext.Provider value={updateSearch}>
        {children}
      </SearchUpdateContext.Provider>
    </SearchContext.Provider>
  );
};
