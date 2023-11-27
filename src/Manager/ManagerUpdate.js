import "./ManagerRegister.css";
import ManagerNav from "./ManagerNav";
import ManagerUpdateSideBar from "./ManagerUpdateSideBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useState } from "react";
import EmptyRegister from "./EmptyRegister";
import "./ManagerUpdate.css";
const ManagerUpdate = () => {
  const [CheckCafeReg, setCheckCafeReg] = useState(true);
  const handleCafeCheck = (isCafeRegistered) => {
    setCheckCafeReg(isCafeRegistered);
  };

  return (
    <div className="manager">
      <ManagerNav />
      <div className="manager_background">
        {CheckCafeReg ? (
          <>
            <ManagerUpdateSideBar />
            <Outlet context={{ onCafeCheck: handleCafeCheck }} />
          </>
        ) : (
          <EmptyRegister />
        )}
      </div>
      <Footer />
    </div>
  );
};
export default ManagerUpdate;
