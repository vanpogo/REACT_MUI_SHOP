import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const value = { openDrawer, setOpenDrawer, showSearchBox, setShowSearchBox };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
