import "./ManagerRegister.css";
import ManagerNav from "./ManagerNav";
import ManagerUpdateSideBar from "./ManagerUpdateSideBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useState } from "react";
import EmptyRegister from "./EmptyRegister";

const ManagerUpdate = () => {
  const [CheckCafeReg, setCheckCafeReg] = useState(true);
  const handleCafeCheck = (isCafeRegistered) => {
    setCheckCafeReg(isCafeRegistered);
  };

  return (
    <div className="manager">
      <ManagerNav />
      {CheckCafeReg ? (
        <>
          <ManagerUpdateSideBar />
          <Outlet context={{ onCafeCheck: handleCafeCheck }} />
        </>
      ) : (
        <EmptyRegister />
      )}
      <Footer />
    </div>
  );
};
export default ManagerUpdate;
