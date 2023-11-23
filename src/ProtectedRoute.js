import { useContext } from "react";
import AppContext from "./AppContext";
import { Navigate, Outlet, Routes } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  
  const appContext = useContext(AppContext);
  if (appContext.user === "") {
    // 로그인되지 않았다면 로그인 페이지로 리다이렉트
    alert("로그인을 해주시기 바랍니다.");
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
};

export default ProtectedRoute;