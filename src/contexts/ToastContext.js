import { createContext, useContext, useState } from "react";

const ToastContext = createContext("");

export const ToastProvider = ({ children }) => {
  // Toast Logic
  const [openToast, setOpenToast] = useState(false);
  const handleOpenToast = () => {
    setOpenToast(true);
  };
  const handleCloseToast = () => {
    setOpenToast(false);
  };
  // ===== Toast Logic =====
  return (
    <ToastContext.Provider
      value={{ openToast, handleOpenToast, handleCloseToast }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
